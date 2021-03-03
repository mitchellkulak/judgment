<template>
  <div class="container">
    <div>
      <slot name="leftOption"></slot>
    </div>
    <div>
      <slot name="rightOption"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Judgment",
  components: {
  },
  data() {
    return {

    };
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
