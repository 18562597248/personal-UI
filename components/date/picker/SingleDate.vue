<template>
  <div :class="classes">
    <div class="datepicker daterange">
      <div :class="[prefixCls + '-sidebar']" v-if="shortcuts.length" style="display: block">
        <div
          :class="[prefixCls + '-shortcut']"
          v-for="shortcut in shortcuts"
          @click="handleShortcutClick(shortcut)">{{ shortcut.text }}</div>
      </div>
      <div :class="[prefixCls + '-body']" style="display: block">
        <div class="calendar-table">
          <table class="table-condensed" v-show="currentView !== 'time'">
            <thead>
            <tr>
              <th  @click="prevYear"><span><hd-icon type="fa fa-angle-double-left"></hd-icon></span></th>
              <th  @click="prevMonth" v-if="currentView === 'date'"><span><hd-icon type="fa  fa-angle-left"></hd-icon></span></th>
              <th @click.stop="showYearPicker"><span>{{ yearLabel }}</span></th>
              <th style="width: 36px" @click.stop="showMonthPicker"  v-if="currentView === 'date'"><span>{{ monthLabel }}</span></th>
              <th @click="nextMonth" v-if="currentView === 'date'"><span><hd-icon type="fa fa-angle-right"></hd-icon></span></th>
              <th @click="nextYear"><span><hd-icon type="fa fa-angle-double-right"></hd-icon></span></th>
            </tr>
            </thead>
          </table>
        </div>
        <div :class="[prefixCls + '-content']">
          <date-table
              ref="datetable"
            v-show="currentView === 'date'"
            :year="year"
            :month="month"
            :date="date"
            :min-date="minDate"
            :max-date="maxDate"
            :value="value"
            :week="week"
            :begin="start"
            :selection-mode="selectionMode"
            :disabled-date="disabledDate"
            @on-pick="handleDatePick"
            @on-pick-click="handlePickClick"></date-table>
          <year-table
            ref="yearTable"
            v-show="currentView === 'year'"
            :year="year"
            :date="date"
            :selection-mode="selectionMode"
            :disabled-date="disabledDate"
            @on-pick="handleYearPick"
            @on-pick-click="handlePickClick"></year-table>
          <month-table
            ref="monthTable"
            v-show="currentView === 'month'"
            :month="month"
            :date="date"
            :selection-mode="selectionMode"
            :disabled-date="disabledDate"
            @on-pick="handleMonthPick"
            @on-pick-click="handlePickClick"></month-table>
          <time-picker
            ref="timePicker"
            show-date
            v-show="currentView === 'time'"
            @on-pick="handleTimePick"
            @on-pick-click="handlePickClick"></time-picker>
        </div>
        <FooterTable
          v-if="confirm"
          :show-time="showTime"
          :is-time="isTime"
          @on-pick-toggle-time="handleToggleTime"
          @on-pick-clear="handlePickClear"
          @on-pick-success="handlePickSuccess"></FooterTable>
      </div>
    </div>
  </div>
