<template>
  <div>
        <div>
            <ContextMenu>
                <Button type="primary">哈哈哈</Button>
                <div slot="content">
                    <ContextMenuItem @click="handleSelect" label="哈哈哈1" value="哈哈哈1"><span>icon1</span></ContextMenuItem>
                    <ContextMenuItem @click="handleSelect" label="哈哈哈2" value="哈哈哈2"></ContextMenuItem>
                </div>
            </ContextMenu>
        </div>
        <br/>
        <div>
            <ContextMenu>
                <Button type="primary">呵呵呵</Button>
                <div slot="content">
                    <ContextMenuItem @click="handleSelect" label="呵呵呵1" value="呵呵呵1"><span>icon2</span></ContextMenuItem>
                    <ContextMenuItem @click="handleSelect" label="呵呵呵2" value="呵呵呵2"></ContextMenuItem>
                </div>
            </ContextMenu>
        </div>
  </div>
</template>

<script>

export default {
  methods: {
      handleSelect: function(value) {
          console.log(value);
      }
  },

}

</script>