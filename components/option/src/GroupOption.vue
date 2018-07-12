<template>
    <ul class="select-group">
        <li class="select-group-title" v-show="haslabel">{{ label }}</li>
        <li>
            <ul class="select-group-child">
                <slot></slot>
            </ul>
        </li>
    </ul>
</template>
<script>
    export default {
        name:'hd-group-option',
        data(){
            return {
                haslabel:true
            }
        },
        props:{
            group:Object,
            index:Number,
            label:String
        }
    }
</script>
<style>
    .select-group {
        list-style: none;
        margin: 0;
        padding: 0;
    }
    .select-group-title {
        padding-left: 10px;
        font-size: 12px;
        color: #999;
        height: 30px;
        line-height: 30px;
    }
    .select-group-child {
        margin: 0;
        padding: 0;
    }
</style>