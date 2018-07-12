<template>
  <a :id="id"
     :tabindex="btnTabIndex"
     class="btn"
     :class="btnCls"
     :data-toggle="dropDown"
     :disabled="disable"
     @click="btnClick"
     @focus="btnFocus"
     @blur="btnBlur"
     @keydown="btnKeydown"
     @keyup="btnKeyup"
  >
    <!--<div v-if="this.isloading&&this.is_clicked"><hd-icon type="fa fa-spinner fa-spin"></hd-icon> {{$t("comps.common.button.waitMessage")}}</div>--><!--暂时对国际化不支持-->
    <div v-if="this.isloading&&this.is_clicked"><hd-icon type="fa fa-spinner fa-spin"></hd-icon>执行中...</div>
    <slot v-else></slot>
  </a>
</template>
<script>
  import { isOneOf } from 'src/utils/validator.js'
  const cssPreFix = 'btn-'
  export default {
    name:'hd-button',
    props:{
        id:{
        type: [String, Number],
        default:''
      },
      tabindex:{
        type: [String, Number],
        default:''
      },
      type: {
        validator(value){
          return isOneOf(value,['default','primary','info','success','danger','warning','link','withtooltip','hdprimary'])
        },default:'default'
      },
      color:{
        validator(value){
          return isOneOf(value,['white','blue','sky','azure','palegreen','yellow','darkorange','magenta','purple','maroon'])
        },default:'white'
      },
      fontColor:{
        validator(value){
          return isOneOf(value,['carbon','themeprimary','themesecondary','themethirdcolor','themefourthcolor','themefifthcolor','white','snow','whitesmoke','seashell','ivory','platinum','lightgray','gray','darkgray','silver','sonic-silver','storm-cloud','lightcarbon','slate-gray','darkcarbon','blue','info','sky','primary','azure','blueberry','palegreen','success','green','lightyellow','yellow','warning','gold','orange','lightred','darkorange','red','pink','darkpink','danger','magenta','purple','maroon'])
        }
      },
      bgColor:{
        validator(value){
          return isOneOf(value,['white','themeprimary','themesecondary','themethirdcolor','themefourthcolor','themefifthcolor','snow','whitesmoke','seashell','ivory','platinum','lightgray','gray','darkgray','silver','sonic-silver','storm-cloud','lightcarbon','carbon','slate-gray','darkcarbon','blue','info','sky','primary','azure','blueberry','palegreen','success','green','lightyellow','yellow','warning','gold','orange','lightred','darkorange','red','pink','darkpink','danger','magenta','purple','maroon'])
        }
      },
      bdColor:{
        validator(value){
          return isOneOf(value,['gray','themeprimary','themesecondary','themethirdcolor','themefourthcolor','themefifthcolor','white','snow','whitesmoke','seashell','ivory','platinum','lightgray','darkgray','silver','sonic-silver','storm-cloud','lightcarbon','carbon','slate-gray','darkcarbon','blue','info','sky','primary','azure','blueberry','palegreen','success','green','lightyellow','yellow','warning','gold','orange','lightred','darkorange','red','pink','darkpink','danger','magenta','purple','maroon'])
        }
      },
      shape:{
        validator(value){
          return isOneOf(value,['rectangle','circle'])
        },default:'rectangle'
      },
      size:{
        validator(value){
          return isOneOf(value,['lg','normal','sm','xs'])
        },default:'normal'
      },
      disabled:Boolean,
      loading:Boolean,
      shiny:Boolean,
      noRadius:Boolean,
      dropdown:Boolean,
      block:Boolean,
      isloading:Boolean,
      btnTabIndex:null
    },
    data:function (){
      return{
        is_clicked:false,
        disable:false,
        btn_circle:false,
        btn_xs:false,
        icon_is:''
      }
    },
    computed:{
      btnCls(){
        return [
          this.block ? cssPreFix+'block':'',
          this.noRadius ? cssPreFix+'noRadius':'',
          this.type ? cssPreFix+this.type:'' ,
          this.color!='white' ? cssPreFix+this.color:'',
          this.fontColor ? this.fontColor:'',
          this.bgColor ? 'bg-'+this.bgColor:'',
          this.bdColor ? 'bordered-'+this.bdColor:'',
          this.shape!='rectangle' ? cssPreFix+this.shape : '' ,
          this.size!='normal' ? cssPreFix+this.size : '',
          {
            'shiny':this.shiny,
            'is-loading': this.loading,
            'dropdown-toggle': this.dropdown
          }
        ]
      },
      dropDown(){
        return [this.dropdown ? 'dropdown':'']
      }
    },
    mounted(){
      const btn_class_name = this.$el.className.split(' ');
      for(var i=0;i<btn_class_name.length;i++){
        if(btn_class_name[i]==='btn-circle'){this.btn_circle=true;}
        if(btn_class_name[i]==='btn-xs'){this.btn_xs=true;}
      }
      if(this.btn_circle&&this.btn_xs){
        if(this.$slots.default[0].tag!=undefined){
          const btn_tag = this.$slots.default[0].tag.split('-');
          if((btn_tag[btn_tag.length-1])==='icon'){
            const icon_class_name = this.$el.firstChild.className.split(' ');
            for(var i=0;i<icon_class_name.length;i++){
//              if(icon_class_name[i]==='fa'){this.icon_is='fa';}
//              if(icon_class_name[i]==='glyphicon'){this.icon_is='glyphicon';}
//              if(icon_class_name[i]==='typcn'){this.icon_is='typcn';}
//              if(icon_class_name[i]==='wi'){this.icon_is='wi';}
              if(icon_class_name[i]==='hd-icon'){
//                this.icon_is='hd';//在此简写反选器功能
                    addClass(this.$el,('has-hd-icon'));
              }
            }
//            switch (this.icon_is){ //slot性质 维护做检测fa类、glyphicon类、typcn类、wi类用
//              case 'fa':{
//                for(var i=0;i<icon_class_name.length;i++){
//                  if((icon_class_name[i].split('fa-')).length>1){
//                    addClass(this.$el,('has-'+icon_class_name[i]));
//                  }
//                }
//              }break;
//              case 'glyphicon':{
//                for(var i=0;i<icon_class_name.length;i++){
//                  if((icon_class_name[i].split('glyphicon-')).length>1){
//                    addClass(this.$el,('has-'+icon_class_name[i]));
//                  }
//                }
//              }break;
//              case 'typcn':{
//                for(var i=0;i<icon_class_name.length;i++){
//                  if((icon_class_name[i].split('typcn-')).length>1){
//                    addClass(this.$el,('has-'+icon_class_name[i]));
//                  }
//                }
//              }break;
//              case 'wi':{
//                for(var i=0;i<icon_class_name.length;i++){
//                  if((icon_class_name[i].split('wi-')).length>1){
//                    addClass(this.$el,('has-'+icon_class_name[i]));
//                  }
//                }
//              }break;
//              case 'hd':{
//                for(var i=0;i<icon_class_name.length;i++){
//                  if((icon_class_name[i].split('hd-')).length>1){
//                    addClass(this.$el,('has-hd-icon'));
//                  }
//                }
//              }break;//新增 hd-icon
//              default:break;
//            }
          }
        }
      }//做btn下的icon类反选器使用
      if(this.disabled){
        this.disable=true;
      }else{
        this.disable=false;
      };
    },
    methods: {
      btnClick(event) {
        if(this.disable){return;}
        if(this.isloading){
          this.is_clicked=true;
          this.disable=true;
        }
        this.$emit('click',event);
      },
      btnFocus(event){
        this.$emit('focus',event);
      },
      btnBlur(event){
        this.$emit('blur',event);
      },
      btnKeydown(event){
        if(event.code==='Enter'&&event.key==='Enter'&&event.keyCode===13){
          this.btnClick(event);
        }
        this.$emit('keydown',event);
      },
      btnKeyup(event){
        this.$emit('keyup',event);
      }
    },
    watch:{
      disabled(val){
        this.disable=val;
      }
    }
  }
  function addClass(elem, cls) {
    var oldCls = elem.className;
    if (oldCls) {
      oldCls += " ";
    }
    elem.className = oldCls + cls;
  }
</script>