</template>
<script>
    import DateTable from '../panel/DateTable.vue';
    import YearTable from '../panel/YearTable.vue';
    import MonthTable from '../panel/MonthTable.vue';
    import TimePicker from './SingleTime.vue';
    import FooterTable from '../panel/FooterTable.vue';
    import hdIcon from 'components/icon/src/Icon.vue';
    import Mixin from '../utils/mixin';
    import {t} from 'src/utils/locale';

    import { initTimeDate,getWeekNumber } from '../utils/util';

    const prefixCls = 'hd-picker-panel';
    const datePrefixCls = 'hd-date-picker';

    export default {
        name: 'DatePicker',
        mixins: [ Mixin ],
        components: {  DateTable, YearTable, MonthTable, TimePicker, FooterTable,hdIcon },
        data () {
            return {
                prefixCls: prefixCls,
                datePrefixCls: datePrefixCls,
                shortcuts: [],
                currentView: 'date',
                date: initTimeDate(),
                minDate: '',
                maxDate: '',
                value: '',
                showTime: false,
                selectionMode: 'day',
                disabledDate: '',
                year: null,
                month: null,
                week: null,
                confirm: false,
                isTime: false,
                format: 'yyyy-MM-dd',
                start:0
            };
        },
        computed: {
            classes () {
                return [
                    `${prefixCls}-body-wrapper`,
                    {
                        [`${prefixCls}-with-sidebar`]: this.shortcuts.length
                    }
                ];
            },
            yearLabel () {
                const tYear = t('hd.datepicker.year');
                const year = this.year;
                if (!year) return '';
                if (this.currentView === 'year') {
                    const startYear = Math.floor(year / 10) * 10;
                    return `${startYear}${tYear} - ${startYear + 9}${tYear}`;
                }
                return `${year}${tYear}`;
            },
            monthLabel () {
                const month = this.month + 1;
                return t(`hd.datepicker.month${month}`);
            }
        },
        watch: {
            selectionMode(newVal) {
                if (newVal === 'month') {
                    if (this.currentView !== 'year' || this.currentView !== 'month') {
                        this.currentView = 'month';
                    }
                } else if (newVal === 'week') {
                    this.week = getWeekNumber(this.date);
                }
            },
            value (newVal) {
                if (!newVal) return;
                newVal = new Date(newVal);
                if (!isNaN(newVal)) {
                    this.date = newVal;
                    this.year = newVal.getFullYear();
                    this.month = newVal.getMonth();
                }
                if (this.showTime) this.$refs.timePicker.value = newVal;
            },
            date (val) {
                if (this.selectionMode === 'week') this.week = getWeekNumber(val);
                if (this.showTime) this.$refs.timePicker.date = val;
            },
            format (val) {
                if (this.showTime) this.$refs.timePicker.format = val;
            },
            currentView (val) {
                if (val === 'time') this.$refs.timePicker.updateScroll();
            }
        },
        methods: {
            resetDate () {
                this.date = new Date(this.date);
            },
            handleClear () {
                this.date = new Date();
                if (this.selectionMode === 'week') {
                    this.maxDate=''
                    this.minDate=''
                    this.year =  this.date.getFullYear();
                    this.month =  this.date.getMonth();
                }
                this.$emit('on-pick', '');
                if (this.showTime) this.$refs.timePicker.handleClear();
            },
            resetView (reset = false) {
                if (this.currentView !== 'time' || reset) {
                    if (this.selectionMode === 'month') {
                        this.currentView = 'month';
                    } else if (this.selectionMode === 'year') {
                        this.currentView = 'year';
                    } else {
                        this.currentView = 'date';
                    }
                }
                if (this.selectionMode !== 'week') {
                    this.year = this.date.getFullYear();
                    this.month = this.date.getMonth();
                }else{
                    if(!this.maxDate){
                        this.year =  this.date.getFullYear();
                        this.month =  this.date.getMonth();
                    }else{
                        this.year = this.maxDate.getFullYear();
                        this.month = this.maxDate.getMonth();
                    }
                }
                if (reset) this.isTime = false;
            },
            prevYear () {
                if (this.currentView === 'year') {
                    this.$refs.yearTable.prevTenYear();
                } else {
                    this.year--;
                    this.date.setFullYear(this.year);
                    this.resetDate();
                }
            },
            nextYear () {
                if (this.currentView === 'year') {
                    this.$refs.yearTable.nextTenYear();
                } else {
                    this.year++;
                    this.date.setFullYear(this.year);
                    this.resetDate();
                }
            },
            prevMonth () {
                this.month--;
                if (this.month < 0) {
                    this.month = 11;
                    this.year--;
                }
            },
            nextMonth () {
                this.month++;
                if (this.month > 11) {
                    this.month = 0;
                    this.year++;
                }
            },
            showYearPicker () {
                this.currentView = 'year';
            },
            showMonthPicker () {
                this.currentView = 'month';
            },
            handleToggleTime () {
                if (this.currentView === 'date') {
                    this.currentView = 'time';
                    this.isTime = true;
                } else if (this.currentView === 'time') {
                    this.currentView = 'date';
                    this.isTime = false;
                }
            },
            handleYearPick(year, close = true) {
                this.year = year;
                if (!close) return;

                this.date.setFullYear(year);
                if (this.selectionMode === 'year') {
                    this.$emit('on-pick', new Date(year, 0, 1));
                } else {
                    this.currentView = 'month';
                }

                this.resetDate();
            },
            handleMonthPick (month) {
                this.month = month;
                const selectionMode = this.selectionMode;
                if (selectionMode !== 'month') {
                    this.date.setMonth(month);
                    this.currentView = 'date';
                    this.resetDate();
                } else {
                    this.date.setMonth(month);
                    this.year && this.date.setFullYear(this.year);
                    this.resetDate();
                    const value = new Date(this.date.getFullYear(), month, 1);
                    this.$emit('on-pick', value);
                }
            },
            handleDatePick (value) {
                if (this.selectionMode === 'day') {
                    this.$emit('on-pick', new Date(value.getTime()));
                    this.date.setFullYear(value.getFullYear());
                    this.date.setMonth(value.getMonth());
                    this.date.setDate(value.getDate());
                }else  if(this.selectionMode === 'week'){
                    this.minDate=value.minDate
                    this.maxDate=value.maxDate
                    this.$emit('on-pick', [this.minDate, this.maxDate], false);
                }
                this.resetDate();
            },
            handleTimePick (date) {
                this.handleDatePick(date);
            }
        },
        mounted () {
            if (this.selectionMode === 'month') {
                this.currentView = 'month';
            }

            if (this.date && !this.year) {
                this.year = this.date.getFullYear();
                this.month = this.date.getMonth();
            }
            if (this.showTime) {
                this.$refs.timePicker.date = this.date;
                this.$refs.timePicker.value = this.value;
                this.$refs.timePicker.format = this.format;
                this.$refs.timePicker.showDate = true;
            }
        }
    };
</script>
<style>
  .daterange {
    background: #fff;
    top: 100px;
    left: 20px;
    padding: 4px;
    font-size: 12px;
  }
  .datepicker:after {
    content: '';
    display: inline-block;
    border-left: 0;
    border-right: 0;
    border-bottom: 0;
  }
  .datepicker:before {
    content: '';
    display: inline-block;
    border-left: 0;
    border-right: 0;
    border-bottom: 0;
  }
</style>
