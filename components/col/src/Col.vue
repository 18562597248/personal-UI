<template>
  <div :id="id" :class="divCls">
    <slot></slot>
  </div>
</template>
<script>
  import { isOneOf } from 'src/utils/validator.js'
  const cssPreFixLg = 'col-lg-'
  const cssPreFixMd = 'col-md-'
  const cssPreFixSm = 'col-sm-'
  const cssPreFixXs = 'col-xs-'
  const cssPreFixLgOffset = 'col-lg-offset-'
  const cssPreFixMdOffset = 'col-md-offset-'
  const cssPreFixSmOffset = 'col-sm-offset-'
  const cssPreFixXsOffset = 'col-xs-offset-'
  const cssPreFixLgPush = 'col-lg-push-'
  const cssPreFixMdPush = 'col-md-push-'
  const cssPreFixSmPush = 'col-sm-push-'
  const cssPreFixXsPush = 'col-xs-push-'
  const cssPreFixLgPull = 'col-lg-pull-'
  const cssPreFixMdPull = 'col-md-pull-'
  const cssPreFixSmPull = 'col-sm-pull-'
  const cssPreFixXsPull = 'col-xs-pull-'
  const default_array =[[0,0,0]];
//  var cols_=[]
  export default {
    name:'hd-col',
    componentName:'hd-col',
    props:{
      id:{
        type: [String, Number],
        default:''
      }
      ,cols:Array
      ,offset:Array
      ,order:Array
    },
    computed:{
      divCls(){
        var cols_="";
        var cols_len,offset_len,order_len;
        if(this.cols!=undefined){
          cols_len=this.cols.length;
          switch(this.cols.length){
            case 1:{
              cols_+=cssPreFixLg+this.cols[0]+" "+cssPreFixMd+this.cols[0];
            }break;
            case 2:{
              cols_+=cssPreFixLg+this.cols[0]+" "+cssPreFixMd+this.cols[0]+" "+cssPreFixXs+this.cols[1];
            }break;
            case 3:{
              cols_+=cssPreFixLg+this.cols[0]+" "+cssPreFixMd+this.cols[0]+" "+cssPreFixSm+this.cols[1]+" "+cssPreFixXs+this.cols[2];
            }break;
            default:break;
          }
        }
        if(this.offset!=undefined){
          offset_len=this.offset.length;
          switch(this.offset.length){
            case 1:{
              cols_+=" "+cssPreFixLgOffset+this.offset[0]+" "+cssPreFixMdOffset+this.offset[0];
            }break;
            case 2:{
              cols_+=" "+cssPreFixLgOffset+this.offset[0]+" "+cssPreFixMdOffset+this.offset[0]+" "+cssPreFixXsOffset+this.offset[1];
            }break;
            case 3:{
              cols_+=" "+cssPreFixLgOffset+this.offset[0]+" "+cssPreFixMdOffset+this.offset[0]+" "+cssPreFixSmOffset+this.offset[1]+" "+cssPreFixXsOffset+this.offset[2];
            }break;
            default:break;
          }
        }
        if(this.order!=undefined){
          order_len=this.order.length;
          switch(this.order.length){
            case 1:{
              if(this.order[0]>=0){
                cols_+=" "+cssPreFixLgPush+this.order[0]+" "+cssPreFixMdPush+this.order[0];
              }else{
                cols_+=" "+cssPreFixLgPull+(this.order[0]*(-1))+" "+cssPreFixMdPull+(this.order[0]*(-1));
              }
            }break;
            case 2:{
              if(this.order[0]>=0){
                cols_+=" "+cssPreFixLgPush+this.order[0]+" "+cssPreFixMdPush+this.order[0];
              }else{
                cols_+=" "+cssPreFixLgPull+(this.order[0]*(-1))+" "+cssPreFixMdPull+(this.order[0]*(-1));
              }
              if(this.order[1]>=0){
                cols_+=" "+cssPreFixXsPush+this.order[1];
              }else{
                cols_+=" "+cssPreFixXsPull+(this.order[1]*(-1));
              }
            }break;
            case 3:{
              if(this.order[0]>0){
                cols_+=" "+cssPreFixLgPush+this.order[0]+" "+cssPreFixMdPush+this.order[0];
              }else if(this.order[0]==0){
                cols_+=" "+cssPreFixLgPush+"0 "+cssPreFixMdPush+"0 "+cssPreFixLgPull+"0 "+cssPreFixMdPull+"0";
              }else{
                cols_+=" "+cssPreFixLgPull+(this.order[0]*(-1))+" "+cssPreFixMdPull+(this.order[0]*(-1));
              }
              if(this.order[1]>0){
                cols_+=" "+cssPreFixSmPush+this.order[1];
              }else if(this.order[0]==0){
                cols_+=" "+cssPreFixSmPush+"0 "+cssPreFixSmPull+"0";
              }else{
                cols_+=" "+cssPreFixSmPull+(this.order[1]*(-1));
              }
              if(this.order[2]>=0){
                cols_+=" "+cssPreFixXsPush+this.order[2];
              }else{
                cols_+=" "+cssPreFixXsPull+(this.order[2]*(-1));
              }
            }break;
            default:break;
          }
        }
        return cols_;
      }
    }
  }
</script>
