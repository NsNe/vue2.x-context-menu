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

        <div @contextmenu="$refs.contextMenu.handleContextMenu($event)" :style="{width: '1910px', height: '200px', backgroundColor: 'pink', marginBottom: '20px'}">哈哈哈</div>

        <div @contextmenu="$refs.contextMenu.handleContextMenu($event)" :style="{width: '1910px', height: '200px', backgroundColor: '#add8ad'}">哈哈哈</div>

        <ContextMenu :value="{id: 1, name:'哈哈哈'}" @handle-show="handleShow" ref="contextMenu">
            <div>
                <!-- 定义操作  -->
                <ContextMenuItem @click="handleSelect" label="哈哈哈1" value="哈哈哈1"><Icon type="checkmark" /></ContextMenuItem>
                <ContextMenuItem @click="handleSelect" label="哈哈哈2" value="哈哈哈2"><Icon type="wifi" /></ContextMenuItem>
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

