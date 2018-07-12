<template>
    <div
            v-show="isVisible"
            class="context-menu"
            :style="style"
            @blur="close"
            @click="close"
            @contextmenu.capture.prevent>
        <slot></slot>
    </div>
</template>
<script>
    import Vue from 'vue'
    export default {
        name: 'hd-context-menu',
        data () {
            return {
                x: null,
                y: null
            }
        },
        computed: {
            style () {
                return this.isVisible ? {
                    top: this.y + 'px',
                    left: this.x + 'px'
                } : {}
            },
            isVisible () {
                return this.x !== null && this.y !== null
            }
        },
        methods: {
            findPositionStyle:function findPositionStyle(val){
                var ele=val.target
                while (ele) {
                    if(window.getComputedStyle(ele, null).getPropertyValue("position")=='relative' || window.getComputedStyle(ele, null).getPropertyValue("position")=='fixed'){
                        return ele
                    }
                    ele=ele.parentElement
                }
            },
            findParent:function findParent(val){
                var parent = val;
                while (parent) {
                    if(parent.$options._componentTag === 'hd-modal') {
                        return true
                    }
                    parent = parent.$parent;
                }
            },
            open: function open(evt) {
                if (this.findParent(this)) {
                    this.x = evt.clientX-this.findPositionStyle(evt).getBoundingClientRect().left
                    this.y = evt.clientY - this.findPositionStyle(evt).getBoundingClientRect().top+100;
                } else {
                    this.x = evt.clientX;
                    this.y = evt.clientY - 130;
                }
                Vue.nextTick(() => this.$el.focus())
            },
            close () {
                this.x = null
                this.y = null
            }
        }
    }
</script>
<style>
    .context-menu {
        position: absolute;
        z-index: 999;
    }
</style>