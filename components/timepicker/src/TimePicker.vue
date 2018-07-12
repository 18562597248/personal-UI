<template>
  <div v-if="fixation" style="position: relative;">
    <div class="input-group">
        <input
        class="form-control"
        type="text"
        :disabled="disabled"
        :readonly="readonly"
        :value="this.fixatedtime"
        @click="picker()"
        @change.native="this.fixatedtime = $event.target.value"
        >
        <span class="input-group-addon">
          <i class="fa fa-clock-o"></i>
       </span>
    </div>
    <div ref="timepicker_dropdown_menu_if" class="bootstrap-timepicker-widget dropdown-menu timepicker-orient-left timepicker-orient-top open"  v-show="show">
      <div style="height:150px;overflow:auto;">
          <div class="time-select-item"  v-for="(item,index) in items" @click="selected(item)" :class="{ disabled: item.disabled }">
           {{item.value}}
          </div>
      </div>
    </div >
  </div>
  <div v-else style="position: relative;">
    <div class="input-group">
        <input
          class="form-control"
          type="text"
          :disabled="disabled"
          :readonly="readonly"
          :value="this.datetime"
          @click="picker()"
          @change="handleChange"
          @input="handleInput"
          @change.native="this.datetime = $event.target.value"
        >
       <span class="input-group-addon" v-if="!iconshow">
          <i class="fa fa-clock-o"></i>
       </span>
    </div>
    <div ref="timepicker_dropdown_menu_else" class="bootstrap-timepicker-widget dropdown-menu timepicker-orient-left timepicker-orient-top open"  v-show="show">
      <table>
        <tbody>
        <tr>
          <td @click="houradd()">
            <a  data-action="incrementHour">
              <i class="fa fa-chevron-up"></i>
            </a>
          </td>
          <td class="separator">&nbsp;</td>
          <td @click="minuteadd()">
            <a data-action="incrementMinute">
              <i class="fa fa-chevron-up"></i>
            </a>
          </td>
          <td class="separator" v-if="second">&nbsp;</td>
          <td class="meridian-column"  v-if="second" @click="secondadd()">
            <a  data-action="toggleMeridian">
              <i class="fa fa-chevron-up"></i>
            </a>
          </td>
          <td class="separator" v-if="!twentyFour">&nbsp;</td>
          <td class="meridian-column" v-if="!twentyFour" @click="toggleMeridian()">
            <a  data-action="toggleMeridian">
              <i class="fa fa-chevron-up"></i>
            </a>
          </td>
        </tr>
        <tr>
          <td>
            <input type="text" class="bootstrap-timepicker-hour" maxlength="2" v-model="Hour">
          </td>
          <td class="separator">:</td>
          <td>
            <input type="text" class="bootstrap-timepicker-minute" maxlength="2" v-model="Minute">
          </td>
          <td class="separator" v-if="second">:</td>
        <td v-if="second">
          <input type="text" class="bootstrap-timepicker-minute" maxlength="2" v-model="Second">
        </td>
          <td class="separator" v-if="!twentyFour">&nbsp;</td>
          <td v-if="!twentyFour">
            <input type="text" class="bootstrap-timepicker-meridian" maxlength="2" v-model="Meridian" readonly="true">
          </td>
      </tr>
      <tr>
        <td @click="hourdec()">
          <a  data-action="decrementHour">
            <i class="fa fa-chevron-down"></i>
          </a>
        </td>
        <td class="separator"></td>
        <td @click="minutedec()">
          <a data-action="decrementMinute">
            <i class="fa fa-chevron-down"></i>
          </a>
        </td>
        <td class="separator" v-if="second">&nbsp;</td>
        <td v-if="second"  @click="seconddec()">
          <a  data-action="toggleMeridian">
            <i class="fa fa-chevron-down"></i>
          </a>
        </td>
        <td class="separator" v-if="!twentyFour">&nbsp;</td>
        <td v-if="!twentyFour" @click="toggleMeridian()">
          <a data-action="toggleMeridian">
            <i class="fa fa-chevron-down"></i>
          </a>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</div>
</template>
<script>
  import emitter from 'src/utils/emitter';
  import popup from 'src/utils/popup/popupManager.js'     //z-index管理
