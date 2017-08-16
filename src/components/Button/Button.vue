<!-- <template>
    <button :type="htmlType"  :class="classes" :disabled="disabled" @click="handleClick">
    <i :class="iconClasses" v-if="icon"></i>
     <span v-if="showSlot" ref="slot"><slot></slot></span>
    </button>
</template>
<script>
        import { oneOf } from '../../utils/validate';
    const btnClass='wz-btn';

    export default {
        name: 'Button',
        props: {
            color: {
                default: 'btn',
                validator (value) {
                    return oneOf(value,['primary','secondary','success','warning','danger','link','info']);
                }
            },
            type:{
                validator(value){
                    return oneOf(value,['outline']);
                }
            },
             htmlType: {
                default: 'button',
                validator (value) {
                        return oneOf(value,['button']);
                }
            },
            size:{
                validator (value){
                        return oneOf(value,['lg','sm','block']);
                }
            },
            icon:String,
            disabled:{
                validator (value){
                        return oneOf(value,['disabled']);
                }
            },
            hover:{
                validator(value){
                    return value==="hover";
                }

            },

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
                        `${btnClass}`,
                        {
                            [`${btnClass}-${this.color}`]:!!this.color,
                            [`${btnClass}-${this.size}`]:!!this.size&&this.size!=='block',
                            ['wz-btn-lg '+`${btnClass}-${this.size}`]:!!this.size&&this.size==='block',
                            [`${btnClass}-${this.type}-${this.color}`]:!!this.type,
                            [`${btnClass}-${this.hover}`]:!!this.hover,
                        }
                    ]
            },
            iconClasses(){
                return 'fa fa-'+this.icon;
            },
        },
         methods: {
            handleClick (event) {
                this.$emit('click', event);
            }
        },
         mounted () {
            this.showSlot = this.$slots.default !== undefined;
        }
    };
</script>
 -->
 <template>
    <button :type="htmlType" :class="classes" :disabled="disabled" @click="handleClick">
        <Icon class="wz-load-loop" type="load-c" v-if="loading"></Icon>
        <Icon :type="icon" v-if="icon && !loading"></Icon>
        <span v-if="showSlot" ref="slot"><slot></slot></span>
    </button>
</template>
<script>
    import Icon from '../icon';
    import { oneOf } from '../../utils/assist';

    const prefixCls = 'wz-btn';

    export default {
        name: 'Button',
        components: { Icon },
        props: {
            type: {
                validator (value) {
                    return oneOf(value, ['primary', 'ghost', 'dashed', 'text', 'info', 'success', 'warning', 'error']);
                }
            },
            shape: {
                validator (value) {
                    return oneOf(value, ['circle', 'circle-outline']);
                }
            },
            size: {
                validator (value) {
                    return oneOf(value, ['small', 'large']);
                }
            },
            loading: Boolean,
            disabled: Boolean,
            htmlType: {
                default: 'button',
                validator (value) {
                    return oneOf(value, ['button', 'submit', 'reset']);
                }
            },
            hover: {
                type: Boolean,
                default: false
            },
            icon: String,
            long: {
                type: Boolean,
                default: false
            }
        },
        data () {
            return {
                showSlot: true
            };
        },
        computed: {
            classes () {
                return [
                    `${prefixCls}`,
                    {
                        [`${prefixCls}-${this.type}`]: !!this.type,
                        [`${prefixCls}-long`]: this.long,
                        [`${prefixCls}-${this.shape}`]: !!this.shape,
                        [`${prefixCls}-${this.size}`]: !!this.size,
                        [`${prefixCls}-loading`]: this.loading != null && this.loading,
                        [`${prefixCls}-icon-only`]: !this.showSlot && (!!this.icon || this.loading),
                         [`${prefixCls}-hover`]: this.hover,
                    }
                ];
            }
        },
        methods: {
            handleClick (event) {
                this.$emit('click', event);
            }
        },
        mounted () {
            this.showSlot = this.$slots.default !== undefined;
        }
    };
</script>
