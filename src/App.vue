<template>
  <div id="app">
    <div class="titlePane">
      <h1 class="titleQuestion">
        Which do you prefer?
      </h1>
    </div>
    <Judgment class="judgmentPane" @rightSelected="selectRight" @leftSelected="selectLeft">
      <template class="frameContainer" #leftOption>
        <div class="fullPaintingLeft">
          <div class="frameContainer">
            <div class="imageFrame frameLeft"></div>
          </div>
          <div id="painting">
            <img src="@/assets/images/drawings/cloudspring.png" class="painting paintingLeft">
          </div>
          <div class="shreddedPieces">
            <div class="shredPiece"></div>
            <div class="shredPiece"></div>
            <div class="shredPiece"></div>
            <div class="shredPiece"></div>
            <div class="shredPiece"></div>
            <div class="shredPiece"></div>
            <div class="shredPiece"></div>
            <div class="shredPiece"></div>
            <div class="shredPiece"></div>
            <div class="shredPiece"></div>
            <div class="shredPiece"></div>
          </div>
        </div>
      </template>
      <template class="frameContainer" #rightOption>
        <div class="fullPaintingRight">
          <div class="frameContainer">
            <div class="imageFrame frameRight"></div>
          </div>
          <div>
            <img src="@/assets/images/drawings/barryweb.png" class="painting paintingRight">
          </div>
          <div class="shreddedPieces">
            <div class="shredPiece"></div>
            <div class="shredPiece"></div>
            <div class="shredPiece"></div>
            <div class="shredPiece"></div>
            <div class="shredPiece"></div>
            <div class="shredPiece"></div>
            <div class="shredPiece"></div>
            <div class="shredPiece"></div>
            <div class="shredPiece"></div>
            <div class="shredPiece"></div>
            <div class="shredPiece"></div>
          </div>
        </div>
      </template>
    </Judgment>
    <img class="blueRibbonLeft" src="@/assets/images/blueRibbon.png">
    <img class="blueRibbonRight" src="@/assets/images/blueRibbon.png">
  </div>
</template>

<script>
import anime from "animejs";
import Judgment from "./components/Judgment.vue";

export default {
  name: "App",
  components: {
    Judgment,
  },
  methods: {
    selectLeft() {
      this.shredRight();
      this.awardLeft();
    },
    selectRight() {
      this.shredLeft();
      this.awardRight();
    },
    shredLeft() {
      anime({
        targets: ".paintingLeft",
        translateY: 230,
        duration: 1700,
        easing: "easeOutCirc",
      });
      anime({
        targets: ".fullPaintingLeft",
        translateX: 2,
        translateY: 1,
        duration: 100,
        loop: 20,
        easing: "easeOutCirc",
      });
    },
    shredRight() {
      anime({
        targets: ".paintingRight",
        translateY: 230,
        duration: 1700,
        easing: "easeOutCirc",
      });
      anime({
        targets: ".fullPaintingRight",
        translateX: 2,
        translateY: 1,
        duration: 100,
        loop: 20,
        easing: "easeOutCirc",
      });
    },
    awardLeft() {
      anime({
        targets: ".blueRibbonLeft",
        translateX: 680,
        duration: 1100,
        easing: "easeOutCirc",
      });
    },
    awardRight() {
      anime({
        targets: ".blueRibbonRight",
        translateX: -680,
        duration: 1100,
        easing: "easeOutCirc",
      });
    },
  },
};
</script>

<style>
@font-face {
  font-family: "Bite The Bullet";
  src: url("./assets/fonts/Bite _ Bullet.ttf");
}
* {
  margin: 0;
}
html {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
#app {
  font-family: sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
  background-color: #1f2d3b;
  margin: 0px;
  height: 100vh;
}
.titlePane {
  padding-top: 20px;
  padding-bottom: 20px;
  height: 40px;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.titleQuestion {
  font-family: "Bite The Bullet", sans-serif;
  font-weight: bold;
  font-size: 40px;
  letter-spacing: 6px;
  opacity: 85%;
}
.judgmentPane {
  width: 100% !important;
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.frameContainer {
}
.frameContainer {
  position: relative;
}
.imageFrame {
  /* I don't totally understand why ~@/ works tbh*/
  background-image: url("~@/assets/images/frame.png");
  background-size: cover;
  position: absolute;
  left: -26px;
  background-color: transparent;
  width: 363px;
  height: 492px;
  /* This might cause problems with animations? :/ */
  /* transform: translateX(-28px); */
  z-index: 100;
}
.painting {
  width: 315px;
  height: 420px;
  position: relative;
  left: 3px;
  top: 45px;
  background-color: brown;
}

/* Shredding CSS */
.shreddedPieces {
  display: grid;
  /* makes it columns */
  grid-template-columns: repeat(11, 1fr);
  width: 320px;
  z-index: 99;
  position: relative;
  left: 2px;
  transform: translateY(28px);
  min-height: calc(100vh - 542px);
}

.shreddedPieces .shredPiece {
  /* border: 3px solid #1f2d3b; */
  border-left: 3px solid #1f2d3b;
  z-index: 99;
}
.shredPiece:first-child {
  border-left: 3px;
}
.shredPiece:last-child {
  border-right: 0px;
}
.shreddedPieces > * {
  margin: 0px;
}
.blueRibbonLeft {
  display: inline;
  width: 120px;
  height: 168px;
  position: relative;
  left: -1050px;
  top: -415px;
  z-index: 100;
}
.blueRibbonRight {
  width: 120px;
  height: 168px;
  position: relative;
  right: -1050px;
  top: -415px;
  z-index: 100;
}
</style>
