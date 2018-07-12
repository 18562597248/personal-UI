<template>
  <div class="tabbable" :class="tabsCss" v-if="bottom">
    <div class="tab-content" :class="contentCss" :style="{height: bodyHeight + 'px'}">
      <slot></slot>
    </div>
    <ul class="nav nav-tabs" :class="ulCss">
      <li v-for="header in headers" :class="[{active:header.active},header.liCss]">
        <a @click.prevent="select(header)" href="#" :class="header.aCss">
          {{header.title}}
        </a>
      </li>
    </ul>
  </div>
  <div class="tabbable" :class="tabsCss" v-else>
    <ul class="nav nav-tabs" :class="ulCss">
      <li v-for="header in headers" :class="[{active:header.active},header.liCss]">
        <a @click.prevent="select(header)" href="#" :class="header.aCss">
          {{header.title}}
        </a>
      </li>
    </ul>
    <div class="tab-content" :class="contentCss" :style="{height: bodyHeight + 'px'}">
      <slot></slot>
    </div>
  </div>
</template>
<script>
  import { isOneOf } from 'src/utils/validator.js'
  export default {
    name:'hd-tabs',
    data(){
      return{
        headers:[],
        bottom:false
      }
    },
    props:{
      'body-height':{
        type:[Number,String],
        default:''
      },
      'header-position':{
        validator(value){
          return isOneOf(value, ['top','bottom','left','right'])
        },
        default:'top'
      },
      'header-flat':{
        type:Boolean,
        default:false
      },
      'body-flat':{
        type:Boolean,
        default:false
      },
      'body-radius':{
        type:Boolean,
        default:false
      },
      'header-justified':{
        type:Boolean,
        default:false
      },
      'header-bg-color':{
        type:String,
        validator(value){
          return isOneOf(value, ['','blue','red','yellow','white','themeprimary','themesecondary','themethirdcolor','themefourthcolor','themefifthcolor','snow','whitesmoke','seashell','ivory','platinum','lightgray','gray','darkgray','silver','sonic-silver','storm-cloud','lightcarbon','carbon','slate-gray','darkcarbon','info','sky','primary','azure','blueberry','palegreen','success','green','lightyellow','warning','gold','orange','lightred','darkorange','pink','darkpink','danger','magenta','purple','maroon'])
        },
        default:''
      },
      'body-bg-color':{
        type:String,
        validator(value){
          return isOneOf(value, ['','blue','red','yellow','white','themeprimary','themesecondary','themethirdcolor','themefourthcolor','themefifthcolor','snow','whitesmoke','seashell','ivory','platinum','lightgray','gray','darkgray','silver','sonic-silver','storm-cloud','lightcarbon','carbon','slate-gray','darkcarbon','info','sky','primary','azure','blueberry','palegreen','success','green','lightyellow','warning','gold','orange','lightred','darkorange','pink','darkpink','danger','magenta','purple','maroon'])
        },
        default:''
      },
      'body-color':{
        type:String,
        validator(value){
          return isOneOf(value, ['','blue','red','yellow','white','themeprimary','themesecondary','themethirdcolor','themefourthcolor','themefifthcolor','snow','whitesmoke','seashell','ivory','platinum','lightgray','gray','darkgray','silver','sonic-silver','storm-cloud','lightcarbon','carbon','slate-gray','darkcarbon','info','sky','primary','azure','blueberry','palegreen','success','green','lightyellow','warning','gold','orange','lightred','darkorange','pink','darkpink','danger','magenta','purple','maroon'])
        },
        default:''
      }
    },
    computed:{
      tabsCss(){
        if (this.headerPosition === 'top'){
          return ''
        }else if (this.headerPosition === 'left'){
          return 'tabs-left'
        }else if (this.headerPosition === 'bottom'){
          return 'tabs-below'
        }else if (this.headerPosition === 'right'){
          return 'tabs-right'
        }
      },
      ulCss(){
        return [
          this.headerBgColor ? 'bg-' + this.headerBgColor : '',
          {
            'nav-justified' : this.headerJustified,
            'tabs-flat': this.headerFlat
          }
        ]
      },
      contentCss(){
        return [
          this.bodyBgColor ? 'bg-' + this.bodyBgColor : '',
          this.bodyColor ? this.bodyColor : '',
          {
            'radius-bordered' : this.bodyRadius,
            'tabs-flat' : this.bodyFlat
          }
        ]
      }
    },
    mounted(){
      if (this.headerPosition === 'bottom'){
        this.bottom = true
      }else{
        this.bottom = false
      }
    },
    methods:{
      select(header){
        if (header.liCss[1].disabled === false) {
          let to = header.to;
          let child = this.$children;
          for (var i = 0;i < child.length;i = i + 1){
            let _id = child[i].id;
            if (_id === to){
              this.$children[i].active = true;
              this.headers[i].active = true
            }else{
              this.$children[i].active = false;
              this.headers[i].active = false
            }
          }
        }
          this.$emit('selectChang',header);
      }
    }
  }
</script>
