<template>
  <div class="container">
    <div class="optionsContainer">
      <div class="outerOption">
        <slot name="leftOption"></slot>
      </div>
      <div class="outerOption">
        <slot name="rightOption"></slot>
      </div>
    </div>
    <div class="buttonContainer">
      <div class="leftButton button"></div>
      <div class="rightButton button"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Judgment",
  components: {},
  data() {
    return {};
  },
};
</script>

<style>
.container {
  width: 100%;
}
.optionsContainer {
  width: 100%;
  display: flex;
  flex-direction: space-between;
  justify-content: center;
}
.outerOption {
  padding: 70px;
}
.leftOption {
  display: inline-block;
}
.rightOption {
  display: inline-block;
}
.buttonContainer {
  width: 100%;
  display: flex;
  flex-direction: space-between;
  justify-content: center;
}
.button {
  height: 100px;
  width: 100px;
  opacity: 80%;
}
.leftButton {
  background-image: url("~@/assets/images/leftButton.png");
  background-size: cover;
  margin-right: 20px;
}
.rightButton {
  background-image: url("~@/assets/images/rightButton.png");
  background-size: cover;
  margin-left: 20px;
}
</style>
