<template>
    <div :class="classes">
        <slot></slot>
    </div>
</template>
<script>
    const prefixCls = 'col';

    export default {
        name: 'iCol',
        props: {
            xs: [Number, Object],
            sm: [Number, Object],
            md: [Number, Object],
            lg: [Number, Object]
        },
        data () {
            return {
            };
        },
        computed: {
            classes () {
                let classList = [
                ];

                ['xl', 'sm', 'md', 'lg'].forEach(size => {
                    if (typeof this[size] === 'number') {
                        classList.push(`${prefixCls}-${size}-${this[size]}`);
                    } else if (typeof this[size] === 'object') {
                        let props = this[size];
                        Object.keys(props).forEach(prop => {
                            classList.push(
                                prop !== 'span'
                                    ? `${prefixCls}-${size}-${prop}-${props[prop]}`
                                    : `${prefixCls}-${size}-${props[prop]}`
                            );
                        });
                    }
                });

                return classList;
            },
        },
    };
</script>
