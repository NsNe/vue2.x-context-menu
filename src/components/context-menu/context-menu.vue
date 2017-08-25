<template>
    <div v-clickoutside="handleClose" :class="[prefixCls, prefixCls + '-rel']">
        <div @contextmenu="handleContextMenu" :class="prefixCls + '-rel'">
            <slot>

            </slot>
        </div>
        <transition name="fade">
            <ul v-show="visible" @mouseup="handleClose" :class="prefixCls + '-content'" :style="styles">
                <slot name="content">{{content}}</slot>
            </ul>
        </transition>
    </div>
</template>

<style>
.context-menu, .context-menu-rel {
    display: inline-block;
}

.context-menu-rel {
    position: relative;
}

.context-menu-content {
    position: absolute;
    border: 1px solid #ececec;
    padding: 5px 0;
    top: 0;
    left: 100%;
    width: 200px;
    box-shadow: 1px 1px .5px #bbb;
    margin: 0;
}

</style>


<script>
import {oneOf} from '@/utils'
import clickoutside from '@/directives/clickoutside'

const prefixCls = 'context-menu';

export default {
    name: 'ContextMenu',
    props: {
        trigger: {
            validator (value) {
                return oneOf(value, ['contextmenu'])
            },
            default: 'contextmenu'
        },
        content: {
            type: [String, Number],
            default: ''
        },
        width: {
            type: [String, Number],
            default: '200'
        },
    },
    directives: { clickoutside },
    data() {
        return {
            prefixCls: prefixCls,
            visible: false
        }
    },
    computed: {
        styles () {
            let style = {};
            if (this.width) {
                style.width = `${this.width}px`;
            }
            return style;
        },
    },
    methods: {
        handleContextMenu() {
             event.preventDefault()
             this.visible = !this.visible
        },
        handleClose() {
            this.visible = false
        }
       
    }

}
</script>

