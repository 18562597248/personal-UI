<template>
  <span>
    <span class="btn btn-file" :class="btnCss" v-if="isType">
      {{text}}
      <input ref="inp" type="file" :multiple="multipled" :disabled="disabled" @change="inputChange">
    </span>
    <div class="dropzone dz-clickable" :class="[dropCss,dragCss]" @click="dropclick" @dragover.prevent="dragover" @dragleave.prevent="dragleave" @drop.prevent="drop" :style="dropSty" v-else>
      <div class="dz-default dz-message" :style="{'margin-top': mtop + 'px'}">
        {{text}}
      </div>
      <input id="file" type="file" :multiple="multipled" :disabled="disabled" @change="inputChange" style="visibility: hidden;">
    </div>
    <ul class="hd-upload-list" :class="listCss" :style="listSty" v-show="showFileList">
      <hd-upload-files-list v-for="file in files" :file="file" @abort="stopUpload" :disabled="disabled"></hd-upload-files-list>
    </ul>
  </span>
</template>
<script>
  import { isOneOf } from 'src/utils/validator'
  import hdUploadFilesList from './Uploadfileslist.vue'
  export default {
    name:'hd-upload',
    components:{
      hdUploadFilesList
    },
    data(){
      return{
        draghover:false,
        files:[],
        mtop:0,
        dwidth:''
      }
    },
    props:{
      'show-file-list':{
        type:Boolean,
        default:true
      },
      uploadedFiles:{
        type:Array,
        default(){
          return []
        }
      },
      action: {
        type: String,
        required: true
      },
      disabled:{
        type:Boolean,
        default:false
      },
      listDisabled:{
        type:Boolean,
        default:true
      }, //add by lc
      singled:{
        type:Boolean,
        default:false
      },
      shiny:{
        type:Boolean,
        default:false
      },
      blocked:{
        type:Boolean,
        default:false
      },
      type:{
        type:String,
        validator(value){
          return isOneOf(value, ['button','drop'])
        },
        default:'button'
      },
      'drop-width':{
        type:[Number,String],
        default:''
      },
      'drop-height':{
        type:[Number,String],
        default:''
      },
      width:{
        type:[Number,String],
        default:''
      },
      'btn-bg-color':{
        type:String,
        validator(value){
          return isOneOf(value, ['','blue','red','yellow','white','themeprimary','themesecondary','themethirdcolor','themefourthcolor','themefifthcolor','snow','whitesmoke','seashell','ivory','platinum','lightgray','gray','darkgray','silver','sonic-silver','storm-cloud','lightcarbon','carbon','slate-gray','darkcarbon','info','sky','primary','azure','blueberry','palegreen','success','green','lightyellow','warning','gold','orange','lightred','darkorange','pink','darkpink','danger','magenta','purple','maroon'])
        },
        default:''
      },
      'btn-color':{
        type:String,
        validator(value){
          return isOneOf(value, ['','blue','red','yellow','white','themeprimary','themesecondary','themethirdcolor','themefourthcolor','themefifthcolor','snow','whitesmoke','seashell','ivory','platinum','lightgray','gray','darkgray','silver','sonic-silver','storm-cloud','lightcarbon','carbon','slate-gray','darkcarbon','info','sky','primary','azure','blueberry','palegreen','success','green','lightyellow','warning','gold','orange','lightred','darkorange','pink','darkpink','danger','magenta','purple','maroon'])
        },
        default:''
      },
      text:{
        type:String,
        default:'upload'
      },
      beforeUpload:{
        type:Function,
        default:function(){return true}
        }
    },
    created(){
      if(this.uploadedFiles.length > 0){
        for(let i = 0;i < this.uploadedFiles.length;i = i + 1){
          let obj = {};
          obj.name = this.uploadedFiles[i].name;
          obj.type = this.uploadedFiles[i].type;
          obj.size = this.uploadedFiles[i].size;
          obj.nodeid = this.uploadedFiles[i].nodeid;
          obj.showPro = false;
          obj.loaded = 100;
          obj.xhr={};
          this.files.push(obj)
        }
      }
      if(this.type === 'drop'&&this.dropWidth === ''){
        this.dwidth = this.width
      }
      if(this.dropHeight > 86){
        this.mtop = (this.dropHeight - 86)/2
      }
    },
    watch:{
      dropHeight(v){
        if(v > 86){
          this.mtop = (v - 86)/2
        }
      },
      width(v){
        if(this.type === 'drop'&&this.dropWidth === ''){
          this.dwidth = v
        }
      }
    },
    computed:{
      multipled(){
        if(this.singled === true){
          return false
        }
        if(this.singled === false){
          return true
        }
      },
      btnCss(){
        return[
          this.btnBgColor ? 'btn-' + this.btnBgColor : '',
          this.btnColor ? this.btnColor : '',
          {
            'disabled' : this.disabled,
            'shiny' : this.shiny,
            'btn-block' : this.blocked
          }
        ]
      },
      dropCss(){
        return{
          'disabled' : this.disabled
        }
      },
      dragCss(){
        if(this.draghover === true){
          return 'dz-drag-hover'
        }
      },
      listCss(){
        return{
          'disabled' : this.disabled && this.listDisabled  //edit by lc
        }
      },
      dropSty(){
        return{
          width:this.dropWidth ? this.dropWidth + 'px' : this.dwidth + 'px',
          height:this.dropHeight + 'px'
        }
      },
      listSty(){
        return{
          width:this.width + 'px'
        }
      },
      isType(){
        if(this.type === 'button'){
          return true
        }
        if(this.type === 'drop'){
          return false
        }
      }
    },
    methods:{
      dropclick(){
        return document.getElementById('file').click()
      },
      dragover(){
        if(this.disabled === false){
          this.draghover = true
        }
      },
      dragleave(){
        if(this.disabled === false){
          this.draghover = false
        }
      },
      drop(e){
        if(this.disabled === false){
          this.draghover = false;
          const files = e.dataTransfer.files;
          this.uploadFiles(files)
        }
      },
      inputChange(e){
        const files = e.target.files;
        if(!files){
          return
        }
        if(this.beforeUpload(files) !== false){
          this.uploadFiles(files)
        }
      },
      uploadFiles(files){
        let postFiles = Array.prototype.slice.call(files);
        if(!this.multipled){
          postFiles = postFiles.slice(0, 1)
        }
        if(postFiles.length === 0){
          return
        }
        for(let i = 0;i < postFiles.length;i = i + 1){
          this.upload(postFiles[i])
        }
        if(this.isType === true){
          this.$refs.inp.value = ''
        }else{
          document.getElementById('file').value = ''
        }
      },
      upload(file){
        let _id = this.uuid(5,16);
        const options = {
          file: file,
          fileId: _id,
          action: this.action
        };
        let obj = {};
        obj.fileId = _id;
        obj.name = file.name;
        obj.type = file.name.split('.').pop().toLocaleLowerCase();
        obj.size = this.bytesToSize(file.size);
        obj.loaded = 0;
        obj.showPro = false;
        let xhr = new XMLHttpRequest();
        let action = options.action;
        action += '&fileId=' + _id;
        let formData = new FormData();
        xhr.responseType = "text";
        let self = this;
        xhr.onload = function(e) {
          self.$emit('message',this.responseText);
        };
        if(xhr.upload){
          obj.showPro = true;
          xhr.upload.onprogress = function progress(e){
            if(e.total > 0){
              e.percent = e.loaded / e.total * 100;
              obj.loaded = e.percent;
              if(obj.loaded === 100){
                self.$emit('uploadSuccess',obj);
                obj.showPro = false
              }
            }
          }
        }
        obj.xhr = xhr;
        this.files.push(obj);
        formData.append(options.fileId,options.file);
        xhr.open('post',action,true);
        xhr.send(formData);
        return xhr;
      },
      bytesToSize(bytes){
        if(bytes === 0) return '0 B';
        const k = 1024;
        const sizes = ['B','KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
        let i = Math.floor(Math.log(bytes)/Math.log(k));
        return (bytes/Math.pow(k,i)).toFixed(2) + ' ' + sizes[i];
      },
      fileClick(file){
        if(file.loaded === 100){
          this.$emit('fileClick',file)
        }
      },
      fileRemove(file){
        if(this.isType === true){
          this.$refs.inp.value = ''
        }else{
          document.getElementById('file').value = ''
        }
        const files = this.files;
        files.splice(files.indexOf(file), 1);
        this.$emit('fileRemove',file)
      },
      stopUpload(file){
        this.files.splice(this.files.indexOf(file), 1);
      },
      uuid(len, radix) {
        let chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
        let uuid = [], i;
        radix = radix || chars.length;
        if (len) {
          for (i = 0; i < len; i++) uuid[i] = chars[0 | Math.random()*radix];
        } else {
          let r;
          uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
          uuid[14] = '4';
          for (i = 0; i < 36; i++) {
            if (!uuid[i]) {
              r = 0 | Math.random()*16;
              uuid[i] = chars[(i === 19) ? (r & 0x3) | 0x8 : r];
            }
          }
        }
        return uuid.join('');
      }
    }
  }
</script>
<style>
  .hd-upload-list{
    margin: 0;
    padding: 0;
    list-style: none;
  }
  .hd-upload-list.disabled{
    opacity: 0.5;
    cursor: not-allowed;
  }
  .hd-upload-list.disabled li,.hd-upload-list.disabled li *{
    cursor: not-allowed;
  }
  .dropzone{
    min-height: 86px;
  }
  .dropzone .dz-message{
    margin: 0;
    height: 46px;
  }
  .dropzone.disabled,.dropzone.disabled .dz-message{
    opacity: 0.5;
    cursor: not-allowed;
  }
</style>
