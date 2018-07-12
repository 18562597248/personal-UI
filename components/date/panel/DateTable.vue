<template>
    <div
        :class="classes"
        @mousemove="handleMouseMove"
        @click="handleClick"
      >
         <div class="calendar-table">
           <table class="table-condensed" v-if="this.selectionMode === 'week'">
             <tbody >
                 <tr >
                   <span class="hd-date-picker-cells-cell" style="text-align: center"  v-for="day in weeks">{{ day }}</span>
                 </tr>
                 <tr><span :class="getCellCls(cell)" v-for="(cell, index) in readCells" ><em :index="index">{{ cell.text }}</em></span></tr>
             </tbody>
           </table>
           <table class="table-condensed" v-if="this.selectionMode !== 'week'">
             <tbody >
                 <tr >
                   <span class="hd-date-picker-cells-cell" style="text-align: center"  v-for="day in days">{{ day }}</span>
                 </tr>
                 <tr><span :class="getCellCls(cell)" v-for="(cell, index) in readCells" ><em :index="index">{{ cell.text }}</em></span></tr>
             </tbody>
           </table>
        </div>
    </div>
</template>
<script>
    import { getFirstDayOfMonth, getDayCountOfMonth,getWeekNumber } from '../utils/util';
    import { deepCopy } from 'src/utils/assist';
    import {t} from 'src/utils/locale';

    const prefixCls = 'hd-date-picker-cells';

    const clearHours = function (time) {
        const cloneDate = new Date(time);
        cloneDate.setHours(0, 0, 0, 0);
        return cloneDate.getTime();
    };

    export default {
        props: {
            date: {},
            week: {},
            year: {},
            month: {},
            selectionMode: {
                default: 'day'
            },
            disabledDate: {},
            minDate: {},
            maxDate: {},
            rangeState: {
                default () {
                    return {
                        endDate: null,
                        selecting: false,
                        row: null,
                        column: null
                    };
                }
            },
            begin:0,
            value: ''
        },
        data () {
            return {
                prefixCls: prefixCls,
                readCells: [],
                days: ['日','一', '二', '三', '四', '五', '六'],
                weeks: ['一', '二', '三', '四', '五', '六','日'],
                start:0,
                end:6,
                copyweek:{}
            };
        },
        watch: {
            'rangeState.endDate' (newVal) {
                this.markRange(newVal);
            },
            minDate(newVal, oldVal) {
                if (newVal && !oldVal) {
                    this.rangeState.selecting = true;
                    this.markRange(newVal);
                } else if (!newVal) {
                    this.rangeState.selecting = false;
                    this.markRange(newVal);
                } else {
                    this.markRange();
                }
            },
            maxDate(newVal, oldVal) {
                if (newVal && !oldVal) {
                    this.rangeState.selecting = false;
                    this.markRange(newVal);
                }
            },
            cells: {
                handler (cells) {
                    this.readCells = cells;
                    cells.forEach((item,index)=>{
                    if(item.type==='today'){
                        const column = parseInt(index/7);
                        this.start = 7*column;
                        this.end =7*column+6;
                    }
                })
                },
                immediate: true
            },

        },
        computed: {
            classes () {
                return [
                    `${prefixCls}`
                ];
            },
            cells () {
                const date = new Date(this.year, this.month, 1);
                let day = getFirstDayOfMonth(date);    // day of first day
                day = (day === 0 ? 7 : day);
                if(this.selectionMode === 'week'){ day=day-1}
                const today = clearHours(new Date());    // timestamp of today
                const selectDay = clearHours(new Date(this.value));    // timestamp of selected day
                const minDay = clearHours(new Date(this.minDate));
                const maxDay = clearHours(new Date(this.maxDate));

                const dateCountOfMonth = getDayCountOfMonth(date.getFullYear(), date.getMonth());
                const dateCountOfLastMonth = getDayCountOfMonth(date.getFullYear(), (date.getMonth() === 0 ? 11 : date.getMonth() - 1));

                const disabledDate = this.disabledDate;

                let cells = [];
                const cell_tmpl = {
                    text: '',
                    type: '',
                    selected: false,
                    disabled: false,
                    range: false,
                    start: false,
                    end: false
                };

                    if(this.selectionMode === 'week'){
                        for (let i = 0; i < day; i++) {
                            const cell = deepCopy(cell_tmpl);
                            cell.type = 'prev-month';
                            cell.text = dateCountOfLastMonth - (day - 1) + i;
                            let prevMonth = this.month - 1;
                            let prevYear = this.year;
                            if (this.month === 0) {
                                prevMonth = 11;
                                prevYear -= 1;
                            }
                            const time = clearHours(new Date(prevYear, prevMonth, cell.text));
                            cell.disabled = typeof disabledDate === 'function' && disabledDate(new Date(time));
                            cells.push(cell);
                        }
                    }else{
                        if (day !== 7) {
                        for (let i = 0; i < day; i++) {
                            const cell = deepCopy(cell_tmpl);
                            cell.type = 'prev-month';
                            cell.text = dateCountOfLastMonth - (day - 1) + i;

                            let prevMonth = this.month - 1;
                            let prevYear = this.year;
                            if (this.month === 0) {
                                prevMonth = 11;
                                prevYear -= 1;
                            }
                            const time = clearHours(new Date(prevYear, prevMonth, cell.text));
                            cell.disabled = typeof disabledDate === 'function' && disabledDate(new Date(time));
                            cells.push(cell);
                        }
                    }
                }

                for (let i = 1; i <= dateCountOfMonth; i++) {
                    const cell = deepCopy(cell_tmpl);
                    const time = clearHours(new Date(this.year, this.month, i));
                    cell.type = time === today ? 'today' : 'normal';
                    cell.text = i;
                    cell.selected = time === selectDay;
                    cell.disabled = typeof disabledDate === 'function' && disabledDate(new Date(time));
                    cell.range = time >= minDay && time <= maxDay;
                    cell.start = this.minDate && time === minDay;
                    cell.end = this.maxDate && time === maxDay;
                    cells.push(cell);
                }

                const nextMonthCount = 42 - cells.length;
                for (let i = 1; i <= nextMonthCount; i++) {
                    const cell = deepCopy(cell_tmpl);
                    cell.type = 'next-month';
                    cell.text = i;

                    let nextMonth = this.month + 1;
                    let nextYear = this.year;
                    if (this.month === 11) {
                        nextMonth = 0;
                        nextYear += 1;
                    }
                    const time = clearHours(new Date(nextYear, nextMonth, cell.text));
                    cell.disabled = typeof disabledDate === 'function' && disabledDate(new Date(time));
                    cells.push(cell);
                }
                if (this.selectionMode === 'week') {
                    const isWeekActive = this.isWeekActive(cells[this.start+1]);
                    cells[this.start].start = isWeekActive;
                    cells[this.end].end = isWeekActive;
                     for (var j = 0; j < 7; j++) {
                      cells[j+this.start].range = isWeekActive;
                    }
                }
            /*    console.log(cells)*/
                return cells;
            }
        },
        mounted(){
            let _this=this
            this.$nextTick(()=>{
                if(_this.week){
                _this.copyweek=_this.week
            }
            })
        },
        methods: {
            getDateOfCell (cell) {
                let year = this.year;
                let month = this.month;
                let day = cell.text;

                const date = this.date;
                const hours = date.getHours();
                const minutes = date.getMinutes();
                const seconds = date.getSeconds();

                if (cell.type === 'prev-month') {
                    if (month === 0) {
                        month = 11;
                        year--;
                    } else {
                        month--;
                    }
                } else if (cell.type === 'next-month') {
                    if (month === 11) {
                        month = 0;
                        year++;
                    } else {
                        month++;
                    }
                }
                return new Date(year, month, day, hours, minutes, seconds);
            },
            handleClick (event) {
                const target = event.target;
                if (target.tagName === 'EM') {
                    const cell = this.cells[parseInt(event.target.getAttribute('index'))];
                    if (cell.disabled) return;

                    const newDate = this.getDateOfCell(cell);
                    if (this.selectionMode === 'range' ) {
                        if (this.minDate && this.maxDate) {
                            const minDate = new Date(newDate.getTime());
                            const maxDate = null;
                            this.rangeState.selecting = true;
                            this.markRange(this.minDate);

                            this.$emit('on-pick', {minDate, maxDate}, false);
                        } else if (this.minDate && !this.maxDate) {
                            if (newDate >= this.minDate) {
                                const maxDate = new Date(newDate.getTime());
                                this.rangeState.selecting = false;

                                this.$emit('on-pick', {minDate: this.minDate, maxDate});
                            } else {
                                const minDate = new Date(newDate.getTime());

                                this.$emit('on-pick', {minDate, maxDate: this.maxDate}, false);
                            }
                        } else if (!this.minDate) {
                            const minDate = new Date(newDate.getTime());
                            this.rangeState.selecting = true;
                            this.markRange(this.minDate);
                            this.$emit('on-pick', {minDate, maxDate: this.maxDate}, false);
                        }
                    } else if (this.selectionMode === 'week') {
                        const cell =parseInt(event.target.getAttribute('index'));
                        const column = parseInt(cell/7);
                        this.start = 7*column;
                         this.end =7*column+6;
                        this.copyweek=getWeekNumber(this.getDateOfCell(this.cells[this.end]))
                        this.$emit('on-pick', {minDate:this.getDateOfCell(this.cells[this.start]),maxDate:this.getDateOfCell(this.cells[this.end])}, false);
                    }else {
                        this.$emit('on-pick', newDate);
                    }
                }
                this.$emit('on-pick-click');
            },
            handleMouseMove (event) {
                    if (!this.rangeState.selecting) return;

                    this.$emit('on-changerange', {
                        minDate: this.minDate,
                        maxDate: this.maxDate,
                        rangeState: this.rangeState
                    });
                   const target = event.target;
                    if (target.tagName === 'EM') {
                        const cell = this.cells[parseInt(event.target.getAttribute('index'))];
                        this.rangeState.endDate = this.getDateOfCell(cell);
                    }
            },
            isWeekActive(cell) {
                if (this.selectionMode !== 'week') return false;
                const newDate = new Date(this.year, this.month, 1);
                const year = newDate.getFullYear();
                const month = newDate.getMonth();
                if (cell.type === 'prev-month') {
                    newDate.setMonth(month === 0 ? 11 : month - 1);
                    newDate.setFullYear(month === 0 ? year - 1 : year);
                }
                if (cell.type === 'next-month') {
                    newDate.setMonth(month === 11 ? 0 : month + 1);
                    newDate.setFullYear(month === 11 ? year + 1 : year);
                }
                newDate.setDate(parseInt(cell.text, 10));
                return getWeekNumber(newDate) === this.copyweek;
            },
            markRange (maxDate) {
                const minDate = this.minDate;
                if (!maxDate) maxDate = this.maxDate;

                const minDay = clearHours(new Date(minDate));
                const maxDay = clearHours(new Date(maxDate));

                this.cells.forEach(cell => {
                    if (cell.type === 'today' || cell.type === 'normal') {
                        const time = clearHours(new Date(this.year, this.month, cell.text));
                        cell.range = time >= minDay && time <= maxDay;
                        cell.start = minDate && time === minDay;
                        cell.end = maxDate && time === maxDay;
                    }
                });
            },
            getCellCls (cell) {
                return [
                    `${prefixCls}-cell`,
                    {
                        [`${prefixCls}-cell-selected`]: cell.selected || cell.start || cell.end,
                        [`${prefixCls}-cell-disabled`]: cell.disabled,
                        [`${prefixCls}-cell-today`]: cell.type === 'today',
                        [`${prefixCls}-cell-prev-month`]: cell.type === 'prev-month',
                        [`${prefixCls}-cell-next-month`]: cell.type === 'next-month',
                        [`${prefixCls}-cell-range`]: cell.range && !cell.start && !cell.end
                    }
                ];
            },

        }
    };
