
<template>
    <button :type="htmlType"  :class="classes">
     <span v-if="showSlot" ref="slot"><slot></slot></span>
    </button>
</template>
<script>
        import { oneOf } from '../../utils/validate';
    const hoverClass='wz-hover';

    export default {
        name: 'Button',
        props: {
           
            type:{
                validator(value){
                    return oneOf(value,['height','width','lean','arrow','change']);
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
                        return oneOf(value,['full','half','left','top','right','left',]);
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
                            [`${hoverClass}-${this.type}-${this.shap}`]:!!this.type&&!!this.shap&&this.type!=='lean',
                            [`${hoverClass}-${this.type}`]:!!this.type&&(this.type==='lean'||this.type==='arrow'||this.type==='change'),
                            [`${hoverClass}-${this.type}`+" "+`${hoverClass}-${this.type}-${this.shap}`] : !!this.type&&oneOf(this.type,['arrow','change']),
                            ['ivu-icon ivu-icon-'+`${this.icon}`]:!!this.icon,

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

