<template>
  <div id="app">
    <h1 class="titleQuestion">
      Which do you prefer?
    </h1>
    <Judgment>
      <template class="frameContainer" #leftOption>
        <div class="imageFrame">
          <img src="@/assets/images/drawings/cloudspring.png" class="painting">
        </div>
      </template>
      <template class="frameContainer" #rightOption>
        <div class="imageFrame">
          <img src="@/assets/images/drawings/barryweb.png" class="painting">
        </div>
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
@font-face {
  font-family: "Bite The Bullet";
  src: url("./assets/fonts/Bite _ Bullet.ttf");
}
* {
  background-color: #2c3e50;
  color: #fff;
  margin: 0px;
}
#app {
  font-family: sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
}
.titleQuestion {
  padding-top: 30px;
  font-family: "Bite The Bullet", sans-serif;
  transform: scale(1, 1.7);
  letter-spacing: 6px;
  opacity: 70%;
}
.frameContainer {
  padding: 100px;
}
.imageFrame {
  /* I don't totally understand why ~@/ works tbh*/
  background-image: url("~@/assets/images/frame.png");
  background-size: cover;
  transform-style: preserve-3d;
  position: relative;
  background-color: transparent;
  z-index: 2;
  width: 362px;
  height: 492px;
}
.painting {
  position: relative;
  transform: translateZ(-1px);
  z-index: 1;
  width: 315px;
  height: 420px;
  top: 36px;
}
</style>
