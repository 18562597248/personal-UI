export default {
    mounted(){
        for(var i=0;i<this.aimElenment.length;i++){
            var self = this;
            this.$refs[this.aimElenment[i]].addEventListener('scroll',function(ev){
                let num = 0;
                for(var j=0;j<self.aimElenment.length;j++){
                    if((ev.srcElement === self.$refs[self.aimElenment[j]])){
                        num = j;
                    }
                }
                self.originTableScroll(ev,num);
            },false);
        }
    },

    methods: {
        originTableScroll(event,num){
            let aimelement_ = this.$refs[this.aimElenment[num]];
            if(aimelement_.scrollTop >= (aimelement_.scrollHeight - aimelement_.offsetHeight)){
                this.$emit((this.aimElenment[num]+'-bottom'),event);
            }
            if(aimelement_.scrollTop <=0){
                this.$emit((this.aimElenment[num]+'-top'),event);
            }
        }
    }
};