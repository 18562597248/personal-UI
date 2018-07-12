<template>
  <div class="hd-transfer">
    <div class="hd-transfer-origin-placeholder" v-if="leftData==undefined||leftData==null">{{placeholder}}</div>
    <div class="hd-transfer-origin" v-else>
      <div class="hd-transfer-origin-title" v-show="$slots.leftTitle||titles[0]!=''">
        <slot name="leftTitle"></slot>
        <span>{{titles[0]}}</span>
      </div>
      <div ref="left-table-scroll" class="hd-transfer-origin-body" :style="{'height': ($slots.leftFooter==undefined ? ($slots.rightTitle==undefined&&titles[1]=='' ? tableHeight+36 : tableHeight)+36 : ($slots.leftTitle==undefined&&titles[0]=='' ? tableHeight+36 : tableHeight)) + 'px'}">
        <table-transfer-item :t_Data="leftData" :t_Columns="columns" @valid="leftValid" @unvalid="leftUnvalid" @checkChange="leftChange" @itemDClick="leftDClick" v-if="type=='table'"></table-transfer-item>
      </div>
      <div class="hd-transfer-origin-footer" v-show="this.$slots.leftFooter">
        <slot name="leftFooter"></slot>
      </div>
    </div>
    <hd-button-group class="hd-transfer-buttongroup-if" type="vertical" v-if="(operations)">
      <hd-button class="hd-transfer-button" :disabled="leftOperationDisabled" noRadius @click="leftOperationClick">
        <hd-icon class="hd-transfer-left-button-icon" type="fa fa-chevron-left"></hd-icon>
        {{(operations[0]?operations[0]:'')}}
      </hd-button>
      <br/>
      <hd-button class="hd-transfer-button" :disabled="rightOperationDisabled" noRadius @click="rightOperationClick">
        {{(operations[1]?operations[1]:'')}}
        <hd-icon class="hd-transfer-right-button-icon" type="fa fa-chevron-right"></hd-icon>
      </hd-button>
    </hd-button-group>
    <div class="hd-transfer-buttongroup-else" v-else></div>
    <div class="hd-transfer-aim-placeholder" v-if="rightData==undefined||rightData==null">{{placeholder}}</div>
    <div class="hd-transfer-aim" v-else>
      <div class="hd-transfer-aim-title" v-show="$slots.rightTitle||titles[1]!=''">
        <slot name="rightTitle"></slot>
        <span>{{titles[1]}}</span>
      </div>
      <div ref="right-table-scroll" class="hd-transfer-aim-body" :style="{'height': (this.$slots.rightFooter==undefined ? ($slots.rightTitle==undefined&&titles[1]=='' ? tableHeight+36 : tableHeight)+36 : ($slots.rightTitle==undefined&&titles[1]=='' ? tableHeight+36 : tableHeight)) + 'px'}">
        <table-transfer-item :t_Data="rightData" :t_Columns="columns" @valid="rightValid" @unvalid="rightUnvalid" @checkChange="rightChange" @itemDClick="rightDClick" v-if="type=='table'"></table-transfer-item>
      </div>
      <div class="hd-transfer-aim-footer" v-show="this.$slots.rightFooter">
        <slot name="rightFooter"></slot>
      </div>
    </div>
  </div>
