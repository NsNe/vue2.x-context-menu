<template>
    <li @click="handleClick(value)" :class="prefixCls + '-select-item'">
        <slot></slot>
        <span :style="styles">{{label}}</span>
    </li>
</template>

<style>
.context-menu-select-item {
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
.context-menu-select-item:hover {
    background: #f3f3f3;
}
</style>


<script>

const prefixCls = 'context-menu';

export default {
    name: 'ContextMenuItem',
    props: {
        label: {
            type: String,
            required: true
        },
        value: {
            type: [String, Number],
            required: true
        }
    },
    methods: {
        handleClick: function(val) {
            this.$emit('click', val)
        }
    },
    computed: {
        styles() {
            let style = {}
            style.marginLeft = this.hasIcon ? '4px' : '0'
            return style
        } 
    },
    data(){
        return{
            prefixCls: prefixCls,
            hasIcon: false
        }
    },
    mounted() {
        this.hasIcon = this.$slots.default != undefined
    }

}
</script>

