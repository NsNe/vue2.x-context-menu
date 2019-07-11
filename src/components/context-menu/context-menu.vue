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

			// 为了跨浏览器兼容，使用 window.pageYOffset 代替 window.scrollY。另外，旧版本IE（<9）两个属性都不支持，必须使用其他的非标准属性
			var supportPageOffset = window.pageXOffset !== undefined;
			var isCSS1Compat = ((document.compatMode || "") === "CSS1Compat");

			var scrollXTemp = supportPageOffset ? window.pageXOffset : isCSS1Compat ? document.documentElement.scrollLeft : document.body.scrollLeft;
			var scrollYTemp = supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop;

            const largestY = window.innerHeight + scrollYTemp - scrollHeight - 10;
            const largestX = window.innerWidth + scrollXTemp - scrollWidth - 10;

            clickCoordsX > largestX ? (this.left = largestX - scrollXTemp) : (this.left = clickCoordsX - scrollXTemp);
            clickCoordsY > largestY ? (this.top = largestY - scrollYTemp) : (this.top = clickCoordsY - scrollYTemp);   
        }
    }

}
</script>