</template>
<script>
  import { isOneOf } from 'src/utils/validator.js'
  import hdButton from 'components/button'
  import hdButtonGroup from 'components/buttongroup'
  import hdIcon from 'components/icon'
  import emitter from 'src/utils/emitter';
  import tableTransferItem from './TableTransferItem.vue';
  import scrollEvent from 'src/utils/scroll-event';
  export default {
    name:'hd-transfer',
    mixins: [emitter,scrollEvent],
    componentName: 'hdTransfer',
    props:{
      type:{
        validator(value){
          return isOneOf(value, ['table'])
        },
        default:'table'
      },                           //穿梭框内容元素 默认table
      leftData:[Array],                                         //左侧渲染数据
      rightData:[Array],                                        //右侧渲染数据
      columns:[Array],                                          //两侧列名
      operations:{
        type:[Boolean,Array],
        default:function () {return ['','']}
      },                                        //两个按钮的文本
      titles:{
        type:[Array],
        default:function () {return ['','']}
      },                                            //标题集合[左标题，右标题]
      placeholder:[String],                                    //空表格展示内容
      tableHeight:{
        type:[Number],
        default:260
      }                        //表格高度
    },
    data(){
      return {
        value_:this.value,
        leftOperationValid:false,
        rightOperationValid:false,
        leftSelections:[Array],
        rightSelections:[Array],
        leftCheckIndexes:[Array],
        rightCheckIndexes:[Array],
        leftFooterSlot:'',
        rightFooterSlot:'',

        aimElenment:['left-table-scroll','right-table-scroll']
      }
    },
    components: {
      tableTransferItem,
      hdButton,
      hdButtonGroup,
      hdIcon
    },
    computed: {
      leftOperationDisabled(){
        return (!this.leftOperationValid);
      },
      rightOperationDisabled(){
        return (!this.rightOperationValid);
      }
//      ,leftBodyTableHeight(){
//        return (this.$slots.leftFooter==undefined ? this.tableHeight+36 : this.tableHeight);
//      },
//      rightBodyTableHeight(){
//        return (this.$slots.rightFooter==undefined ? this.tableHeight+36 : this.tableHeight);
//      }
    },
    mounted(){},
    methods:{
      leftOperationClick(){
        this.leftOperationValid=false;
        for(let i=0;i<this.rightSelections.length;i++){
          this.$set(this.rightSelections[i],'checked',false);
          this.dataForAdd(this.leftData,this.rightSelections[i]);
        }//将移动数据checked处理为false,添加到左侧old~数据集顶部
        if(this.leftCheckIndexes.length!=0&&this.rightSelections.length!=0){
          for(let i=0;i<this.leftCheckIndexes.length;i++){
            this.leftCheckIndexes[i] += this.rightSelections.length;
          }
        }//移动数据被要求添加到左侧old~数据集顶部，故要将old~leftCheckIndexes(不为空)下标集合做(移动数据集合长度的)下移
        for(let i=this.rightCheckIndexes.length;i>0;i--){
          this.dataForDelete(this.rightData,this.rightCheckIndexes[i-1]);
        }//将右侧数据集合 删除掉 移动了的数据集
        this.rightSelections=[];//清空rightSelections(右侧选中的数据集合)
        this.rightCheckIndexes=[];//清空rightCheckIndexes(右侧选中的数据下标集合)
        this.$emit('change');
      },
      rightOperationClick(){
        this.rightOperationValid=false;
        for(let i=0;i<this.leftSelections.length;i++){
          this.$set(this.leftSelections[i],'checked',false);
          this.dataForAdd(this.rightData,this.leftSelections[i]);
        }
        if(this.rightCheckIndexes.length!=0&&this.leftSelections.length!=0){
          for(let i=0;i<this.rightCheckIndexes.length;i++){
            this.rightCheckIndexes[i] += this.leftSelections.length;
          }
        }
        for(let i=this.leftCheckIndexes.length;i>0;i--){
          this.dataForDelete(this.leftData,this.leftCheckIndexes[i-1]);
        }
        this.leftSelections=[];
        this.leftCheckIndexes=[];
        this.$emit('change');
      },
      leftChange(s,i){
        if(i.length>0){
          this.rightOperationValid=true;
        }else{
          this.rightOperationValid=false;
        }
        this.leftSelections=s;
        this.leftCheckIndexes=i;
        for(let i=0;i<this.leftSelections.length;i++){
          this.$set(this.leftSelections[i],'checked',true);
        }//checked的状态随checkbox被勾选变为true
        for(let i=0;i<this.leftData.length;i++){
          if(this.leftData[i].checked!=undefined&&this.leftData[i].checked==true){
            for(let j=0;j<this.leftCheckIndexes.length;j++){
              if(this.leftCheckIndexes[j]==i){
                this.leftData[i].checked=true;
                break;
              }else{
                this.leftData[i].checked=false;
              }
            }
          }
          if(this.leftCheckIndexes.length==0){
            this.leftData[i].checked=false;
          }
        }//checked的状态随checkbox被取消勾选变为false
      },
      rightChange(s,i){
        if(i.length>0){
          this.leftOperationValid=true;
        }else{
          this.leftOperationValid=false;
        }
        this.rightSelections=s;
        this.rightCheckIndexes=i;
        for(let i=0;i<this.rightSelections.length;i++){
          this.$set(this.rightSelections[i],'checked',true);
        }
        for(let i=0;i<this.rightData.length;i++){
          if(this.rightData[i].checked!=undefined&&this.rightData[i].checked==true){
            for(let j=0;j<this.rightCheckIndexes.length;j++){
              if(this.rightCheckIndexes[j]==i){
                this.rightData[i].checked=true;
                break;
              }else{
                this.rightData[i].checked=false;
              }
            }
          }
          if(this.rightCheckIndexes.length==0){
            this.rightData[i].checked=false;
          }
        }
      },
      leftDClick(e,rowData,index){
        let rowData_ = rowData;
        let dbCindexOfCheck = -1;
        for(let i=0;i<this.leftCheckIndexes.length;i++){
          if(this.leftCheckIndexes[i]==index){
            this.$set(this.leftSelections[i],'checked',false);
            rowData_=this.leftSelections[i];
            dbCindexOfCheck=i;
          }//若被双击的数据已被cheked则将leftSelections中的数据改为checked:false;重新将checked:false的数据赋值给rowData_
        }//利用index找到leftCheckIndexes中rowData -=|是否|=-对应着leftSelections中的一条
        this.dataForAdd(this.rightData,rowData_);//将移动数据添加到右侧
        for(let i=0;i<this.rightCheckIndexes.length;i++){
          this.rightCheckIndexes[i]++;
        }//移动数据被要求添加到右侧侧old~数据集顶部,则(old~右侧的勾选数据下标集合)rightCheckIndexes后移1个位置
        this.dataForDelete(this.leftData,index);
        if(dbCindexOfCheck>=0){
          this.dataForDelete(this.leftSelections,dbCindexOfCheck);
          this.dataForDelete(this.leftCheckIndexes,dbCindexOfCheck);
          if(this.leftCheckIndexes.length>0){
            this.rightOperationValid=true;
          }else{
            this.rightOperationValid=false;
          }
          for(let i=dbCindexOfCheck;i<this.leftCheckIndexes.length;i++){
            this.leftCheckIndexes[i]--;
          }//如果被删除条目不是最后一条,则需要将其后面的(old~下标集合)leftCheckIndexes前移1个位置
        }//如果双击的是checked:true的数据,则需要在删除leftSelections和leftCheckIndexes中删除这一条
        if(this.leftSelections.length>0){
          for(let i=0;i<this.leftSelections.length;i++){
            this.$set(this.leftSelections[i],'checked',true);
          }
        }
        this.$emit('change');
      },
      rightDClick(e,rowData,index){
        let rowData_ = rowData;
        let dbCindexOfCheck = -1;
        for(let i=0;i<this.rightCheckIndexes.length;i++){
          if(this.rightCheckIndexes[i]==index){
            this.$set(this.rightSelections[i],'checked',false);
            rowData_=this.rightSelections[i];
            dbCindexOfCheck=i;
          }
        }
        this.dataForAdd(this.leftData,rowData_);
        for(let i=0;i<this.leftCheckIndexes.length;i++){
          this.leftCheckIndexes[i]++;
        }
        this.dataForDelete(this.rightData,index);
        if(dbCindexOfCheck>=0){
          this.dataForDelete(this.rightSelections,dbCindexOfCheck);
          this.dataForDelete(this.rightCheckIndexes,dbCindexOfCheck);
          if(this.rightCheckIndexes.length>0){
            this.leftOperationValid=true;
          }else{
            this.leftOperationValid=false;
          }
          for(let i=dbCindexOfCheck;i<this.rightCheckIndexes.length;i++){
            this.rightCheckIndexes[i]--;
          }
        }
        if(this.rightSelections.length>0){
          for(let i=0;i<this.rightSelections.length;i++){
            this.$set(this.rightSelections[i],'checked',true);
          }
        }
        this.$emit('change');
      },
      leftValid(s){
        this.rightOperationValid=true;
      },
      leftUnvalid(s){
        this.rightOperationValid=false;
      },
      rightValid(s){
        this.leftOperationValid=true;
      },
      rightUnvalid(s){
        this.leftOperationValid=false;
      },
      dataForAdd(d,newd){
        d.unshift(newd);
      },
      dataForDelete(d,i){
        d.splice(i,1);
      }
    },
    watch:{}
  }
</script>
