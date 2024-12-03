<template>
  <Ocr_Page/>
  
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import Ocr_Page from './components/Ocr_Page.vue';


export default {
  name: 'App',
  components: {
    // eslint-disable-next-line vue/no-unused-components
    Ocr_Page
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

