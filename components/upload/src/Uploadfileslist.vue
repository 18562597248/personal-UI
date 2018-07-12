<template>
  <li class="hd-upload-list-item">
    <a class="hd-upload-list-item-name" @click="handleClick(file)">
      <i class="fa" :class="iCss"></i>
      {{file.name}}
    </a>
    <label class="hd-upload-list-item-label">
      <i class="fa fa-check" v-if="val === 100"></i>
      <i class="fa fa-close" v-if="val === 100" @click="remove(file)"></i>
      <span v-else>
        {{val}}%
        <i class="fa fa-close" @click="abort(file)"></i>
      </span>
    </label>
    <hd-progress v-if="file.showPro" size="xxs" :value="val"></hd-progress>
  </li>
</template>
<script>
  import  hdProgress  from 'components/progress';
  var filesIcon = require('./filesIcon.json');
  export default{
    name: 'hd-upload-files-list',
    components: {
      hdProgress
    },
    props:{
      file:{
        type:Object,
        default:{}
      },
      disabled:{
        type:Boolean,
        default:false
      }
    },
    data(){
      return{
        val:0
      }
    },
    created(){
      this.val = this.file.loaded;
      this.$watch(
        function(){
          return this.file
        },
        function(n,o){
          this.val = parseInt(n.loaded);
        },
        {
          deep:true
        }
      )
    },
    computed:{
      iCss(){
        const format = this.file.name.split('.').pop().toLocaleLowerCase() || '';
        const suffix = Object.keys(filesIcon);
        let suf = Array.prototype.slice.call(suffix);
        if(suf.indexOf(format) === -1){
          return 'fa-file'
        }
        for(let i = 0;i < suf.length;i = i + 1){
          if(format === suf[i]){
            return filesIcon[suf[i]]
          }
        }
      }
    },
    methods:{
      handleClick(file){
        if( !this.disabled || !this.$parent.listDisabled){   //edit by lc
          this.$parent.fileClick(file)
        }
      },
      remove(file){
        if(this.disabled === false){
          this.$parent.fileRemove(file)
        }
      },
      abort(file){
        if(this.disabled === false){
          this.file.xhr.abort();
          this.$emit('abort',file)
        }
      }
    }
  }
</script>
<style>
  .hd-upload-list-item{
    transition: all .1s cubic-bezier(.55,0,.1,1);
    font-size: 14px;
    color: #48576a;
    line-height: 1.8;
    margin-top: 5px;
    box-sizing: border-box;
    border-radius: 4px;
    width: 100%;
    position: relative;
  }
  .hd-upload-list-item-name{
    color: #48576a;
    display: block;
    margin-right: 40px;
    overflow: hidden;
    padding-left: 4px;
    text-overflow: ellipsis;
    transition: color .3s;
    white-space: nowrap;
  }
  .hd-upload-list-item:hover{
    background-color: #e5e5e5;
    cursor: pointer;
  }
  .hd-upload-list-item-name:hover{
    text-decoration: none;
    color: blueviolet;
  }
  .hd-upload-list-item-label{
    position: absolute;
    right: 10px;
    top: 0;
    line-height: inherit;
    color: #13ce66;
  }
  label>.fa-close{
    margin-top: 4px;
    font-size: 17px;
    color: red;
    display: none;
  }
  .hd-upload-list-item:hover .hd-upload-list-item-label .fa-check,.hd-upload-list-item label:hover .fa-check{
    display: none;
  }
  .hd-upload-list-item:hover .hd-upload-list-item-label>.fa-close,.hd-upload-list-item label:hover>.fa-close{
    display: block;
  }
</style>
