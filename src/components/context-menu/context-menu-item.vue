<template>
    <li @click="handleClick(value)" :class="classes" class="disabled">
        <slot></slot>
        <span :style="styles">{{label}}</span>
    </li>
</template>

<style>
.context-menu-item {
    margin: 0;
    line-height: normal;
    padding: 7px 16px;
    clear: both;
    color: #495060;
    font-size: 12px!important;
    white-space: nowrap;
    list-style: none;
    cursor: pointer;
    transition: background .2s ease-in-out;
}
.context-menu-item:hover {
    background: #f3f3f3;
}
.context-menu-item-disabled {
    color: #bbbec4;
    cursor: not-allowed;
}
</style>


<script>

const prefixCls = 'context-menu';

export default {
    name: 'ContextMenuItem',
    props: {
        label: {
            type: [String, Number],
            required: true
        },
        value: {
            type: [String, Number],
            required: true
        },
        disabled: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        handleClick: function(val) {
            this.disabled ? this.$emit('click', '') : this.$emit('click', val);
        }
    },
    computed: {
        styles() {
            let style = {};
            style.marginLeft = this.hasIcon ? '4px' : '0';
            return style;
        },
        classes() {
            return [
                `${prefixCls}-item`,
                {
                   [ `${prefixCls}-item-disabled`]: this.disabled
                }
            ] 
        }
    },
    data(){
        return{
            prefixCls: prefixCls,
            hasIcon: false
        }
    },
    mounted() {
        this.hasIcon = this.$slots.default != undefined;
    }

}
</script>

