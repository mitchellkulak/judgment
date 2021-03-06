<template>
  <div class="container">
    <div class="judgmentContainer">
      <div class="outerOption">
        <slot name="leftOption"></slot>
      </div>
      <div class="outerOption">
        <slot name="rightOption"></slot>
      </div>
    </div>
    <div class="buttonContainer">
      <div class="leftButton button" @click="selectLeft()"></div>
      <div class="rightButton button" @click="selectRight()"></div>
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
  methods: {
    selectLeft() {
      this.$emit("leftSelected");
    },
    selectRight() {
      this.$emit("rightSelected");
    },
  },
};
</script>

<style>
.container {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}
.judgmentContainer {
  width: 100%;
  display: flex;
  flex-direction: space-between;
  justify-content: center;
}
.outerOption {
  padding-left: 120px;
  padding-right: 120px;
}
.leftOption {
}
.rightOption {
}
.buttonContainer {
  width: 100%;
  display: flex;
  flex-direction: space-between;
  justify-content: center;
  position: absolute;
  bottom: 250px;
}
.button {
  height: 70px;
  width: 70px;
  margin-left: 10px;
  margin-right: 10px;
  opacity: 80%;
}
.button:hover {
  cursor: pointer;
}
.leftButton {
  background-image: url("~@/assets/images/leftButton.png");
  background-size: cover;
}
.rightButton {
  background-image: url("~@/assets/images/rightButton.png");
  background-size: cover;
}
.shredding {
}
.fridging {
}
</style>
