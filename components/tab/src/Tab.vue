<template>
  <div class="tab-pane active" :id="id" :class="bodyCss" v-show="active">
    <slot></slot>
  </div>
</template>
<script>
  import { isOneOf } from 'src/utils/validator.js'
  export default {
    name:'hd-tab',
    data(){
      return{
        active:false
      }
    },
    props:{
      title:String,
      id:[String,Number],
      'is-active':Boolean,
      disabled:Boolean,
      'tab-header-bg-color':{
        type:String,
        validator(value){
          return isOneOf(value, ['','blue','red','yellow','white','themeprimary','themesecondary','themethirdcolor','themefourthcolor','themefifthcolor','snow','whitesmoke','seashell','ivory','platinum','lightgray','gray','darkgray','silver','sonic-silver','storm-cloud','lightcarbon','carbon','slate-gray','darkcarbon','info','sky','primary','azure','blueberry','palegreen','success','green','lightyellow','warning','gold','orange','lightred','darkorange','pink','darkpink','danger','magenta','purple','maroon'])
        },
        default:''
      },
      'tab-header-color':{
        type:String,
        validator(value){
          return isOneOf(value, ['','blue','red','yellow','white','themeprimary','themesecondary','themethirdcolor','themefourthcolor','themefifthcolor','snow','whitesmoke','seashell','ivory','platinum','lightgray','gray','darkgray','silver','sonic-silver','storm-cloud','lightcarbon','carbon','slate-gray','darkcarbon','info','sky','primary','azure','blueberry','palegreen','success','green','lightyellow','warning','gold','orange','lightred','darkorange','pink','darkpink','danger','magenta','purple','maroon'])
        },
        default:''
      },
      'tab-header-line-color':{
        type:String,
        validator(value){
          return isOneOf(value, ['','blue','red','yellow','white','themeprimary','themesecondary','themethirdcolor','themefourthcolor','themefifthcolor','snow','whitesmoke','seashell','ivory','platinum','lightgray','gray','darkgray','silver','sonic-silver','storm-cloud','lightcarbon','carbon','slate-gray','darkcarbon','info','sky','primary','azure','blueberry','palegreen','success','green','lightyellow','warning','gold','orange','lightred','darkorange','pink','darkpink','danger','magenta','purple','maroon'])
        },
        default:''
      },
      'tab-body-bg-color':{
        type:String,
        validator(value){
          return isOneOf(value, ['','blue','red','yellow','white','themeprimary','themesecondary','themethirdcolor','themefourthcolor','themefifthcolor','snow','whitesmoke','seashell','ivory','platinum','lightgray','gray','darkgray','silver','sonic-silver','storm-cloud','lightcarbon','carbon','slate-gray','darkcarbon','info','sky','primary','azure','blueberry','palegreen','success','green','lightyellow','warning','gold','orange','lightred','darkorange','pink','darkpink','danger','magenta','purple','maroon'])
        },
        default:''
      },
      'tab-body-color':{
        type:String,
        validator(value){
          return isOneOf(value, ['','blue','red','yellow','white','themeprimary','themesecondary','themethirdcolor','themefourthcolor','themefifthcolor','snow','whitesmoke','seashell','ivory','platinum','lightgray','gray','darkgray','silver','sonic-silver','storm-cloud','lightcarbon','carbon','slate-gray','darkcarbon','info','sky','primary','azure','blueberry','palegreen','success','green','lightyellow','warning','gold','orange','lightred','darkorange','pink','darkpink','danger','magenta','purple','maroon'])
        },
        default:''
      }
    },
    computed:{
      bodyCss(){
        return [
          this.tabBodyBgColor ? 'bg-' + this.tabBodyBgColor : '',
          this.tabBodyColor ? this.tabBodyColor : ''
        ]
      },
      aCss(){
        return [
          this.tabHeaderBgColor ? 'bg-' + this.tabHeaderBgColor : '',
          this.tabHeaderColor ? this.tabHeaderColor : ''
        ]
      },
      liCss(){
        return [
          this.tabHeaderLineColor ? 'tab-' + this.tabHeaderLineColor : '',
          {
            'disabled' : this.disabled
          }
        ]
      }
    },
    mounted(){
      if (this.isActive === true){
        this.active = true
      }
      let _this = {title:this.title,to:this.id,active:this.active,liCss:this.liCss,aCss:this.aCss};
      this.$parent.headers.push(_this)
    }
  }
</script>