export default {
  name:'hd-time-picker',
  mixins: [emitter],
  props: {
    readonly: { type: Boolean, default: false },
    iconshow: { type: Boolean, default: false },
    value: { type: String, default: '' },
    minTime: { type: String, default: '' },
    start: { type: String, default: '08:30' },
    end: { type: String, default: '20:30' },
    step: { type: String, default: '00:30' },
    format: { type: String, default: 'HH:mm' },
    fixation: { type: Boolean, default: false } , //固定时间
    disabled: Boolean
  },
  data () {
    return {
      show:false,
      now: new Date(),
      fixatedtime:'',
      datetime:'',
      Hour:'',
      Minute:'',
      Second:'',
      Meridian:'AM',
      second:false , //是否显示秒针
      twentyFour:false   // 12小时or24小时
    };
  },
  mounted () {
    var format = this.format;
    var str=format.split(":");
    var val= str[0];
    var val1=str[2];
    if(val==='HH'||val==='H'){
      this.twentyFour=true;
    }
    if(val1==='ss'||val1==='s'){
      this.second=true;
    }
    this.datetime=this.value;
    this.now = this.parse(this.datetime) || new Date();
    document.addEventListener('click', this.leave, false);
  },
  beforeDestroy () {
    document.removeEventListener('click', this.leave, false);
  },
  methods: {
    close () {
      this.show = false;
    },
    update(){
      if(this.fixation===false){
        var date = this.stringify(this.now);
        var str=date.split(":");
        if(this.twentyFour){
          this.Hour = parseInt(str[0]);
          this.Hour=this.format_val(this.Hour);
          this.Minute = parseInt(str[1]);
          this.Minute=this.format_val(this.Minute);
          if(this.second){
            this.Second = parseInt(str[2]);
            this.Second=this.format_val(this.Second);
            this.datetime=date;
            this.$emit('input',  this.datetime);
            this.$emit('change', this.datetime);
            this.dispatch('hd-formitem', 'form.change',[this.datetime]);
          }else{
            this.datetime=date;
            this.$emit('input',  this.datetime);
            this.$emit('change', this.datetime);
            this.dispatch('hd-formitem', 'form.change',[this.datetime]);
          }
        }else{
          this.Hour = parseInt(str[0]);
          if (this.Hour > 12){
            this.Meridian = 'PM';
            this.Hour = this.Hour % 12;
          }
          this.Hour=this.format_val(this.Hour);
          this.Minute = parseInt(str[1]);
          this.Minute=this.format_val(this.Minute);
          if(this.second){
            this.Second = parseInt(str[2]);
            this.Second=this.format_val(this.Second);
            this.datetime=this.Hour+":"+this.Minute+":"+this.Second+" "+this.Meridian
            this.$emit('input',  this.datetime);
            this.$emit('change', this.datetime);
            this.dispatch('hd-formitem', 'form.change',[this.datetime]);
          }else{
            this.datetime=this.Hour+":"+this.Minute+" "+this.Meridian
            this.$emit('input',  this.datetime);
            this.$emit('change', this.datetime);
            this.dispatch('hd-formitem', 'form.change',[this.datetime]);
          }
        }
      }
    },
    picker(){
      this.show=true;
    },
    handleChange(event){
      this.datetime=event.target.value;
      this.now = this.parse(this.datetime) || new Date();
    },
    selected(val){
      if (!val.disabled) {
        this.fixatedtime = val.value;
        this.$emit('selected', this.fixatedtime);
        this.$emit('input',  this.fixatedtime);
        this.$emit('change', this.fixatedtime);
        this.dispatch('hd-formitem', 'form.change',[this.fixatedtime]);
      }
    },
    leave (e) {
      if (!this.$el.contains(e.target)) {
        this.close();
      }
    },
    parse (str) {
      if(str===''||str===null){
        return null
      }else{
        var date = new Date();
        var seperator = "-";
        var month = date.getMonth() + 1;
        var strDate = date.getDate();
        if (month >= 1 && month <= 9) {
          month = "0" + month;
        }
        if (strDate >= 0 && strDate <= 9) {
          strDate = "0" + strDate;
        }
        var currentdate = date.getFullYear() + seperator + month + seperator + strDate;
        str=currentdate+' '+str;
        var time = new Date(str);
        return isNaN(time.getTime()) ? null : time;
      }
    },
    stringify (time) {
      var format = this.format;
      var strHours = time.getHours();
      var strMinutes = time.getMinutes();
      var strSeconds = time.getSeconds();
      var str=format.split(":");
      var val= str[0];
      if(val==='HH'||val==='H'){
        var map = {
          HH: ('0' + strHours).slice(-2),
          H: strHours,
          mm: ('0' + strMinutes).slice(-2),
          m: strMinutes,
          ss: ('0' + strSeconds).slice(-2),
          s: strSeconds
        };
        return format.replace(/H+|m+|s+/g, function (str) {
          return map[str];
        });
      }else{
        var map = {
          hh: ('0' + strHours).slice(-2),
          h: strHours,
          mm: ('0' + strMinutes).slice(-2),
          m: strMinutes,
          ss: ('0' + strSeconds).slice(-2),
          s: strSeconds
        };
        return format.replace(/h+|m+|s+/g, function (str) {
          return map[str];
        });
      }
    },
    format_val(value){
      if (value >= 0 && value <= 9) {
        value = "0" + value;
        return value
      }else{
        return value
      }
    },
    houradd(){
      if(this.twentyFour){
        if (this.Hour === 23 || this.Hour === '23') {
          this.Hour = 0;
          this.Hour=this.format_val(this.Hour)
        } else  {
          this.Hour++;
          this.Hour=this.format_val(this.Hour)
        }
      }else{
        if (this.Hour === 12 || this.Hour === '12') {
          this.Hour = 1;
          this.Hour=this.format_val(this.Hour)
        } else {
          this.Hour++;
          this.Hour=this.format_val(this.Hour);
          if (this.Hour ===12){
            this.toggleMeridian();
          }
        }
      }
    },
    hourdec(){
      if(this.twentyFour) {
        if (this.Hour === 0 || this.Hour === '00') {
          this.Hour = 23;
        } else {
          this.Hour--;
          this.Hour = this.format_val(this.Hour)
        }
      }else{
        if (this.Hour === 1 || this.Hour === '01') {
          this.Hour = 12;
        } else {
          this.Hour--;
          this.Hour = this.format_val(this.Hour);
          if (this.Hour ===11){
            this.toggleMeridian();
          }
        }
      }
    },
    minuteadd(){
      if (this.Minute === 59 || this.Minute === '59') {
        this.Minute = 0;
        this.Minute=this.format_val(this.Minute);
        this.houradd();
      } else  {
          this.Minute++;
          this.Minute=this.format_val(this.Minute);
      }
    },
    minutedec(){
      if (this.Minute === 0 || this.Minute === '00') {
        this.Minute = 59;
        this.hourdec();
      } else  {
        this.Minute -= 1;
        this.Minute=this.format_val(this.Minute);
      }
    },
    secondadd(){
      if (this.Second === 59 || this.Second === '59') {
        this.Second = 0;
        this.Second=this.format_val(this.Second);
        this.minuteadd();
      } else  {
        this.Second++;
        this.Second=this.format_val(this.Second);
      }
    },
    seconddec(){
      if (this.Second === 0 ||this.Second === '00') {
         this.Second = 59;
         this.minutedec();
      } else  {
        this.Second -= 1;
        this.Second=this.format_val(this.Second);
      }
    },
    toggleMeridian(){
      this.Meridian = this.Meridian === 'AM' ? 'PM' : 'AM';
    },
    parseTime (time) {
      const values = ('' || time).split(':');
      if (values.length >= 2) {
        const hours = parseInt(values[0], 10);
        const minutes = parseInt(values[1], 10);
        return {
          hours,
          minutes
        };
      }
      return null;
    },
    compareTime (time1, time2) {
      const value1 = this.parseTime(time1);
      const value2 = this.parseTime(time2);
      const minutes1 = value1.minutes + value1.hours * 60;
      const minutes2 = value2.minutes + value2.hours * 60;
      if (minutes1 === minutes2) {
        return 0;
      }
     return minutes1 > minutes2 ? 1 : -1;
    },
    formatTime (time) {
      return (time.hours < 10 ? '0' + time.hours : time.hours) + ':' + (time.minutes < 10 ? '0' + time.minutes : time.minutes);
    },
    nextTime (time, step) {  //固定时间显示下拉
        const timeValue = this.parseTime(time);
        const stepValue = this.parseTime(step);
        const next = {
            hours: timeValue.hours,
            minutes: timeValue.minutes
          };
         next.minutes += stepValue.minutes;
         next.hours += stepValue.hours;
         next.hours += Math.floor(next.minutes / 60);
         next.minutes = next.minutes % 60;
         return this.formatTime(next);
    },
    handleInput(event) {
      if(this.fixation){
        this.fixatedtime=event.target.value;
        this.$emit('input',  this.fixatedtime);
        this.$emit('change', this.fixatedtime);
        this.dispatch('hd-formitem', 'form.change', [this.fixatedtime]);
      }else{
        this.datetime=event.target.value;
        this.$emit('input',  this.datetime);
        this.$emit('change', this.datetime);
        this.dispatch('hd-formitem', 'form.change', [this.datetime]);
      }
    }
  },
  computed: {
    items() {
      var start = this.start;
      var end = this.end;
      var step = this.step;
      var result = [];
      if (start && end && step) {
        let current = start;
        while (this.compareTime(current, end) <= 0) {
         result.push({
            value: current,
            disabled: this.compareTime(current, this.minTime || '-1:-1') <0
          });
          current = this.nextTime(current, step);
        }
      }
      return result;
    }
  },
  watch: {
    show (val) {
      this.update();
      if(val){
        if(this.$refs.timepicker_dropdown_menu_if){this.$refs.timepicker_dropdown_menu_if.style.zIndex = popup.nextZIndex();}
        if(this.$refs.timepicker_dropdown_menu_else){this.$refs.timepicker_dropdown_menu_else.style.zIndex = popup.nextZIndex();}
      }     //z-index管理
    },
    Hour: function () {
      this.now.setHours(this.Hour);
      this.now = new Date(this.now);
    },
    Second: function () {
      this.now.setSeconds(this.Second);
      this.now = new Date(this.now);
    },
    Minute: function () {
      this.now.setMinutes(this.Minute);
      this.now = new Date(this.now);
    },
    minTime: function () {
      return this.minTime
    },
    value(val) {
      if(this.fixation){
        this.fixatedtime=val
      }else{
        this.datetime=val
      }
    }
  }
};
</script>
<style>
.time-select-item {
  padding: 8px 10px;
  font-size: 14px;
}
</style>
