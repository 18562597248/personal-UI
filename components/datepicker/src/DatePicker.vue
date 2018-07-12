<template>
  <div  style="position: relative;">
    <div class="input-group">
      <input
        class="form-control date-picker"
        type="text"
        onkeyup="value=value.replace(/[^\-?\d.]/g,'') "
        :disabled="disabled"
        :readonly="readonly"
        :value="this.datetime"
        @click="picker()"
        @input="handleInput"
        @change.native="this.datetime = $event.target.value"
      >
      <span class="input-group-addon" :style="spanstyles">
        <i class="fa fa-calendar"></i>
      </span>
    </div>
    <div ref="datapicker_dropdown_menu_if" class="daterangepicker dropdown-menu show-calendar opensright" v-show="showrange" @mouseover="handleMouseMove" style="display: block;left:auto;" v-if="period" >
      <div class="calendar left" style="display: block" @input="handleFirstDate">
        <div class="daterangepicker_input">
          <input class="input-mini" type="text" name="daterangepicker_start" :value="this.FirstDate"    onkeyup="value=value.replace(/[^\-?\d.]/g,'') ">
          <i class="fa fa-calendar glyphicon glyphicon-calendar"></i>
          <div class="calendar-time" style="display: none;">
          <i class="fa fa-clock-o glyphicon glyphicon-time"></i>
          </div>
        </div>
       <div class="calendar-table">
        <table class="table-condensed" @click="handleClick">
         <thead>
          <tr>
            <th class="prev available" @click="monthClick(-1)"><hd-icon type="fa fa-chevron-left glyphicon glyphicon-chevron-left"></hd-icon></th>
            <th colspan="5" class="month">{{now.getFullYear()+"&nbsp;&nbsp;&nbsp;"+months[now.getMonth()]}}</th>
            <th></th>
        </tr>
        <tr v-if="weekend">
          <th v-for="day in weekend_days">{{day}}</th>
        </tr>
        <tr v-else>
          <th v-for="day in days">{{day}}</th>
        </tr>
        </thead>
        <tbody v-if="weekend">
        <tr v-for="i in 6">
          <td v-for="j in 7"
              :class="date_left[(i-1) * 7 + j-1] && date_left[(i-1) * 7 + j-1].status"
              :date="date_left[(i-1) * 7 + j-1] && date_left[(i-1) * 7 + j-1].date"
            >{{date_left[(i-1) * 7 + j-1] && date_left[(i-1) * 7 + j-1].text}}</td>
        </tr>
        </tbody>
        <tbody v-else>
        <tr v-for="i in 6">
          <td v-for="j in 7"
              :class="date_left[(i-1) * 7 + j] && date_left[(i-1) * 7 + j].status"
              :date="date_left[(i-1) * 7 + j] && date_left[(i-1) * 7 + j].date"
              >{{date_left[(i-1) * 7 + j] && date_left[(i-1) * 7 + j].text}}</td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
      <div class="calendar right" style="display: block">
        <div class="daterangepicker_input">
          <input class="input-mini" type="text" name="daterangepicker_start" :value="this.SecondDate"   @input="handleSecondDate"    onkeyup="value=value.replace(/[^\-?\d.]/g,'') ">
          <i class="fa fa-calendar glyphicon glyphicon-calendar"></i>
          <div class="calendar-time" style="display: none;">
            <div></div>
            <i class="fa fa-clock-o glyphicon glyphicon-time"></i>
          </div>
        </div>
        <div class="calendar-table">
          <table class="table-condensed" @click="handleClick">
            <thead>
            <tr>
              <th></th>
              <th colspan="5" class="month" v-if="add">{{(now.getFullYear()+1)+"&nbsp;&nbsp;&nbsp;"+months[0]}}</th>
              <th colspan="5" class="month" v-else>{{now.getFullYear()+"&nbsp;&nbsp;&nbsp;"+months[now.getMonth()+1]}}</th>
              <th class="next available" @click="monthClick(1)"><hd-icon type="fa fa-chevron-right glyphicon glyphicon-chevron-right" ></hd-icon></th>
            </tr>
            <tr v-if="weekend">
              <th v-for="day in weekend_days">{{day}}</th>
            </tr>
            <tr v-else>
              <th v-for="day in days">{{day}}</th>
            </tr>
            </thead>
            <tbody v-if="weekend">
            <tr v-for="i in 6">
              <td v-for="m in 7"
                  :class="date_right[(i-1) * 7 + m-1] && date_right[(i-1) * 7 + m-1].status"
                  :date="date_right[(i-1) * 7 + m-1] && date_right[(i-1) * 7 + m-1].date"
                 >{{date_right[(i-1) * 7 + m-1] && date_right[(i-1) * 7 + m-1].text}}</td>
            </tr>
            </tbody>
            <tbody v-else>
            <tr v-for="i in 6">
              <td v-for="m in 7"
                  :class="date_right[(i-1) * 7 + m] && date_right[(i-1) * 7 + m].status"
                  :date="date_right[(i-1) * 7 + m] && date_right[(i-1) * 7 + m].date"
                 >{{date_right[(i-1) * 7 + m] && date_right[(i-1) * 7 + m].text}}</td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="ranges" style="display: block">
       <div class="range_inputs">
         <slot></slot>
       </div>
     </div>
    </div>
    <div ref="datapicker_dropdown_menu_else" class="datepicker dropdown-menu daterangepicker show-calendar opensright" v-show="showrange" style="display: block;left:auto;" v-else>
      <div class="calendar left" style="display: block">
        <div class="datepicker-days" v-show="show" style="display: block">
          <table class="table-condensed" :style="style">
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
          <table class="table-condensed" :style="style">
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
          <table class="table-condensed" :style="style">
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
  import popup from 'src/utils/popup/popupManager.js'     //z-index管理
  export default {
    name:'hd-date-picker',
    componentName: 'hd-date-picker',
    mixins: [emitter],
    props: {
      readonly: { type: Boolean, default: false },
      value: {},
      format: { type: String, default: 'YYYY-MM-DD' },
      period:{
        type:Boolean,
        default:false
      },
      weekend:{
        type:Boolean,
        default:false
      },
      disabled: Boolean
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
        date_left:[],
        date_right:[],
        date_concat:[],
        monthdata:[],
        years:[],
        star_year:[],
        end_year:[],
        now: new Date(),
        datetime:'',
        FirstDate:'',
        SecondDate:'',
        cell_time:'',
        cell:'',
        count:0,
        is_mousemove:false
      };
    },
    mounted () {
      if(this.period){
        if(this.value != undefined){
           var str=this.value.split("至");
           var val= str[0];
           var  val_second= str[1];
           this.FirstDate=val;
           this.now = this.parse(this.FirstDate);
           this.SecondDate=val_second;
           this.now = this.parse(this.SecondDate);
        }else{
          this.now = this.parse(this.value) || new Date();
        }
      }
      else{
        this.datetime=this.value;
        this.now = this.parse(this.datetime) || new Date();
      }
      document.addEventListener('click', this.leave, false);
    },
    beforeDestroy () {
      document.removeEventListener('click', this.leave, false);
    },
    computed: {
      spanstyles (){
        let style = {};
        if (this.disabled) {
          //border:1px solid #DDD;background-color:#fbfbfb;color:#ACA899;cursor: not-allowed
          style.backgroundColor = `#fbfbfb`;
          style.color = `#ACA899`;
          style.cursor=`not-allowed`;
        }
        return style;
      },
      style(){
        if(this.$slots.default){
          return  `border: 1px solid #ddd`
        }else{
          return " "
        }
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

        // 时间间隔左侧开始
        var arr1 = [];
        var time1 = new Date(this.now);
        time1.setMonth(time1.getMonth(), 1);           // 每月第一天
        var curFirstDay1 = time1.getDay();
        curFirstDay1 === 0 && (curFirstDay1 = 7);
        time1.setDate(0);
        var lastDayCount1 = time1.getDate();
        for (let i = curFirstDay1; i > 0; i--) {
          arr1.push({
            text: lastDayCount1 - i + 1,
            time: new Date(time1.getFullYear(), time1.getMonth(), lastDayCount1 - i + 1),
            status: 'off available'
          });
        }
        time1.setMonth(time1.getMonth() + 2, 0);       // 每月最后一天
        var curDayCount1 = time1.getDate();
        time1.setDate(1);
        var value1 = this.datetime || this.stringify(new Date());
        for (let i = 0; i < curDayCount1; i++) {
          let tmpTime1 = new Date(time1.getFullYear(), time1.getMonth(), i + 1);
          let status1 = 'available';
          this.stringify(tmpTime1) === value1 && (status1 = 'available  active');
          arr1.push({
            text: i + 1,
            time: tmpTime1,
            status: status1
          });
        }
        var m = 1;
        while (arr1.length <=42) {
          arr1.push({
            text: m,
            time: new Date(time1.getFullYear(), time1.getMonth() + 1, m),
            status: 'off available'
          });
          m++;
        }
        this.date_left = arr1;
        // 时间间隔左侧结束
        // 时间间隔右侧开始
        var arr2 = [];
        var time2= new Date(this.now);
        time2.setMonth(time2.getMonth()+1, 1);           // 每月第一天
        var curFirstDay2 = time2.getDay();
        curFirstDay2 === 0 && (curFirstDay2 = 7);
        time2.setDate(0);
        var lastDayCount2 = time2.getDate();
        for (let i = curFirstDay2; i > 0; i--) {
          arr2.push({
            text: lastDayCount2 - i + 1,
            time: new Date(time2.getFullYear(), time2.getMonth(), lastDayCount2 - i + 1),
            status: 'off available'
          });
        }
        time2.setMonth(time2.getMonth() + 2, 0);       // 每月最后一天
        var curDayCount2 = time2.getDate();
        time2.setDate(1);
        var value2 = this.value || this.stringify(new Date());
        for (let i = 0; i < curDayCount2; i++) {
          let tmpTime2 = new Date(time2.getFullYear(), time2.getMonth(), i + 1);
          let status2 = 'available';
          this.stringify(tmpTime2) === value2 && (status2 = 'available  active');
          arr2.push({
            text: i + 1,
            time: tmpTime2,
            status: status2
          });
        }
        var oo= 1;
        while (arr2.length <=42) {
          arr2.push({
            text: oo,
            time: new Date(time2.getFullYear(), time2.getMonth() + 1, oo),
            status: 'off available'
          });
          oo++;
        }
        this.date_right = arr2;
        // 时间间隔右侧结束
        this.date_concat = this.date_left.concat(this.date_right);
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
      handleMouseMove(event) {
        let _this = this;
        let target = event.target;
        if (target.tagName === 'TD') {
          const cellIndex = target.cellIndex;
          const rowIndex = target.parentNode.rowIndex - 2;
         if (_this.weekend) {
           _this.cell = target.parentNode.parentNode.parentNode.parentNode.parentNode.className === "calendar left"
             ? _this.date_left[rowIndex * 7 + cellIndex] : _this.date_right[rowIndex * 7 + cellIndex];
         } else {
           _this.cell = target.parentNode.parentNode.parentNode.parentNode.parentNode.className === "calendar left"
             ? _this.date_left[rowIndex * 7 + cellIndex + 1] : _this.date_right[rowIndex * 7 + cellIndex + 1];
         }
         if(_this.is_mousemove){
           var now = new Date(_this.cell.time);
           var cell_=_this.stringify(now);
           for (var i = 0; i < this.date_concat.length; i++) {
             if (_this.date_concat[i].status.indexOf('in-range') >= 0 && _this.date_concat[i].status.indexOf('off') < 0 && _this.date_concat[i].status.indexOf('active') < 0) {
               this.date_concat[i].status = 'available';
             }
           }
           /* _.each(_this.date_concat,function(target){*/
           _this.date_concat.forEach((target) => {
             var now = new Date(target.time);
             var cell_time=_this.stringify(now);
             if(cell_>_this.FirstDate && cell_time>=_this.FirstDate && cell_time<=cell_&&_this.FirstDate !="") {
               if(target.status.indexOf('in-range') < 0 && target.status.indexOf('off') < 0){
                 target.status =target.status + ' in-range';
               }
             }
           });
          }
          }
        },
      handleClick(event) {
        let _this = this;
        let target = event.target;
        if (target.tagName === 'TD') {
          const cellIndex = target.cellIndex;
          const rowIndex = target.parentNode.rowIndex - 2;
          if (_this.weekend) {
            _this.cell_time = target.parentNode.parentNode.parentNode.parentNode.parentNode.className === "calendar left"
              ? _this.date_left[rowIndex * 7 + cellIndex] : _this.date_right[rowIndex * 7 + cellIndex];
          } else {
            _this.cell_time = target.parentNode.parentNode.parentNode.parentNode.parentNode.className === "calendar left"
              ? _this.date_left[rowIndex * 7 + cellIndex + 1] : _this.date_right[rowIndex * 7 + cellIndex + 1];
          }
          if (_this.hasClass(target, 'off')) return;
          _this.count++
          if (_this.count === 1) {
            for (var i = 0; i < this.date_concat.length; i++) {
              if (_this.date_concat[i].status.indexOf('active') >= 0 || _this.date_concat[i].status.indexOf('in-range') >= 0 && _this.date_concat[i].status.indexOf('off') < 0) {
                this.date_concat[i].status = 'available';
              }
            }
            _this.cell_time.status = 'available  active';
            _this.is_mousemove=true
            var now = new Date(_this.cell_time.time);
            _this.FirstDate  = _this.stringify(now)
          }
          if (_this.count === 2) {
            for (var i = 0; i < this.date_concat.length; i++) {
              if (_this.date_concat[i].status.indexOf('active') >= 0 && this.stringify(new Date(this.date_concat[i].time))!=this.FirstDate && _this.date_concat[i].status.indexOf('off') < 0) {
                this.date_concat[i].status = 'available';
              }
            }
            _this.cell_time.status = 'available  active';
            var now = new Date(_this.cell_time.time);
            _this.SecondDate  = _this.stringify(now)
            if (_this.SecondDate >= _this.FirstDate) {
              _this.datetime = _this.FirstDate + '至' + _this.SecondDate;
              _this.$emit('change', _this.datetime);
              _this.is_mousemove=false
              _this.showrange = false;
              _this.count = 0
            } else {
              for (var i = 0; i < this.date_concat.length; i++) {
                if (_this.date_concat[i].status.indexOf('active') >= 0 && _this.date_concat[i].status.indexOf('off') < 0) {
                  this.date_concat[i].status = 'available';
                }
              }
              _this.cell_time.status = 'available  active';
              var now = new Date(_this.cell_time.time);
              _this.SecondDate  = _this.stringify(now)
              _this.FirstDate = _this.SecondDate;
              _this.count = 1;
            }
          }
        }
      },
      handleInput(event) {
        this.datetime=event.target.value;
        this.now = this.parse(this.datetime) || new Date();
        this.$emit('input',  this.datetime);
        this.dispatch('hd-formitem', 'form.change',[this.datetime]);
      },
      handleFirstDate(event) {
        this.FirstDate=event.target.value;
        this.now = this.parse(this.FirstDate) || new Date();
      },
      handleSecondDate(event) {
        this.SecondDate=event.target.value;
        this.now = this.parse(this.SecondDate) || new Date();
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
        _this.date_concat = _this.date_concat.concat(this.date_right);
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
          this.$emit('change', this.datetime);
          this.$emit('input',  this.datetime);
          this.dispatch('FormItem', 'form.change',[this.datetime]);
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
        if(this.period){
          this.showrange=true;
        }else{
          this.showrange=true;
          this.show=true;
          this.showmonth=false;
          this.showyear=false
        }
      },
      leave (e) {
        if (!this.$el.contains(e.target)) {
          this.close();
        }
      },
      close () {
        this.showrange=false;
        this.show = false;
        this.showmonth=false;
        this.showyear=false
      },
      hasClass(elem, cls) {
        cls = cls || '';
        if (cls.replace(/\s/g, '').length == 0) return false; //当cls没有参数时，返回false
        return new RegExp(' ' + cls + ' ').test(' ' + elem.className + ' ');
      },
      addClass(elem, cls) {
        if (!this.hasClass(elem, cls)) {
          elem.className = elem.className == '' ? cls : elem.className + ' ' + cls;
        }
      },
      removeClass(elem, cls) {
        if (this.hasClass(elem, cls)) {
          var newClass = ' ' + elem.className.replace(/[\t\r\n]/g, '') + ' ';
          while (newClass.indexOf(' ' + cls + ' ') >= 0) {
            newClass = newClass.replace(' ' + cls + ' ', ' ');
          }
          elem.className = newClass.replace(/^\s+|\s+$/g, '');
        }
      }
    },
    watch: {
      value(val) {
        if(!this.period) {
          this.datetime = val
          this.now = this.parse(this.datetime) || new Date();
        }
       // this.now = this.parse(this.datetime);
      },
      now () {
        this.update();
        let _this=this
        _this.date_concat.forEach(function(target)
        {
          if(target.status.indexOf('active')>=0 && target.status.indexOf('off') < 0){
            target.status = 'available';
          }
          var now = new Date(target.time);
          var cell_time=_this.stringify(now);
          if(_this.count!= 1){
            if(cell_time>=_this.FirstDate && cell_time<=_this.SecondDate) {
              if(cell_time===_this.FirstDate ||cell_time===_this.SecondDate) {
                target.status =target.status + ' active in-range';
              }else{
                target.status =target.status + ' in-range';
              }
            }
          }else{
            if(cell_time>=_this.FirstDate && cell_time<=_this.SecondDate) {
              if(cell_time===_this.FirstDate) {
                target.status =target.status + ' active in-range';
              }else{
                target.status ='available';
              }
            }
          }
        });
      },
      show () {
        this.update();
      },
      FirstDate(val) {
        if(this.period){
          var str=val.split("-");
          var val1= str[1];
          if(val1==="12"){
            this.add=true
          }else{
            this.add=false;
          }
          this.datetime = val + '至' + this.SecondDate;
          return  this.datetime
        }
      },
      SecondDate(val) {
        if(this.period){
          var str=val.split("-");
          var val1= str[1];
          if(val1==="12"){
            this.add=true
          }else{
            this.add=false;
          }
          this.datetime = this.FirstDate + '至' + val;
          return  this.datetime
        }
      },
      showrange(val){
        if(val){
          if(this.$refs.datapicker_dropdown_menu_if){this.$refs.datapicker_dropdown_menu_if.style.zIndex = popup.nextZIndex();}
          if(this.$refs.datapicker_dropdown_menu_else){this.$refs.datapicker_dropdown_menu_else.style.zIndex = popup.nextZIndex();}
        }
      }     //z-index管理
     /* datetime(val) {
        if(this.period){
          var str=val.split("至");
          var val= str[0];
          var  val_second= str[1];
          this.FirstDate=val;
          this.SecondDate=val_second;
        }
      }*/
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
  .form-control[disabled], .form-control[readonly], fieldset[disabled] .form-control {
    cursor: not-allowed;
    background-color: #fbfbfb !important;
    border-color: #e5e5e5;
  }
</style>
