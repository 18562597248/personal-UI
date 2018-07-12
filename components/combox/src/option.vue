<template>
    <li :class="classes" @click="select" @mouseout.stop="blur" v-show="!hidden" class="hd-multisearch-leftitem-li"><slot>{{ showLabel }}</slot></li>
</template>
<script>
   import Emitter from 'src/utils/emitter';

    const prefixCls = 'hd-select-item';

    export default {
        name: 'iOption',
        componentName: 'select-item',
        mixins: [ Emitter ],
        props: {
            value: {
                type: [String, Number],
                required: true
            },
            label: {
                type: [String, Number]
            },
            disabled: {
                type: Boolean,
                default: false
            }
        },
        data () {
            return {
                selected: false,
                index: 0,    // for up and down to focus
                isFocus: false,
                hidden: false,    // for search
                searchLabel: ''    // the value is slot,only for search
            };
        },
        computed: {
            classes () {
                return [
                    `${prefixCls}`,
                    {
                        [`${prefixCls}-disabled`]: this.disabled,
                        [`${prefixCls}-selected`]: this.selected,
                        [`${prefixCls}-focus`]: this.isFocus
                    }
                ];
            },
            showLabel () {
                return (this.label) ? this.label : this.value;
            }
        },
        methods: {
            select () {
                if (this.disabled) {
                    return false;
                }
                this.dispatch('iSelect', 'on-select-selected', this.value);
            },
            blur () {
                this.isFocus = false;
            },
            queryChange (val) {
                const parsedQuery = val.replace(/(\^|\(|\)|\[|\]|\$|\*|\+|\.|\?|\\|\{|\}|\|)/g, '\\$1');
                this.hidden = !new RegExp(parsedQuery, 'i').test(this.searchLabel);
            },
            updateSearchLabel () {
                this.searchLabel = this.$el.innerHTML;
            }
        },
        mounted () {
            this.updateSearchLabel();
            this.dispatch('iSelect', 'append');
            this.$on('on-select-close', () => {
                this.isFocus = false;
            });
            this.$on('on-query-change', (val) => {
                this.queryChange(val);
            });
        },
        beforeDestroy () {
            this.dispatch('iSelect', 'remove');
        }
    };
