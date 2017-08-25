<template>
  <div id="app">
    <img src="../assets/logo.png">
    <test></test>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<script>
import test from './test'
export default {
    components: {
      test
    }
}

</script>