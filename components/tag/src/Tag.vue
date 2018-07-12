<template>
   <span :style="style"
         :class="classes" :disabled="disabled">
      <slot></slot>
      <hd-icon type="glyphicon glyphicon-remove"
               @click="handleClose" v-if="closable"></hd-icon>
    </span>
</template>
<script>
    const prefixCls = 'bg';
    const tag = 'tag';
    const bor = 'border:';
    const solid = 'solid';
    import {isOneOf} from 'src/utils/validator'
    import hdIcon from 'components/icon'
    export default {
        name: 'hd-tag',
        components: {
            hdIcon
        },
        props: {
            type: String,
            disabled: {
                type: Boolean,
                default: false
            },
            color: {
                validator(value){
                    return isOneOf(value, ['white', 'blue', 'sky', 'azure', 'palegreen', 'yellow', 'darkorange', 'magenta', 'purple', 'red', 'maroon'])
                },
                default: 'white'
            },
            'bg-color': {
                validator(value){
                    return isOneOf(value, ['themeprimary', 'themesecondary', 'themethirdcolor', 'themefourthcolor', 'themefifthcolor', 'white', 'snow', 'whitesmoke', 'seashell', 'ivory', 'platinum', 'lightgray', 'gray', 'darkgray', 'silver', 'sonic-silver', 'storm-cloud', 'lightcarbon', 'carbon', 'slate-gray', 'darkcarbon', 'blue', 'info', 'sky', 'primary', 'azure', 'blueberry', 'palegreen', 'success', 'green', 'lightyellow', 'yellow', 'warning', 'gold', 'orange', 'lightred', 'darkorange', 'red', 'pink', 'darkpink', 'danger', 'magenta', 'purple', 'maroon'])
                }
            },
            'border-color': {
                validator(value){
                    return isOneOf(value, ['blue', 'sky', 'azure', 'palegreen', 'yellow', 'darkorange', 'magenta', 'purple', 'red', 'maroon'])
                },
                default: 'blue'
            },
            'border-heavy': Boolean,
            closable: Boolean,
            border: Boolean
        },
        computed: {
            classes () {
                return [
                    `${tag}`,
                    {
                        [`${this.type}`]: this.type,
                        [`${this.color}`]: this.color,
                        [`${prefixCls}-${this.bgColor} `]: this.bgColor
                    }
                ];
                // return `${tag} ${this.type} ${this.color} ${prefixCls}-${this.bgColor}`;
            },
            style(){
                if (this.border) {
                    if (this.borderHeavy) {
                        return `${bor} 2px ${solid} ${this.borderColor}`;
                    } else {
                        return `${bor} 1px ${solid} ${this.borderColor}`;
                    }
                } else {
                    return " "
                }
            }
        },
        methods: {
            handleClose(event) {
                if (this.disabled === true) {
                    return
                } else {
                    this.$emit('close', event);
                }
            },
            mouseover(){
                this.bgColor = 'red'
            }
        }
    };
</script>
<style>
    .tag {
        padding: 2px 2px 2px 2px;
        position: relative;
        margin: 3px 0 3px 2px;
        display: inline-block;
        -webkit-border-radius: 2px;
        -webkit-background-clip: padding-box;
        -moz-border-radius: 2px;
        -moz-background-clip: padding;
        border-radius: 2px;
        background-clip: padding-box;
        cursor: pointer;
    }

    /*政治思想参加人员等在查看时，看不清楚，重新调整样式 #714*/
    /*.tag[disabled] {*/
        /*cursor: not-allowed;*/
        /*!*background-color: #e5e5e5 !important;*!  !* edit by cjp Teambuild-各功能模块参与人员中添加外来人员问题-#642*!*/
        /*color: #bbbbbb !important;!* edit by cjp 统一管理颜色*!*/
        /*border-color: #e5e5e5 !important;*/
        /*-webkit-box-shadow: none !important;*/
        /*-moz-box-shadow: none !important;*/
        /*box-shadow: none !important;*/
    /*}*/

/*    .bootstrap-tagsinput .tag {
        padding: 4px 8px 4px 8px;
    }*/
</style>
