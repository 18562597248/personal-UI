<template>
  <div class="panel-group accordion">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name:'hd-collapse',
    componentName:'hd-collapse',
    props: {
      accordion: {
        type: Boolean,
        default: false
      },
      value: {
        type: [Array, String, Number],
        default() {
          return [];
        }
      }
    },
    data() {
      return {
        activeNames: [].concat(this.value)
      };
    },
    watch: {
      value(value) {
        this.activeNames = [].concat(value);
      }
    },
  /*  mounted:function(){
      var num=0;
      if(this.accordion){
        for(var i= this.$children.length-1;i>=0;i--){
          if(this.$children[i].expanded){
            num++
          }
          if(this.$children[i].expanded && num>1){
            this.$children[i].open=false
          }
        }
      }
    },*/
    methods: {
        /**
         * 子组件的打开和闭合方法
         *{object} child 子组件实例
         *判断是否是手风琴模式
         * 是则对每一项与参数对比，只有点击的那项才对open设置为true，其他为false
         * */
        openChild (child) {
            if (this.accordion) {
                this.$children.forEach(item => {
                    if (child !== item) {
                    item.open = false
                }
            })
            }
        },
        /**
         * 根据activeNames的数值变化触发change方法
         *{array}||{number}||{string} activeNames 来自handleItemClick方法的参数
         * 合并成数组
         * 判断手风琴模式，是则取activeNames[0]；否则activeNames
         * 发布input 和 change方法
         * */
        setActiveNames(activeNames) {
            activeNames = [].concat(activeNames);
            let value = this.accordion ? activeNames[0] : activeNames;
            this.activeNames = activeNames;
            this.$emit('input', value);
            this.$emit('change', value);
        },
        /**
         *每项点击方法
         *{object} item 实例
         * 判断是否手风琴模式
         * 是：执行setActiveNames方法，参数：判断activeNames[0]的值和item.name的值，满足条件设置为空，否则取值item.name
         * 否：判断item.name在activeNames里首次出现的位置，不存在则为-1
         * 不为-1，则删除该位置的值
         * 否则把item.name添加进activeNames
         * 执行setActiveNames方法
         * */
        handleItemClick(item) {
            if (this.accordion) {
                this.setActiveNames(
                    (this.activeNames[0] || this.activeNames[0] === 0) &&
                    this.activeNames[0] === item.name
                        ? '' : item.name
                );
            } else {
                let activeNames = this.activeNames.slice(0);
                let index = activeNames.indexOf(item.name);
                if (index > -1) {
                    activeNames.splice(index, 1);
                } else {
                    activeNames.push(item.name);
                }
                this.setActiveNames(activeNames);
            }
        }
    },
    created () {
      this._isAccordion = true;
      this.$on('item-click', this.handleItemClick);
    }
  }
</script>
