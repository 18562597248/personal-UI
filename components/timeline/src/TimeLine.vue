<template>
    <ul :class="classes">
        <slot></slot>
    </ul>
</template>
<script>
    const prefixCls = 'hd-timeline';
    export default {
        name: 'hd-timeline',
        computed: {
            classes () {
                return [
                    `${prefixCls}`
                ];
            }
        }
    };
</script>
<style>
    .hd-timeline{
        list-style:none;
        margin:0;
        padding:0
    }
    .hd-timeline-item{
        margin:0!important;
        padding:0 0 12px 0;
        list-style:none;
        position:relative
    }
    .hd-timeline-item-tail{
        height:100%;
        border-left:1px solid #e3e8ee;
        position:absolute;
        left:6px;
        top:0
    }
    .hd-timeline-item-pending .hd-timeline-item-tail{
        display:none
    }
    .hd-timeline-item-head{
        width:13px;
        height:13px;
        border-radius:50%;
        border:1px solid transparent;
        position:absolute
    }
    .hd-timeline-item-head-custom{
        width:40px;
        height:auto;
        margin-top:6px;
        padding:3px 0;
        text-align:center;
        line-height:1;
        border:0;
        border-radius:0;
        font-size:14px;
        position:absolute;
        left:-13px;
        -ms-transform:translateY(-50%);
        transform:translateY(-50%)
    }
    .hd-timeline-item-content{
        padding:1px 1px 10px 24px;
        font-size:12px;
        position:relative;
        top:-3px
    }
    .hd-timeline-item:last-child .hd-timeline-item-tail{
        display:none
    }
    .hd-timeline.hd-timeline-pending .hd-timeline-item:nth-last-of-type(2) .hd-timeline-item-tail{
        border-left:1px dotted #e3e8ee
    }
    .hd-timeline.hd-timeline-pending .hd-timeline-item:nth-last-of-type(2) .hd-timeline-item-content{
        min-height:48px
    }
</style>