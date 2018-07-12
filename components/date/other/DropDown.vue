<template>
    <div class="hd-select-dropdown" :style="styles"><slot></slot></div>
</template>
<script>
    import { getStyle } from 'src/utils/assist';
    import Popper from 'popper.js';

    export default {
        name: 'Drop',
        props: {
            placement: {
                type: String,
                default: 'bottom-start'
            }
        },
        data () {
            return {
                popper: null,
                width: ''
            };
        },
        computed: {
            styles () {
                let style = {};
                if (this.width) style.width = `${this.width}px`;
                return style;
            }
        },
        methods: {
            update () {
              let _this=this
                if (this.popper) {
                  _this.$nextTick(() => {
                      _this.popper.update();
                    });
                } else {
                  _this.$nextTick(() => {
                      _this.popper = new Popper(_this.$parent.$refs.reference, _this.$el, {
                            gpuAcceleration: false,
                            placement: _this.placement,
                            boundariesPadding: 0,
                            forceAbsolute: true,
                            boundariesElement: 'body'
                        });
                  _this.popper.onCreate(popper => {
                          _this.resetTransformOrigin(popper);
                        });
                    });
                }
                if (this.$parent.$options.name === 'iSelect') {
                    this.width = parseInt(getStyle(this.$parent.$el, 'width'));
                }
            },
            destroy () {
              let _this=this
                if (this.popper) {
                    this.resetTransformOrigin(this.popper);
                    setTimeout(() => {
                      _this.popper.destroy();
                  _this.popper = null;
                    }, 300);
                }
            },
            resetTransformOrigin(popper) {
                let placementMap = {top: 'bottom', bottom: 'top'};
                let placement = popper._popper.getAttribute('x-placement').split('-')[0];
                let origin = placementMap[placement];
                popper._popper.style.transformOrigin = `center ${ origin }`;
            }
        },
        created () {
            this.$on('on-update-popper', this.update);
            this.$on('on-destroy-popper', this.destroy);
        },
        beforeDestroy () {
            if (this.popper) {
                this.popper.destroy();
            }
        }
    };
</script>
