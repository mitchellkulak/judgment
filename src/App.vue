<template>
  <div id="app">
    Which is better?
    <Judgment>
      <template #leftOption>
        <p>Left Option Bruh</p>
      </template>
      <template #rightOption>
        <p>Right Option Bruh</p>
      </template>
    </Judgment>
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
* {
  background-color: #2c3e50;
  color: #fff;
  margin: 0px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
}
</style>
