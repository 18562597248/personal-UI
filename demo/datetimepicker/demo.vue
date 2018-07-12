<template>
  <div>
    <div class="row">
      <div class="col-lg-6 col-sm-6 col-xs-12">
        <div class="well with-header">
          <div class="header bordered-pink">日期时间</div>
          <div>
            <hd-date-time-picker  v-model="value" ref="day">
              <hd-button type="hdprimary"  @click="show('day',0)">今天</hd-button>
            </hd-date-time-picker>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data(){
      return {
        value:"2015-09-05 11:29:03"
      }
    },
    methods:{
      show(val1,val){
        var now=new Date()
        now.setDate(now.getDate()+val);
        this.value=this.$refs[val1].stringify(now) +' '+now.toLocaleTimeString();
      }
    }
  };
</script>

