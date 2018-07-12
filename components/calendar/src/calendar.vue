<template>
    <div class="row">
        <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12" style="padding-right: 0px;">
            <div class="widget flat">
                <div class="widget-body">
                    <div  class="fc fc-ltr fc-unthemed">
                        <div class="fc-toolbar">
                            <div class="fc-left">
                                <div class="fc-button-group">
                                    <button type="button" class="fc-prev-button fc-button fc-state-default fc-corner-left" @click="monthClick(-1)"><span
                                        class="fc-icon fc-icon-left-single-arrow"></span></button>
                                </div>
                            </div>
                            <div class="fc-center" v-if="add"><h2>{{(now.getFullYear()-1)+"&nbsp;年&nbsp;"+months[11]}}</h2></div>
                            <div class="fc-center" v-else><h2>{{now.getFullYear()+"&nbsp;年&nbsp;"+months[now.getMonth()-1]}}</h2></div>
                            <div class="fc-clear"></div>
                        </div>
                        <div class="fc-view-container">
                            <div class="fc-view fc-month-view fc-basic-view">
                                <table>
                                    <thead class="fc-head">
                                    <tr >
                                        <td class="fc-widget-header">
                                            <div class="fc-row fc-widget-header">
                                                <table>
                                                    <thead>
                                                    <tr style="height: 48px">
                                                        <th v-for="day in weekend" class="fc-day-header fc-widget-header">{{day}}</th>
                                                    </tr>
                                                    </thead>
                                                </table>
                                            </div>
                                        </td>
                                    </tr>
                                    </thead>
                                    <tbody class="fc-body">
                                    <tr>
                                        <td class="fc-widget-content">
                                            <div class="fc-day-grid-container">
                                                <div class="fc-day-grid">
                                                    <div class="fc-row fc-week fc-widget-content" style="height: 68px;" v-for="i in 6">
                                                        <div class="fc-bg">
                                                            <table>
                                                                <tbody>
                                                                <tr>
                                                                    <td v-for="j in 7"
                                                                        class="fc-day fc-widget-content"
                                                                        :class="date_left[(i-1) * 7 + j-1] && date_left[(i-1) * 7 + j-1].status"
                                                                        @click="pickDate(date_left[(i-1) * 7 + j-1].time)">{{date_left[(i-1) * 7 + j-1] && date_left[(i-1) * 7 + j-1].text}}</td>
                                                                </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12" style=" padding-left: 0px;">
            <div class="widget flat">
                <div class="widget-body">
                    <div  class="fc fc-ltr fc-unthemed">
                        <div class="fc-toolbar">
                            <div class="fc-right">
                                <div class="fc-button-group">
                                    <button type="button" class="fc-next-button fc-button fc-state-default fc-corner-right" @click="monthClick(1)">
                                        <span class="fc-icon fc-icon-right-single-arrow"></span></button>
                                </div>
                            </div>
                            <div class="fc-center"><h2>{{now.getFullYear()+"&nbsp;年&nbsp;"+months[now.getMonth()]}}</h2></div>
                            <div class="fc-clear"></div>
                        </div>
                        <div class="fc-view-container">
                            <div class="fc-view fc-month-view fc-basic-view">
                                <table>
                                    <thead class="fc-head">
                                    <tr >
                                        <td class="fc-widget-header">
                                            <div class="fc-row fc-widget-header">
                                                <table>
                                                    <thead>
                                                    <tr style="height: 48px">
                                                        <th v-for="day in weekend" class="fc-day-header fc-widget-header">{{day}}</th>
                                                    </tr>
                                                    </thead>
                                                </table>
                                            </div>
                                        </td>
                                    </tr>
                                    </thead>
                                    <tbody class="fc-body">
                                    <tr>
                                        <td class="fc-widget-content">
                                            <div class="fc-day-grid-container">
                                                <div class="fc-day-grid">
                                                    <div class="fc-row fc-week fc-widget-content" style="height: 68px;" v-for="i in 6">
                                                        <div class="fc-bg">
                                                            <table>
                                                                <tbody>
                                                                <tr >
                                                                    <td v-for="j in 7"
                                                                        class="fc-day fc-widget-content"
                                                                        :class="date_right[(i-1) * 7 + j-1] && date_right[(i-1) * 7 + j-1].status"
                                                                        @click="pickDate(date_right[(i-1) * 7 + j-1].time)">{{date_right[(i-1) * 7 + j-1] && date_right[(i-1) * 7 + j-1].text}}</td>
                                                                </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name:'hd-calendar',
        props: {
            renderDate: {
                type: Array,
                default () {
                    return [];
                }
            }
        },
        data () {
            return {
                format:'YYYY-MM-DD',
                add:false,
                past:false,
                weekend:['日','一', '二', '三', '四', '五', '六'],
                months: ['一 月', '二 月', '三 月', '四 月', '五 月', '六 月', '七 月', '八 月', '九 月', '十 月', '十一 月', '十二 月'],
                date: [],
                date_left:[],
                date_right:[],
                now: new Date()
            };
        },
        mounted () {
          this.now = new Date();
        },
        methods: {
            update () {
                // 时间间隔左侧开始
                var arr1 = [];
                var time1 = new Date(this.now);
                time1.setMonth(time1.getMonth()-1, 1);           // 每月第一天
                var curFirstDay1 = time1.getDay();
                curFirstDay1 === 0 && (curFirstDay1 = 7);
                time1.setDate(0);
                let status1 = '';
                var value1 = this.stringify(new Date());
                for (let i = curFirstDay1; i > 0; i--) {
                    arr1.push({
                        text: '',
                        time: '',
                        status: ''
                    });
                }
                time1.setMonth(time1.getMonth() + 2, 0);       // 每月最后一天
                var curDayCount1 = time1.getDate();
                time1.setDate(1);
                let self=this
                for (let i = 0; i < curDayCount1; i++) {
                    var tmpTime1 = new Date(time1.getFullYear(), time1.getMonth(), i + 1);
                    if(this.stringify(tmpTime1) === value1){
                        status1 = 'fc-today'
                    } else if(this.stringify(tmpTime1) > value1){
                        status1 = 'fc-other-month'
                    }else{
                        status1 = ' '
                    }
                    if(this.renderDate){
                        this.renderDate.forEach((cell) =>{
                            cell=new Date(cell)
                            if(self.stringify(cell)===self.stringify(tmpTime1) && self.stringify(cell) < value1){
                               status1 = 'fc-uncompleted'
                           }
                    })
                    }
                    arr1.push({
                        text: i + 1,
                        time: tmpTime1,
                        status: status1
                    });
                }
                var m = 1;
                while (arr1.length <=42) {
                    arr1.push({
                        text: '',
                        time: '',
                        status: ''
                    });
                    m++;
                }
                this.date_left = arr1;
                // 时间间隔左侧结束
                // 时间间隔右侧开始
                var arr2 = [];
                var time2= new Date(this.now);
                time2.setMonth(time2.getMonth(), 1);           // 每月第一天
                var curFirstDay2 = time2.getDay();
                curFirstDay2 === 0 && (curFirstDay2 = 7);
                time2.setDate(0);
                var value2 = this.stringify(new Date());
                let status2 = '';
                for (let i = curFirstDay2; i > 0; i--) {
                    arr2.push({
                        text: '',
                        time: '',
                        status: ''
                    });
                }
                time2.setMonth(time2.getMonth() + 2, 0);       // 每月最后一天
                var curDayCount2 = time2.getDate();
                time2.setDate(1);
                for (let i = 0; i < curDayCount2; i++) {
                    let tmpTime2 = new Date(time2.getFullYear(), time2.getMonth(), i + 1);

                    if(this.stringify(tmpTime2) === value2){
                       status2 = 'fc-today'
                    }else  if(this.stringify(tmpTime2) > value2){
                        status2 = 'fc-other-month'
                    }else{
                        status2 = ' '
                    }
                    if(this.renderDate) {
                        this.renderDate.forEach((cell) => {
                            cell = new Date(cell)
                        if (self.stringify(cell) === self.stringify(tmpTime2) && self.stringify(cell) < value2) {
                            status2 = 'fc-uncompleted'
                        }
                    })
                    }
                    arr2.push({
                        text: i + 1,
                        time: tmpTime2,
                        status: status2
                    });
                }
                var oo= 1;
                while (arr2.length <=42) {
                    arr2.push({
                        text: '',
                        time: '',
                        status: ''
                    });
                    oo++;
                }
                this.date_right = arr2;
                // 时间间隔右侧结束
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
            monthClick (flag) {  //执行月份加减
                this.now.setMonth(this.now.getMonth() + flag);
                this.now = new Date(this.now);
                if(this.now.getMonth()===0){
                    this.add=true
                }else{
                    this.add=false;
                }
                var clickdate = this.stringify(this.now);
                var date=clickdate.substring(0,7)
                this.$emit('getYearMonth',date)
            },
            pickDate (val) {
                if(!val) return
                var date = this.stringify(new Date());
                var clickdate = this.stringify(val);
                if(date<clickdate) return
                 this.$emit('click',clickdate)
            }
        },
        watch: {
            now () {
                this.update();
            },
            renderDate: {
                handler: function handler() {
                    this.update();
                },
                deep: true
            }
        }
    };
</script>
<style>
    .fc th, .fc td {
        border-style: solid;
        border-width: 1px;
        vertical-align: middle;
        text-align: center;
    }
    tbody td {
        cursor: pointer;
    }
     .fc-uncompleted {
        background: #8DB4E2;
    }
</style>