</script>
<style>
    .hd-select-dropdown{
        width:inherit;
        max-height:200px;
        overflow:auto;
        margin:5px 0;
        padding:5px 0;
        background-color:#fff;
        box-sizing:border-box;
        border-radius:4px;
        box-shadow:0 1px 6px rgba(0,0,0,.2);
        position:absolute;z-index:900}
    .hd-date-picker{
        line-height:normal
    }
    .hd-date-picker-rel{
        position:relative
    }
    .hd-date-picker .hd-select-dropdown{
        width:auto;
        padding:0;
        overflow:visible;
        max-height:none
    }
    .hd-date-picker-cells{
        width:196px;
        margin:6px;
        white-space:normal
    }
    .hd-date-picker-cells span,.hd-date-picker-cells span em{
        display:inline-block;
        width:24px;
        height:24px
    }
    .hd-date-picker-cells span em{
        line-height:24px;
        margin:2px;
        font-style:normal;
        border-radius:3px;
        text-align:center;
        transition:all .2s ease-in-out
    }
    .hd-date-picker-cells-header span{
        line-height:24px;
        text-align:center;
        margin:2px;
        color:#c3cbd6
    }
    span.hd-date-picker-cells-cell{
        width:28px;
        height:28px;
        cursor:pointer
    }
    .hd-date-picker-cells-cell:hover em{
        background:#e1f0fe
    }
    .hd-date-picker-cells-cell-next-month em,.hd-date-picker-cells-cell-prev-month em{
        color:#c3cbd6
    }
    .hd-date-picker-cells-cell-next-month:hover em,.hd-date-picker-cells-cell-prev-month:hover em{
        background:0 0
    }
    span.hd-date-picker-cells-cell-disabled,span.hd-date-picker-cells-cell-disabled:hover{
        cursor:not-allowed;
        background:#f7f7f7;
        color:#c3cbd6
    }
   span.hd-date-picker-cells-cell-disabled:hover em,span.hd-date-picker-cells-cell-disabled em{
        color:inherit;
        background:inherit
    }
    .hd-date-picker-cells-cell-today em{
        position:relative
    }
    .hd-date-picker-cells-cell-today em:after{
        content: " ";
        position: absolute;
        top: 0;
        right: 0;
        width: 0;
        height: 0;

        border-top: .5em solid #20a0ff;
        border-left: .5em solid transparent;
    }
    .hd-date-picker-cells-cell-range{
        position:relative
    }
    .hd-date-picker-cells-cell-range em{
        position:relative;z-index:1
    }
    .hd-date-picker-cells-cell-range:before{
        content:"";
        display:block;
        background:#d0e7fc;
        border-radius:0;
        border:0;
        position:absolute;
        top:2px;
        bottom:2px;
        left:0;
        right:0
    }
    .hd-date-picker-cells-cell-selected:hover em,.hd-date-picker-cells-cell-selected em{
        background:#2dc3e8;
        color:#fff
    }
    span.hd-date-picker-cells-cell-disabled.hd-date-picker-cells-cell-selected em{
        background:#c3cbd6;
        color:#f7f7f7
    }
    .hd-date-picker-cells-cell-today.hd-date-picker-cells-cell-selected em:after{
        background:#fff
    }
    .hd-date-picker-cells-month,.hd-date-picker-cells-year{
        margin-top:14px
    }
    .hd-date-picker-cells-month span,.hd-date-picker-cells-year span{
        width:40px;
        height:28px;
        line-height:28px;
        margin:10px 12px;
        border-radius:3px
    }
    .hd-date-picker-cells-month span em,.hd-date-picker-cells-year span em{
        width:40px;
        height:28px;
        line-height:28px;
        margin:0
    }
    .hd-date-picker-header{
        height:32px;
        line-height:32px;
        text-align:center;
        border-bottom:1px solid #e3e8ee
    }
    .hd-date-picker-header-label{
        cursor:pointer;
        transition:color .2s ease-in-out
    }
    .hd-date-picker-header-label:hover{
        color:#39f
    }
    .hd-date-picker-prev-btn{
        float:left
    }
    .hd-date-picker-prev-btn-arrow-double{
        margin-left:10px
    }
    .hd-date-picker-prev-btn-arrow-double i:after{
        content:"\F3D2"
    }
    .hd-date-picker-next-btn{
        float:right
    }
    .hd-date-picker-next-btn-arrow-double{
        margin-right:10px
    }
    .hd-date-picker-next-btn-arrow-double i:after{
        content:"\F3D3"
    }
    .hd-date-picker-with-range .hd-picker-panel-body{
        min-width:432px
    }
    .hd-date-picker-with-range .hd-picker-panel-content{
        float:left
    }
    .hd-picker-panel-icon-btn{
        display:inline-block;
        width:20px;
        height:24px;
        line-height:26px;
        margin-top:4px;
        text-align:center;
        cursor:pointer;
        color:#c3cbd6;
        transition:color .2s ease-in-out
    }
    .hd-picker-panel-icon-btn:hover{
        color:#39f
    }
    .hd-picker-panel-icon-btn i{
        font-size:14px
    }
    .hd-picker-panel-body-wrapper.hd-picker-panel-with-sidebar{
        padding-left:92px
    }
    .hd-picker-panel-sidebar{
        width:92px;
        float:left;
        margin-left:-92px;
        position:absolute;
        top:0;
        bottom:0;
        background:#ffffff;
        border-right:1px solid #e3e8ee;
        border-radius:4px 0 0 4px;
        overflow:auto
    }
    .hd-picker-panel-shortcut{
        padding:6px 15px 7px;
        transition:all .2s ease-in-out;
        cursor:pointer;
        overflow:hidden;
        text-overflow:ellipsis;
        white-space:nowrap
    }
    .hd-picker-panel-shortcut:hover{
        background:#fbfbfb
    }
    .hd-picker-panel-body{
        float:left
    }
    .hd-picker-confirm{
        border-top:1px solid #e3e8ee;
        text-align:right;
        padding:8px;
        clear:both

    }
    .hd-picker-confirm>span{
        cursor:pointer;
        -webkit-user-select:none;
        -moz-user-select:none;
        -ms-user-select:none;
        user-select:none;
        float:left;
        padding:2px 0;
        transition:all .2s ease-in-out
    }
    .hd-picker-confirm>span:hover{
        color:#5cadff
    }
    .hd-picker-confirm>span:active{
        color:#3091f2
    }
    .hd-picker-confirm>span.hd-picker-confirm-time-disabled{
        color:#c3cbd6;
        cursor:not-allowed
    }
    .hd-time-picker-cells{min-width:112px}
    .hd-time-picker-cells-with-seconds{
        min-width:168px
    }
    .hd-time-picker-cells-list{
        width:56px;
        max-height:144px;
        float:left;
        overflow:hidden;
        border-left:1px solid #e3e8ee;
        position:relative
    }
    .hd-time-picker-cells-list:hover{
        overflow-y:auto
    }
    .hd-time-picker-cells-list:first-child{
        border-left:none;
        border-radius:4px 0 0 4px
    }
    .hd-time-picker-cells-list:last-child{
        border-radius:0 4px 4px 0
    }
    .hd-time-picker-cells-list ul{
        width:100%;
        margin:0;
        padding:0 0 120px;
        list-style:none
    }
    .hd-time-picker-cells-list ul li {
        width:100%;
        height:24px;
        line-height:24px;
        margin:0;
        padding:0 0 0 16px;
        box-sizing:content-box;
        text-align:left;
        -webkit-user-select:none;
        -moz-user-select:none;
        -ms-user-select:none;
        user-select:none;
        cursor:pointer;
        list-style:none;
        transition:background .2s ease-in-out
    }
    .hd-time-picker-cells-cell:hover{
        background:#f3f3f3
    }
    .hd-time-picker-cells-cell-disabled{
        color:#c3cbd6;
        cursor:not-allowed
    }
    .hd-time-picker-cells-cell-disabled:hover{
        color:#c3cbd6;
        background-color:#fff;
        cursor:not-allowed
    }
    .hd-time-picker-cells-cell-selected,.hd-time-picker-cells-cell-selected:hover{
        color:#39f;
        background:#f3f3f3
    }
    .hd-time-picker-header{
        height:32px;
        line-height:32px;
        text-align:center;
        border-bottom:1px solid #e3e8ee
    }
   /* .daterange .hd-picker-panel-body{
        min-width:228px
    }*/
    .daterange .hd-picker-panel-content:after{
        content:"";
        display:block;
        width:2px;
        position:absolute;
        top:31px;
        bottom:0;
        right:-2px;
        background:#e3e8ee;
        z-index:1
    }
    .daterange .hd-picker-panel-content-right{
        float:right
    }
    .daterange .hd-picker-panel-content-right:after{
        right:auto;
        left:-2px
    }
    .daterange .hd-time-picker-cells-list:first-child,.hd-time-picker-with-range .hd-time-picker-cells-list:last-child{
        border-radius:0
    }
    .daterange.hd-time-picker-with-seconds .hd-picker-panel-body{
        min-width:340px
    }
    .hd-picker-panel-content .hd-picker-panel-content .hd-time-picker-cells,.hd-picker-panel-content .hd-picker-panel-content .hd-time-picker-cells-with-seconds{
        min-width:216px
    }
    .hd-picker-panel-content .hd-picker-panel-content .hd-time-picker-cells-with-seconds .hd-time-picker-cells-list{
        width:72px
    }
    .hd-picker-panel-content .hd-picker-panel-content .hd-time-picker-cells-with-seconds .hd-time-picker-cells-list ul li{
        padding:0 0 0 28px
    }
    .hd-picker-panel-content .hd-picker-panel-content .hd-time-picker-cells-list{
        width:108px;
        max-height:216px
    }
    .hd-picker-panel-content .hd-picker-panel-content .hd-time-picker-cells-list:first-child,.hd-picker-panel-content .hd-picker-panel-content .hd-time-picker-cells-list:last-child{
        border-radius:0
    }
    .hd-picker-panel-content .hd-picker-panel-content .hd-time-picker-cells-list ul{
        padding:0 0 192px
    }
    .hd-picker-panel-content .hd-picker-panel-content .hd-time-picker-cells-list ul li{
        padding:0 0 0 46px
    }
</style>