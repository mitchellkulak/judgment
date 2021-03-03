<template>
  <div id="app">
    <Judgment />
  </div>
</template>

<script>
import Judgment from "./components/Judgment.vue";

export default {
  name: "App",
  components: {
    Judgment,
  },
};
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
