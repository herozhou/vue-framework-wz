<template>
    <button :type="htmlType"  :class="classes">
     <span v-if="showSlot" ref="slot"><slot></slot></span>
    </button>
</template>
<script>
        import { oneOf } from '../../utils/validate';
    const hoverClass='wz-coolhover';

    export default {
        name: 'Button',
        props: {
           
            type:{
                validator(value){
                    return oneOf(value,['swipe','close','zoningin','corners','slice','alternate','smoosh','overlap','overlap','collision']);
                }
            },
             htmlType: {
                default: 'button',
                validator (value) {
                        return oneOf(value,['button']);
                }
            },
            shap:{
                validator (value){
                        return oneOf(value,['out','in','vertical','horizontal']);
                }
            },
            icon:String,


        },
        data () {
            return {
                // value:this.type,
                showSlot:true,
                // showIcon:this.icon,
            };
        },
        computed: {
            classes () {
                    // let obj=new Object();
                    // obj[this.type]='btn btn-';
                    // return obj[this.type]+this.color+" btn-"+this.size;
                    return [
                        `${hoverClass}`,
                        {
                            [`${hoverClass}-${this.type}-${this.shap}`]:!!this.type&&!!this.shap&&(this.type==='swipe'||this.type==='overlap'),
                            [`${hoverClass}-${this.type}`]:!!this.type&&!!!this.shap,
                            

                        }
                    ]
            },
            iconClasses(){
                return 'fa fa-'+this.icon;
            },
        },
         mounted () {
            this.showSlot = this.$slots.default !== undefined;
        }
    };
</script>
