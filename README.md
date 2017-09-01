# vue2.x-context-menu

[vue2.x-context-menu在线示例](https://nsne.github.io/vue2.x-context-menu/)  

## Install
```

npm install vue2.x-context-menu --save

//if you use yarn, you can

yarn add vue2.x-context-menu  

```

## Usagehttps://nsne.github.io/vue2.x-context-menu/

### Usage1 (Global Component)
``` js
import Vue from 'vue'
import contextmenu from 'vue2.x-context-menu';
import 'vue2.x-context-menu/dist/css/context-menu.css';

Vue.use(contextmenu);

```
If you register it as a global component, you can use it directly in the template tag of any component of your project. like this:

```html
    <table style="width: 100%; margin-bottom: 20px;" class="ivu-table">
        <thead>
            <th>name</th>
            <th>sex</th>
            <th>age</th>
        </thead>
        <tbody>
            <tr @contextmenu="$refs.contextMenu.handleContextMenu($event, {name: 'aaa', sex: '男', age: 24})">
                <td>aaa</td>
                <td>男</td>
                <td>23</td>
            </tr>
            <tr @contextmenu="$refs.contextMenu.handleContextMenu($event, {name: 'bbb', sex: '女', age: '23'})">
                <td>bbb</td>
                <td>女</td>
                <td>23</td>
            </tr>
        </tbody>
    </table>
    <ContextMenu @handle-show="handleShow" ref="contextMenu">
        <div>
            <!-- 定义操作  -->
            <ContextMenuItem @click="handleSelect" label="哈哈哈1" value="哈哈哈1"><Icon type="checkmark" /></ContextMenuItem>
            <ContextMenuItem @click="handleSelect" label="哈哈哈2" value="哈哈哈2"><Icon type="wifi" /></ContextMenuItem>
        </div>
    </ContextMenu>
```



## Usage2 (Local Component)

```html
<template>
  <div>
        <div>
            <h2>result</h2>
            <h4>
                <label for="">menu:</label>
                <span>{{menu}}
                </span>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <label for="">operate:</label>
                <span> {{operate}}
                </span>
            </h4>
        </div>
        <br/>
        <table style="width: 100%; margin-bottom: 20px;">
            <thead>
                <th>name</th>
                <th>sex</th>
                <th>age</th>
            </thead>
            <tbody>
                <tr @contextmenu="$refs.contextMenu.handleContextMenu($event, {name: 'aaa', sex: '男', age: 24})">
                    <td>aaa</td>
                    <td>男</td>
                    <td>23</td>
                </tr>
                <tr @contextmenu="$refs.contextMenu.handleContextMenu($event, {name: 'bbb', sex: '女', age: '23'})">
                    <td>bbb</td>
                    <td>女</td>
                    <td>23</td>
                </tr>
            </tbody>
        </table>

        <div @contextmenu="$refs.contextMenu.handleContextMenu($event)" :style="{width: '1910px', height: '200px', backgroundColor: 'pink', marginBottom: '20px'}">哈哈哈</div>

        <div @contextmenu="$refs.contextMenu.handleContextMenu($event)" :style="{width: '1910px', height: '200px', backgroundColor: '#add8ad'}">哈哈哈</div>

        <ContextMenu @handle-show="handleShow" ref="contextMenu">
            <div>
                <!-- 定义操作  -->
                <ContextMenuItem @click="handleSelect" label="哈哈哈1" value="哈哈哈1"></ContextMenuItem>
                <ContextMenuItem @click="handleSelect" label="哈哈哈2" value="哈哈哈2"></ContextMenuItem>
            </div>
        </ContextMenu>

  </div>
</template>

<style>
tr {
    cursor: pointer;
}
</style>

<script>
//only for local registration, if you register it as a global component, You do not have to do that
import contextmenu from 'vue2.x-context-menu'
import 'vue2.x-context-menu/dist/css/context-menu.css'
const {ContextMenu, ContextMenuItem } = contextmenu

export default {
  data() {
      return {
          menu: '',
          operate: ''
      }
  },
  methods: {
      handleShow: function(val){
          this.menu = val;
          this.operate = '';
          console.log(this.menu);
      },
      handleSelect: function(val) {
          this.operate = val;
          console.log(this.operate);
      }
  }
}

</script>


## API
As you can see, there are two components, ContextMenu and ContextMenuItem

下面就用中文啦，作为中国人，还是写点中文吧，再说英文写着也累
### ContextMenu
props

|属性|说明|类型|默认值|
|---|---|---|---|
|width|弹出窗口的宽度|String或Number|200|

event

|事件名|说明|返回值|
|---|---|---|
|handle-show|鼠标右击时触发，返回点击的元素本身，即value值，此时可自己清除operate|点击元素value

### ContextMenuItem
props

|属性|说明|类型|默认值|
|---|---|---|---|
|label|显示操作的标签|String或Number||
|value|点击菜单时的识别key，如删除操作可为delete|String或Number||
|disabled|是否禁用|Boolean|false|

event

|事件名|说明|返回值|
|---|---|---|
|click|点击某操作时触发,返回value属性||
