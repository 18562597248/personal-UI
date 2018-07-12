<template>
  <div  style="position: relative;">
    <div class="input-group">
      <input
        class="form-control date-picker"
        type="text"
        :disabled="disabled"
        :readonly="readonly || !editable"
        :value="this.datetimevalue"
        @click="picker()"
        @input="handleInput"
        @change.native="this.datetimevalue = $event.target.value"
      >
      <span class="input-group-addon" :style="spanstyles">
        <i class="fa fa-calendar"></i>
      </span>
    </div>
    <div ref="datetimepicker_dropdown_menu_all" class="datepicker dropdown-menu daterangepicker show-calendar opensright" v-show="showrange" style="display: block;left:auto;">
      <div class="calendar left" style="display: block">
        <div class="calendar-table">
          <table class="table-condensed">
            <tbody>
            <tr>
              <td >
                <hd-input  type="text" v-model="this.datetime"  @change="changedate"></hd-input>
              </td>
              <td >
                 <hd-time-picker   :format="timeformat"  v-model="this.time" @change="changetime"  iconshow></hd-time-picker>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
          <div class="calendar-table">
          <div class="datepicker-days" v-show="show" style="display: block">
            <table class="table-condensed">
              <thead>
              <tr>
                <th class="prev" @click="monthClick(-1)"><i class="fa fa-chevron-left"></i></th>
                <th colspan="5" class="switch" @click="show_daytomonth(now.getMonth())">{{now.getFullYear()+"&nbsp;&nbsp;&nbsp;"+months[now.getMonth()]}}</th>
                <th class="next" @click="monthClick(1)"><i class="fa fa-chevron-right"></i></th>
              </tr>
              <tr v-if="weekend">
                <th class="dow" v-for="day in weekend_days">{{day}}</th>
              </tr>
              <tr v-else>
                <th class="dow" v-for="day in days">{{day}}</th>
              </tr>
              </thead>
              <tbody  v-if="weekend">
              <tr v-for="i in 6">
                <td v-for="j in 7"
                    :class="date[(i-1) * 7 + j-1] && date[(i-1) * 7 + j-1].status"
                    :date="date[(i-1) * 7 + j-1] "
                    @click="pickDate((i-1) * 7 + j-1)">{{date[(i-1) * 7 + j-1] && date[(i-1) * 7 + j-1].text}}</td>
              </tr>
              </tbody>
              <tbody v-else>
              <tr v-for="i in 6" >
                <td v-for="j in 7"
                    :class="date[(i-1) * 7 + j] && date[(i-1) * 7 + j].status"
                    :date="date[(i-1) * 7 + j] && date[(i-1) * 7 + j].date"
                    @click="pickDate((i-1) * 7 + j)">{{date[(i-1) * 7 + j] && date[(i-1) * 7 + j].text}}</td>
              </tr>
              </tbody>
            </table>
          </div>
          <div class="datepicker-months" v-show="showmonth" style="display: block">
            <table class="table-condensed">
              <thead>
              <tr>
                <th class="prev" @click="yearClick(-1)"><i class="fa fa-chevron-left"></i></th>
                <th colspan="5" class="switch" @click="show_monthtoyear(now.getFullYear())">{{now.getFullYear()}}</th>
                <th class="next"  @click="yearClick(1)"><i class="fa fa-chevron-right"></i></th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="i in 3">
                <td  colspan="7">
                <span v-for="j in 4"
                      :class="monthdata[(i-1) * 4 + j-1] && monthdata[(i-1) * 4 + j-1].status"
                      @click="pickMonth((i-1) * 4 + j-1)">{{monthdata[(i-1) * 4 + j-1]&&monthdata[(i-1) * 4 + j-1].time}}
               </span>
                </td>
              </tr>
              </tbody>
            </table>
          </div>
          <div class="datepicker-years" v-show="showyear" style="display: block">
            <table class="table-condensed">
              <thead>
              <tr>
                <th class="prev" @click="clickYear(-10)"><i class="fa fa-chevron-left"></i></th>
                <th colspan="5" class="switch">{{star_year+'-'+end_year}}</th>
                <th class="next"  @click="clickYear(10)"><i class="fa fa-chevron-right"></i></th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="i in 3">
                <td colspan="7" >
                 <span v-for="j in 4"
                       :class="years[(i-1) * 4 + j-1] && years[(i-1) * 4 + j-1].status"
                       @click="show_yeartomonth((i-1) * 4 + j-1)">{{years[(i-1) * 4 + j-1] && years[(i-1) *4+ j-1].text}}
                 </span>
                </td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="ranges" style="display: block">
        <div class="range_inputs">
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import emitter from 'src/utils/emitter';
  import hdTimePicker from 'components/timepicker'
  import  hdInput from 'components/input'
  import popup from 'src/utils/popup/popupManager.js'     //z-index管理
  export default {
    name:'hd-date-time-picker',
    componentName: 'hd-date-time-picker',
    mixins: [emitter],
    props: {
      readonly: { type: Boolean, default: false },
      editable: { type: Boolean, default:true },
      value: {},
      format: { type: String, default: 'YYYY-MM-DD' },
      timeformat:{ type: String, default: 'HH:mm:ss' },
      weekend:{
        type:Boolean,
        default:false
      },
      disabled: Boolean
    },
    components:{
      hdTimePicker,hdInput
    },
    data () {
      return {
        add:false,
        showrange:false,
        show:false,
        showmonth:false,
        showyear:false,
        days: ['一', '二', '三', '四', '五', '六','日'],
        weekend_days:['日','一', '二', '三', '四', '五', '六'],
        months: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
        date: [],
        monthdata:[],
        years:[],
        star_year:[],
        end_year:[],
        now: new Date(),
        datetime:'',
        time:'',
        datetimevalue:''
      };
    },
    mounted () {
        this.datetimevalue=this.value
        var str= this.datetimevalue.split(" ");
        this.datetime= str[0];
        this.time=str[1];
        this.now = this.parse(this.datetime) || new Date();
         document.addEventListener('click', this.leave, false);
    },
    beforeDestroy () {
      document.removeEventListener('click', this.leave, false);
    },
    computed: {
      spanstyles (){
        let style = {};
        if (this.disabled) {
          style.backgroundColor = `#fbfbfb`;
          style.color = `#ACA899`;
          style.cursor=`not-allowed`;
        }
        return style;
      }
    },
    methods: {
      update () {
        var arr = [];
        var time = new Date(this.now);
        time.setMonth(time.getMonth(), 1);// 每月第一天
        var curFirstDay = time.getDay();
        curFirstDay === 0 && (curFirstDay = 7);
        time.setDate(0);
        var lastDayCount = time.getDate();
        for (let i = curFirstDay; i > 0; i--) {
          arr.push({
            text: lastDayCount - i + 1,
            time: new Date(time.getFullYear(), time.getMonth(), lastDayCount - i + 1),
            status: 'day  old'
          });
        }
        time.setMonth(time.getMonth() + 2, 0);       // 每月最后一天
        var curDayCount = time.getDate();
        time.setDate(1);
        var value = this.datetime || this.stringify(new Date());
        for (let i = 0; i < curDayCount; i++) {
          let tmpTime = new Date(time.getFullYear(), time.getMonth(), i + 1);
          let status = 'day ';
          this.stringify(tmpTime) === value && (status = 'day  active');
          arr.push({
            text: i + 1,
            time: tmpTime,
            status: status
          });
        }
        var j = 1;
        while (arr.length <=42) {
          arr.push({
            text: j,
            time: new Date(time.getFullYear(), time.getMonth() + 1, j),
            status: 'day  new'
          });
          j++;
        }
        this.date = arr;
      },
      parse (str) {
        var time = new Date(str);
        return isNaN(time.getTime()) ? null : time;
      },
      stringify (time) {
        var format = this.format;
        var year = time.getFullYear();
        var month = time.getMonth() + 1;
        var date = time.getDate();
        var monthName = this.months[time.getMonth()];
        var map = {
          YYYY: year,
          MMM: monthName,
          MM: ('0' + month).slice(-2),
          M: month,
          DD: ('0' + date).slice(-2),
          D: date
        };
        return format.replace(/Y+|M+|D+/g, function (str) {
          return map[str];
        });
      },
      handleInput(event) {
        this.datetimevalue=event.target.value;
        var str= this.datetimevalue.split(" ");
        this.datetime= str[0];
        this.time=str[1];
        this.now = this.parse(this.datetime) || new Date();
        this.$emit('input',  this.datetimevalue);
        this.dispatch('hd-formitem', 'form.change',[this.datetimevalue]);
      },
      yearClick (flag) {   //日期界面执行年份加减
        this.now.setFullYear(this.now.getFullYear() + flag);
        this.now = new Date(this.now);
      },
      clickYear(flag) {   //年份界面执行年份加减
        this.now.setFullYear(this.now.getFullYear() + flag);
        var  year = parseInt(this.now.getFullYear()/10, 10) * 10;
        this.show_monthtoyear(year);
        this.star_year=year;
        this.end_year=year+9
      },
      monthClick (flag) {  //日期界面||月份界面执行月份加减
        let _this=this
        _this.now.setMonth(_this.now.getMonth() + flag);
        _this.now = new Date(_this.now);
        if(this.now.getMonth()===11){
          this.add=true
        }else{
          this.add=false;
        }
      },
      pickDate (index) {
        if(this.date[index].status==="day "||this.date[index].status==="day  active"){
          for(var i=0;i<this.date.length;i++){
            if(this.date[i].status==='day  active'){
              this.date[i].status='day  ';
            }
          }
          this.date[index].status='day  active';
          var now = new Date(this.date[index].time);
          this.datetime = this.stringify(now);
          if(!this.time){
            var date = new Date();
            var seperator2 = ":";
            var strHours = date.getHours();
            var strMinutes = date.getMinutes();
            var strSeconds = date.getSeconds();
            if (strHours >= 0 && strHours <= 9) {
              strHours = "0" + strHours;
            }
            if (strMinutes >= 0 && strMinutes <= 9) {
              strMinutes = "0" + strMinutes;
            }
            if (strSeconds >= 0 && strSeconds <= 9) {
              strSeconds = "0" + strSeconds;
            }
            var currentdate =  strHours + seperator2 + strMinutes
              + seperator2 + strSeconds;
            this.time=currentdate;
          }
          this.datetimevalue=this.datetime+' '+this.time
          this.$emit('change', this.datetimevalue);
          this.$emit('input',  this.datetimevalue);
          this.dispatch('FormItem', 'form.change',[this.datetimevalue]);
          this.close()
        }
      },
      pickMonth (index) {
        this.now.setMonth(index);
        this.now = new Date(this.now);
        this.datetime = this.stringify(this.now);
        this.showmonth = false;
        this.show = true;
      },
      show_daytomonth(value){   //从日期界面进入月份界面
        this.show=false;
        var monthdata=[];
        for (var j = 0; j < 12; j++) {
          monthdata.push({
            text: j,
            time:this.months[j],
            status: 'month'
          });
        }
        this.monthdata=monthdata;
        for(var i=0;i<this.monthdata.length;i++){
          if(this.monthdata[i].text===value){
            this.monthdata[i].status='month active'
          }
        }
        this.showmonth=true;
      },
      show_yeartomonth(value){   //从年份界面进入月份界面
        if(this.years[value].status!='year old'){
          this.now.setFullYear(this.years[value].text)
          this.datetime = this.stringify(this.now);
          this.showyear=false;
          this.showmonth=true;
        }
      },
      show_monthtoyear(value){   //从日期界面||月份界面进入年份界面
        this.show=false
        this.showmonth=false
        var yeardata=[]
        var  year = parseInt(value/10, 10) * 10;
        this.star_year=year
        this.end_year=year+9
        year -= 1;
        for (let i = 1; i > 0; i--) {
          yeardata.push({
            text: year,
            status: "year old"
          });
        }
        for (var j = 0; j < 10; j++) {
          year += 1;
          yeardata.push({
            text: year,
            status: "year"
          });
        }
        while (yeardata.length <12) {
          yeardata.push({
            text: year+1,
            status: "year old"
          });
        }
        this.years=yeardata;
        for(var i=0;i<this.years.length;i++){
          if(this.years[i].text===this.date[21].time.getFullYear()){
            this.years[i].status='year active'
          }
        }
        this.showyear=true
      },
      picker(){
        this.showrange=true
          this.show=true;
          this.showmonth=false;
          this.showyear=false
      },
      leave (e) {
        if (!this.$el.contains(e.target)) {
          this.close();
        }
      },
      close () {
        this.showrange=false
        this.show = false;
        this.showmonth=false;
        this.showyear=false
      },
      changetime(val){
        this.time=val
        this.datetimevalue=this.datetime+' '+val
        this.$emit('change', this.datetimevalue);
        this.$emit('input',  this.datetimevalue);
        this.dispatch('FormItem', 'form.change',[this.datetimevalue]);
      },
      changedate(val){
        this.now = this.parse(val) || new Date();
        this.datetime=val
        this.datetimevalue=this.datetime+' '+this.time
        this.$emit('change', this.datetimevalue);
        this.$emit('input',  this.datetimevalue);
        this.dispatch('FormItem', 'form.change',[this.datetimevalue]);
      }
    },
    watch: {
      value(val) {
        this.datetimevalue=val
        var str= this.datetimevalue.split(" ");
        this.datetime= str[0];
        this.time=str[1];
        this.now = this.parse(this.datetime) || new Date();
      },
      now () {
        this.update();
      },
      show () {
        this.update();
      },
      showrange(val){
        if(val){
          if(this.$refs.datetimepicker_dropdown_menu_all){this.$refs.datetimepicker_dropdown_menu_all.style.zIndex = popup.nextZIndex();}
        }
      }     //z-index管理
    }
  };
</script>
<style>
  .dropdown-menu {
    position: absolute;
    top: 100%;
    left: 0;
    z-index: 1000;
    min-width: 160px;
    padding: 0;
    margin: 2px 0 0;
  }
  .form-control[disabled], fieldset[disabled] .form-control {
    cursor: not-allowed;
    background-color: #fbfbfb !important;
    border-color: #e5e5e5;
  }
  .form-control[readonly].form-control {
      cursor: default;
      background-color: #fbfbfb !important;
      border-color: #e5e5e5;
  }
  .form-control[readonly].form-control + .input-group-addon .fa{
      cursor: default;
  }
    .daterangepicker .calendar.left {
      margin-right: 2px;
    }
  .daterangepicker .calendar.left .calendar-table {
    padding-right: 0px;
    border: 1px solid #ddd;
  }
</style>
