<template>
    <div :class="classes">
        <div :class="[prefixCls + '-body']">
            <div :class="[prefixCls + '-content', prefixCls + '-content-left']" style="float:left">
                <div class="calendar-table" style="text-align: -webkit-center;">
                <table class="table-condensed">
                  <thead>
                  <tr>
                    <th v-if="showDate">{{ visibleDate }}</th>
                    <th v-else>{{ startTime }}</th>
                  </tr>
                  </thead>
                </table>
              </div>
                <time-spinner
                    ref="timeSpinner"
                    :show-seconds="showSeconds"
                    :hours="hours"
                    :minutes="minutes"
                    :seconds="seconds"
                    :disabled-hours="disabledHours"
                    :disabled-minutes="disabledMinutes"
                    :disabled-seconds="disabledSeconds"
                    :hide-disabled-options="hideDisabledOptions"
                    @change="handleStartChange"
                    @on-pick-click="handlePickClick"></time-spinner>
            </div>
            <div :class="[prefixCls + '-content', prefixCls + '-content-right']" style="float:left">
              <div class="calendar-table">
                <table class="table-condensed">
                  <thead>
                  <tr>
                    <th v-if="showDate">{{ visibleDateEnd }}</th>
                    <th v-else>{{ endTime }}</th>
                  </tr>
                  </thead>
                </table>
              </div>
                <time-spinner
                    ref="timeSpinnerEnd"
                    :show-seconds="showSeconds"
                    :hours="hoursEnd"
                    :minutes="minutesEnd"
                    :seconds="secondsEnd"
                    :disabled-hours="disabledHours"
                    :disabled-minutes="disabledMinutes"
                    :disabled-seconds="disabledSeconds"
                    :hide-disabled-options="hideDisabledOptions"
                    @change="handleEndChange"
                    @on-pick-click="handlePickClick"></time-spinner>
            </div>
            <Confirm
                v-if="confirm"
                @on-pick-clear="handlePickClear"
                @on-pick-success="handlePickSuccess"></Confirm>
        </div>
    </div>
</template>
<script>
    import TimeSpinner from '../panel/TimeSpinner.vue';
    import FooterTable from '../panel/FooterTable.vue';

    import Mixin from '../utils/mixin';
    import {t} from 'src/utils/locale';

    import { initTimeDate, toDate, formatDate } from '../utils/util';

    const prefixCls = 'hd-picker-panel';
    const timePrefixCls = 'hd-time-picker';

    export default {
        name: 'TimePicker',
        mixins: [ Mixin ],
        components: { TimeSpinner, FooterTable },
        data () {
            return {
                prefixCls: prefixCls,
                timePrefixCls: timePrefixCls,
                format: 'HH:mm:ss',
                showDate: false,
                date: initTimeDate(),
                dateEnd: initTimeDate(),
                value: '',
                hours: '',
                minutes: '',
                seconds: '',
                hoursEnd: '',
                minutesEnd: '',
                secondsEnd: '',
                disabledHours: [],
                disabledMinutes: [],
                disabledSeconds: [],
                hideDisabledOptions: false,
                confirm: false
            };
        },
        computed: {
            classes () {
                return [
                    `${prefixCls}-body-wrapper`,
                    `${timePrefixCls}-with-range`,
                    {
                        [`${timePrefixCls}-with-seconds`]: this.showSeconds
                    }
                ];
            },
            startTime () {
                return t('hd.datepicker.startTime')
            },
            endTime () {
                return t('hd.datepicker.endTime')
            },
            showSeconds () {
                return (this.format || '').indexOf('ss') !== -1;
            },
            visibleDate () {
                const date = this.date || initTimeDate();
                const tYear = t('hd.datepicker.year');
                const month = date.getMonth() + 1;
                const tMonth = t(`hd.datepicker.month${month}`);
                return `${date.getFullYear()}${tYear} ${tMonth}`;
            },
            visibleDateEnd () {
                const date = this.dateEnd || initTimeDate();
                const tYear = t('hd.datepicker.year');
                const month = date.getMonth() + 1;
                const tMonth = t(`hd.datepicker.month${month}`);
                return `${date.getFullYear()}${tYear} ${tMonth}`;
            }
        },
        watch: {
            value (newVal) {
                if (!newVal) return;
                if (Array.isArray(newVal)) {
                    const valStart = newVal[0] ? toDate(newVal[0]) : false;
                    const valEnd = newVal[1] ? toDate(newVal[1]) : false;

                    if (valStart && valEnd) {
                        this.handleChange(
                            {
                                hours: valStart.getHours(),
                                minutes: valStart.getMinutes(),
                                seconds: valStart.getSeconds()
                            },
                            {
                                hours: valEnd.getHours(),
                                minutes: valEnd.getMinutes(),
                                seconds: valEnd.getSeconds()
                            },
                            false
                        );
                    }
                }
            }
        },
        methods: {
            handleClear() {
                this.date = initTimeDate();
                this.dateEnd = initTimeDate();
                this.hours = '';
                this.minutes = '';
                this.seconds = '';
                this.hoursEnd = '';
                this.minutesEnd = '';
                this.secondsEnd = '';
            },
            handleChange (date, dateEnd, emit = true) {
                const oldDateEnd = new Date(this.dateEnd);

                if (date.hours !== undefined) {
                    this.date.setHours(date.hours);
                    this.hours = this.date.getHours();
                }
                if (date.minutes !== undefined) {
                    this.date.setMinutes(date.minutes);
                    this.minutes = this.date.getMinutes();
                }
                if (date.seconds !== undefined) {
                    this.date.setSeconds(date.seconds);
                    this.seconds = this.date.getSeconds();
                }
                if (dateEnd.hours !== undefined) {
                    this.dateEnd.setHours(dateEnd.hours);
                    this.hoursEnd = this.dateEnd.getHours();
                }
                if (dateEnd.minutes !== undefined) {
                    this.dateEnd.setMinutes(dateEnd.minutes);
                    this.minutesEnd = this.dateEnd.getMinutes();
                }
                if (dateEnd.seconds !== undefined) {
                    this.dateEnd.setSeconds(dateEnd.seconds);
                    this.secondsEnd = this.dateEnd.getSeconds();
                }
                // judge endTime > startTime?
                if (this.dateEnd < this.date) {
                    this.$nextTick(() => {
                        this.dateEnd = new Date(this.date);
                        this.hoursEnd = this.dateEnd.getHours();
                        this.minutesEnd = this.dateEnd.getMinutes();
                        this.secondsEnd = this.dateEnd.getSeconds();

                        const format = 'yyyy-MM-dd HH:mm:ss';
                        if (formatDate(oldDateEnd, format) !== formatDate(this.dateEnd, format)) {
                            if (emit) this.$emit('on-pick', [this.date, this.dateEnd], true);
                        }
                    });
                } else {
                    if (emit) this.$emit('on-pick', [this.date, this.dateEnd], true);
                }
            },
            handleStartChange (date) {
                this.handleChange(date, {});
            },
            handleEndChange (date) {
                this.handleChange({}, date);
            },
            updateScroll () {
                this.$refs.timeSpinner.updateScroll();
                this.$refs.timeSpinnerEnd.updateScroll();
            }
        },
        mounted () {
            if (this.$parent && this.$parent.$options.name === 'DatePicker') this.showDate = true;
        }
    };
</script>