</script>
<style>
    .hd-select {
        width: 100%;
        box-sizing: border-box;
        vertical-align: middle;
        color: #495060;
        font-size: 14px;
        line-height: normal
    }

    .hd-select-selection {
        display: block;
        box-sizing: border-box;
        outline: 0;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        cursor: pointer;
        position: relative;
        background-color: #fff;
        border: 1px solid #dddee1;
        transition: all .2s ease-in-out
    }

    .hd-select-selection .hd-select-arrow:first-of-type {
        display: none;
        cursor: pointer
    }

    .hd-select-selection:hover .hd-select-arrow:first-of-type {
        display: inline-block
    }

    .hd-select-show-clear .hd-select-selection:hover .hd-select-arrow:nth-of-type(2) {
        display: none
    }

    .hd-select-arrow {
        position: absolute;
        top: 50%;
        right: 8px;
        line-height: 1;
        margin-top: -7px;
        font-size: 14px;
        color: #80848f;
        transition: all .2s ease-in-out
    }


    .hd-select-visible .hd-select-arrow:nth-of-type(2) {
        transform: rotate(180deg)
    }

    .hd-select-disabled .hd-select-selection {
        background-color: #f3f3f3;
        opacity: 1;
        cursor: not-allowed;
        color: #ccc
    }

    .hd-select-disabled .hd-select-selection:hover {
        border-color: #e4e5e7
    }

    .hd-select-disabled .hd-select-selection .hd-select-arrow:first-of-type {
        display: none
    }

    .hd-select-disabled .hd-select-selection:hover {
        border-color: #dddee1;
        box-shadow: none
    }

    .hd-select-disabled .hd-select-selection:hover .hd-select-arrow:nth-of-type(2) {
        display: inline-block
    }

    .hd-select-single .hd-select-selection {
        height: 32px;
        position: relative
    }

    .hd-select-single .hd-select-selection .hd-select-placeholder {
        color: #bbbec4
    }

    .hd-select-single .hd-select-selection .hd-select-placeholder, .hd-select-single .hd-select-selection .hd-select-selected-value {
        display: block;
        height: 30px;
        line-height: 30px;
        font-size: 12px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        padding-left: 8px;
        padding-right: 24px
    }

    .hd-select-large.hd-select-single .hd-select-selection {
        height: 36px
    }

    .hd-select-large.hd-select-single .hd-select-selection .hd-select-placeholder, .hd-select-large.hd-select-single .hd-select-selection .hd-select-selected-value {
        height: 34px;
        line-height: 34px;
        font-size: 14px
    }

    .hd-select-small.hd-select-single .hd-select-selection {
        height: 24px;
        border-radius: 3px
    }

    .hd-select-small.hd-select-single .hd-select-selection .hd-select-placeholder, .hd-select-small.hd-select-single .hd-select-selection .hd-select-selected-value {
        height: 22px;
        line-height: 22px
    }

    .hd-select-multiple .hd-select-selection {
        padding: 0 24px 0 4px;
        min-height: 32px
    }

    .hd-select-multiple .hd-select-selection .hd-select-placeholder {
        display: block;
        height: 30px;
        line-height: 30px;
        color: #bbbec4;
        font-size: 12px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        padding-left: 4px;
        padding-right: 22px
    }

    .hd-select-input {
        display: inline-block;
        /*height: 32px;*/
        /*line-height: 32px;*/
        padding: 0 24px 0 8px;
        font-size: 12px;
        outline: 0;
        border: none;
        box-sizing: border-box;
        color: #495060;
        background-color: transparent;
        position: relative;
        cursor: pointer
    }

    .hd-select-input::-moz-placeholder {
        color: #bbbec4;
        opacity: 1
    }

    .hd-select-input:-ms-input-placeholder {
        color: #bbbec4
    }

    .hd-select-input::-webkit-input-placeholder {
        color: #bbbec4
    }

    .hd-select-single .hd-select-input {
        width: 100%
    }

    .hd-select-large .hd-select-input {
        font-size: 14px;
        height: 36px
    }

    .hd-select-small .hd-select-input {
        height: 24px
    }

    .hd-select-multiple .hd-select-input {
        height: 29px;
        line-height: 32px;
        padding: 0 0 0 4px
    }

    .hd-select-not-found {
        text-align: center;
        color: #bbbec4
    }

    .hd-select-not-found li:not([class^=hd-]) {
        list-style-type: none;
        margin-bottom: 0
    }

    .hd-select-loading {
        text-align: center;
        color: #bbbec4
    }

    .hd-select-multiple .hd-tag {
        margin: 3px 4px 2px 0
    }

    .hd-select-item {
        margin: 0;
        line-height: normal;
        padding: 7px 16px;
        clear: both;
        color: #495060;
        font-size: 12px !important;
        white-space: nowrap;
        list-style: none;
        cursor: pointer;
        transition: background .2s ease-in-out
    }

    .hd-select-item-focus, .hd-select-item:hover {
        background: #f3f3f3
    }

    .hd-select-item-disabled, .hd-select-item-disabled:hover {
        color: #bbbec4;
        cursor: not-allowed
    }

    .hd-select-item-disabled:hover {
        background-color: #fff
    }

    .hd-select-item-selected, .hd-select-item-selected:hover {
        color: #fff;
        background: rgba(45, 140, 240, .9)
    }

    .hd-select-item-selected.hd-select-item-focus {
        background: rgba(40, 123, 211, .91)
    }

    .hd-select-item-divided {
        margin-top: 5px;
        border-top: 1px solid #e9eaec
    }

    .hd-select-item-divided:before {
        content: "";
        height: 5px;
        display: block;
        margin: 0 -16px;
        background-color: #fff;
        position: relative;
        top: -7px
    }

    .hd-select-large .hd-select-item {
        padding: 7px 16px 8px;
        font-size: 14px !important
    }

    .hd-select-multiple .hd-select-item-selected {
        color: rgba(45, 140, 240, .9);
        background: #fff
    }

    .hd-select-multiple .hd-select-item-focus, .hd-select-multiple .hd-select-item-selected:hover {
        background: #f3f3f3
    }

    .hd-select-multiple .hd-select-item-selected.hd-select-multiple .hd-select-item-focus {
        color: rgba(40, 123, 211, .91);
        background: #fff
    }

    .hd-select-multiple .hd-select-item-selected:after {
        display: inline-block;
        font-family: FontAwesome;
        speak: none;
        font-style: normal;
        font-weight: 400;
        font-variant: normal;
        text-transform: none;
        text-rendering: auto;
        line-height: 1;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        float: right;
        content: "\F00C";
        color: rgba(45, 140, 240, .9)
    }

    .hd-select-group {
        list-style: none;
        margin: 0;
        padding: 0
    }

    .hd-select-group-title {
        padding-left: 8px;
        font-size: 12px;
        color: #999;
        height: 30px;
        line-height: 30px
    }

    .hd-form-item-error .hd-select-selection {
        border: 1px solid #ed3f14
    }

    .hd-form-item-error .hd-select-arrow {
        color: #ed3f14
    }

    .hd-form-item-error .hd-select-visible .hd-select-selection {
        border-color: #ed3f14;
        outline: 0;
        box-shadow: 0 0 0 2px rgba(237, 63, 20, .2)
    }

    .hd-select-dropdown {
        width: inherit;
        max-height: 200px;
        overflow: auto;
        margin: 5px 0;
        padding: 5px 0;
        background-color: #fff;
        box-sizing: border-box;
        border-radius: 4px;
        box-shadow: 0 1px 6px rgba(0, 0, 0, .2);
        position: absolute;
        z-index: 900
    }
    .hd-select-dropdown-list{
        padding-left: 0px;
    }

    .hd-tag {
        display: inline-block;
        height: 22px;
        line-height: 22px;
        margin: 2px 4px 2px 0;
        padding: 0 8px;
        border: 1px solid #e9eaec;
        border-radius: 3px;
        background: #2dc3e8;
        color: #ffffff;
        font-size: 12px;
        vertical-align: middle;
        opacity: 1;
        overflow: hidden;
        cursor: pointer
    }
    .hd-select-multiple .hd-tag {
        margin: 3px 4px 2px 0
    }

    .hd-tag-text a:first-child:last-child {
        display: inline-block;
        margin: 0 -8px;
        padding: 0 8px
    }
</style>