<template>
  <li class="hd-select-dropdown__item" :class="liCss" :style="{display: display}" @click.stop="select()" v-if="multi">
    {{item.text}}
  </li>
  <li class="hd-select-dropdown__item" :class="liCss" :style="{display: display}" @click="sel()" v-else>
    {{item.text}}
  </li>
</template>
<script>
  export default{
    name: 'hd-option',
    data(){
      return{
        multi:false,//是否是多选
        selected:false,//是否是选中状态
        display: 'block',//处理查询时显示的选项
        oneList:false,//多选时下拉列表是否只有一条选项，包括查询结果
        choosed:false//方向键选择选中状态
      }
    },
    props:{
      item:Object,
      index:Number
    },
    computed:{
      liCss(){
        return{
          'selected' : this.selected,
          'choosed' : this.choosed
        }
      }
    },
    watch:{
      item(){
        this.$parent.optionSelected()
      }
    },
    beforeMount(){
      if(this.$parent.multipled === true){
        this.multi = true;
      }else{
        this.multi = false
      }
    },
    created(){
      this.$parent.options.push(this);
      this.$watch(
              function(){
                return this.$parent.value
              },
              function(n,o){
                this.selected = false;
                for(let i = 0;i < n.length;i = i + 1){
                  if(this.item.value === n[i]){
                    this.selected = true
                  }
                }
              },
              {
                deep:true
              }
      );
    },
    methods:{
      select(){
        this.$parent.$refs.select_input.focus();
        if (this.selected === false){
          this.$parent.value.push(this.item.value);
          this.$parent.handleChange(this.$parent.value);
          this.$parent.selectedtext='';
          if(this.oneList === true){
            this.$parent.showPopper = false
          }
        }else{
          this.$parent.value.splice(this.$parent.value.indexOf(this.item.value),1);
          this.$parent.removeChange(this.item.value);
          this.$parent.handleChange(this.$parent.value);
          this.$parent.selectedtext='';
          if(this.oneList === true){
            this.$parent.showPopper = false;
          }
        }
      },
      sel(){
        this.$parent.$refs.select_input.focus();
        if(this.selected === false){
          if(this.$parent.value.length <= 0){
            this.$parent.value.push(this.item.value);
            this.$parent.handleChange(this.$parent.value);
            this.$parent.selectedtext=this.item.text
          }else{
            this.$parent.value.splice(0,1);
            this.$parent.value.push(this.item.value);
            this.$parent.handleChange(this.$parent.value);
            this.$parent.selectedtext=this.item.text
          }
        }
        this.$parent.showPopper = false;
      }
    }
  }
</script>
<style>
  .hd-select-dropdown__item{
    font-size: 13px;
    padding: 5px 10px;
    position: relative;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    height: 30px;
    line-height: 1.5;
    box-sizing: border-box;
    cursor: pointer;
  }
  .hd-select-dropdown__item:hover{
    background-color: #eeeeee;
  }
  .hd-select-dropdown__item.selected{
    background-color: #2dc3e8;
  }
  .hd-select-dropdown__item.selected:hover{
    background-color: #1c8de0;
  }
  .hd-select-dropdown__item.choosed{
    background-color: #eeeeee;
  }
  .hd-select-dropdown__item.selected.choosed{
    background-color: #1c8de0;
  }
</style>
