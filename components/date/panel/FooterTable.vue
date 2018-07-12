<template>
    <div :class="[prefixCls + '-confirm']">
        <span :class="timeClasses" v-if="showTime" @click="handleToggleTime">
         <template v-if="isTime">{{ toggleDate }}</template>
            <template v-else>{{ toggleTime }}</template>
        </span>
        <hd-button size="xs"  @click="handleClear">{{ clear }}</hd-button>
        <hd-button size="xs" type="primary" @click="handleSuccess">{{ ok }}</hd-button>
    </div>
</template>
<script>
    import {t} from  'src/utils/locale';

    const prefixCls = 'hd-picker';
    import hdButton from 'components/button/src/Button.vue';
    export default {
        components: { hdButton },
        props: {
            showTime: false,
            isTime: false,
            timeDisabled: false
        },
        data () {
            return {
                prefixCls: prefixCls
            };
        },
        computed: {
            timeClasses () {
                return {
                    [`${prefixCls}-confirm-time-disabled`]: this.timeDisabled
                };
            },
            clear () {
                return t('hd.datepicker.clear')
            },
            ok () {
                return t('hd.datepicker.ok')
            },
            toggleDate () {
                return t('hd.datepicker.toggleDate')
            },
            toggleTime () {
                return t('hd.datepicker.toggleTime')
            }
        },
        methods: {
            handleClear () {
                this.$emit('on-pick-clear');
            },
            handleSuccess () {
                this.$emit('on-pick-success');
            },
            handleToggleTime () {
                if (this.timeDisabled) return;
                this.$emit('on-pick-toggle-time');
            }
        }
    };
</script>
