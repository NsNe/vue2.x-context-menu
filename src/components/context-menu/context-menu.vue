<template>
    <div v-clickoutside="handleClose" :class="[prefixCls, prefixCls + '-rel']">
        <div @contextmenu="handleContextMenu($event)" :class="prefixCls + '-rel'">
            <slot>

            </slot>
        </div>
        <transition name="fade">
            <ul v-show="visible" @mouseup="handleClose" :class="prefixCls + '-content'" :style="styles" ref="menuContent">
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
    position: fixed;
    border: 1px solid #ececec;
    padding: 5px 0;
    width: 200px;
    box-shadow: 1px 1px .5px #bbb;
    margin: 0;
    text-align: left;
    background-color: #fff;
    z-index: 100;
}

</style>


<script>
import {oneOf, getPosition} from '@/utils'
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
        value: {
            type: [Object, String],
            default: '',
            required: true
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
            visible: false,
            stop: 0,
            left: 0
        }
    },
    computed: {
        styles () {
            return {
                width: this.width,
                top: (this.top || 0) + 'px',
                left: (this.left || 0) + 'px' 
            }
        },
    },
    methods: {
        handleContextMenu(event) {
             event.preventDefault()
             this.visible = true
             this.setMenuPosition(event)
             this.$emit('handle-show', this.value)
        },
        handleClose() {
            this.visible = false
        },
        setMenuPosition(e) {
            let clickCoords = getPosition(e)
            const clickCoordsX = clickCoords.x
            const clickCoordsY = clickCoords.y
            this.left = clickCoordsX;
            this.top = clickCoordsY;

            const menu = this.$refs.menuContent;
            const minHeight = (menu.style.minHeight || menu.style.height).replace('px', '') || 32;
            const minWidth = (menu.style.minWidth || menu.style.width).replace('px', '') || 32;
            const scrollHeight = menu.scrollHeight || minHeight;
            const scrollWidth = menu.scrollWidth || minWidth;

            const largestHeight = window.innerHeight - scrollHeight - 25;
            const largestWidth = window.innerWidth - scrollWidth - 25;

            if (this.top > largestHeight) {
                (this.top = largestHeight)
            }
            if (this.left > largestWidth) {
                (this.left = largestWidth)
            }

        }
    }

}
</script>

