<template>
    <div :class="[prefixCls + '-body-wrapper']">
        <div :class="[prefixCls + '-body']">
          <div class="calendar-table" v-if="showDate">
            <table class="table-condensed">
              <thead>
              <tr>
                <th>{{ visibleDate }}</th>
              </tr>
              </thead>
            </table>
          </div>
            <div :class="[prefixCls + '-content']">
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
                    @change="handleChange"
                    @on-pick-click="handlePickClick"></time-spinner>
            </div>
            <FooterTable
                v-if="confirm"
                @on-pick-clear="handlePickClear"
                @on-pick-success="handlePickSuccess"></FooterTable>
        </div>
    </div>
</template>
<script>
    import TimeSpinner from '../panel/TimeSpinner.vue';
    import FooterTable from '../panel/FooterTable.vue';

    import Mixin from '../utils/mixin';
    import {t} from 'src/utils/locale';

    import { initTimeDate } from '../utils/util';

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
                date: initTimeDate(),
                value: '',
                showDate: false,
                format: 'HH:mm:ss',
                hours: '',
                minutes: '',
                seconds: '',
                disabledHours: [],
                disabledMinutes: [],
                disabledSeconds: [],
                hideDisabledOptions: false,
                confirm: false
            };
        },
        computed: {
            showSeconds () {
                return (this.format || '').indexOf('ss') !== -1;
            },
            visibleDate () {
                const date = this.date;
                const month = date.getMonth() + 1;
                const tYear = t('hd.datepicker.year');
                const tMonth = t(`hd.datepicker.month${month}`);
                return `${date.getFullYear()}${tYear} ${tMonth}`;
            }
        },
        watch: {
            value (newVal) {
                if (!newVal) return;
                newVal = new Date(newVal);
                if (!isNaN(newVal)) {
                    this.date = newVal;
                    this.handleChange({
                        hours: newVal.getHours(),
                        minutes: newVal.getMinutes(),
                        seconds: newVal.getSeconds()
                    }, false);
                }
            }
        },
        methods: {
            handleClear() {
                this.date = initTimeDate();
                this.hours = '';
                this.minutes = '';
                this.seconds = '';
            },
            handleChange (date, emit = true) {
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
                if (emit) this.$emit('on-pick', this.date, true);
            },
            updateScroll () {
                this.$refs.timeSpinner.updateScroll();
            }
        },
        mounted () {
            if (this.$parent && this.$parent.$options.name === 'DatePicker') this.showDate = true;
        }
    };
</script>
