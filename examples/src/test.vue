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
        <div>
            <ContextMenu :value="{id: 1, name:'哈哈哈'}" @handle-show="handleShow">
                <div :style="{width: '1910px', height: '300px', backgroundColor: 'pink'}">哈哈哈</div>
                <div slot="content">
                    <ContextMenuItem @click="handleSelect" label="哈哈哈1" value="哈哈哈1"><span>icon1</span></ContextMenuItem>
                    <ContextMenuItem @click="handleSelect" label="哈哈哈2" value="哈哈哈2"></ContextMenuItem>
                </div>
            </ContextMenu>
        </div>
        <br/>
        <div>
            <ContextMenu :value="{id: 2, name:'呵呵呵'}" @handle-show="handleShow">
                <Button type="info">呵呵呵</Button>
                <div slot="content">
                    <ContextMenuItem @click="handleSelect" label="呵呵呵1" value="呵呵呵1" disabled><span>icon2</span></ContextMenuItem>
                    <ContextMenuItem @click="handleSelect" label="呵呵呵2" value="呵呵呵2"></ContextMenuItem>
                </div>
            </ContextMenu>
        </div>
  </div>
</template>

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
          this.menu = val
          this.operate = ''
          console.log(this.menu)
      },
      handleSelect: function(val) {
          this.operate = val
          console.log(this.operate)
      }
  },

}

</script>