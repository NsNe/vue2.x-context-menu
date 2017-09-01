<template>
    <div v-clickoutside="handleClose" :class="[prefixCls, prefixCls + '-rel']"> 
        <transition name="fade">
            <ul v-show="visible" @click="handleClose" :class="prefixCls + '-content'" :style="styles" ref="menuContent">
                <slot>{{content}}</slot>
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
import {oneOf, getPosition} from '@/utils';
import clickoutside from '@/directives/clickoutside';

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
            visible: false,
            top: 0,
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
        handleContextMenu(event, menu) {
             event.preventDefault();
             this.visible = true;
             this.setMenuPosition(event);
             this.$emit('handle-show', menu);
        },
        handleClose(flag) {
            this.visible = false;
        },
        setMenuPosition(e) {
            let clickCoords = getPosition(e);
            const clickCoordsX = clickCoords.x;
            const clickCoordsY = clickCoords.y;
            this.left = clickCoordsX;
            this.top = clickCoordsY;

            const menu = this.$refs.menuContent;
            const minHeight = (menu.style.minHeight || menu.style.height).replace('px', '') || 72;
            const minWidth = (menu.style.minWidth || menu.style.width).replace('px', '') || 200;
            const scrollHeight = menu.scrollHeight || minHeight;
            const scrollWidth = menu.scrollWidth || minWidth;

            const largestY = window.innerHeight + window.scrollY - scrollHeight - 10;
            const largestX = window.innerWidth + window.scrollX - scrollWidth - 10;

            clickCoordsX > largestX ? (this.left = largestX - window.scrollX) : (this.left = clickCoordsX - window.scrollX);
            clickCoordsY > largestY ? (this.top = largestY - window.scrollY) : (this.top = clickCoordsY - window.scrollY);  
        }
    }

}
</script>

