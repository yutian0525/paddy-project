<!-- Home.vue -->
<template>
  <div class="screen">
    <div class="section">
      <img src="./icons/介绍.png" alt="本地图片" class="my-image" />
      <h2 class="title">项目介绍</h2>
      <div class="textbox">
        <p class="text">填写项目的介绍。</p>
      </div>
      <button class="mbutton" @click="goToPage('ProjectIntroduction')">➜</button>
    </div>
    <div class="section">
      <img src="./icons/水稻.png" alt="本地图片" class="my-image" />
      <h2 class="title">数字水稻</h2>
      <div class="textbox">
        <p class="text">这将会是一段描述性文字，用于解释关于数字水稻功能的介绍。</p>
      </div>
      <button class="mbutton" @click="goToPage('DigitalPaddy')">➜</button>
    </div>
    <div class="section">
      <img src="./icons/生长周期.png" alt="本地图片" class="my-image" />
      <h2 class="title">水稻生长期识别</h2>
      <div class="textbox">
        <p class="text">这将会是一段描述性文字，用于解释关于水稻生长期识别功能的介绍。</p>
      </div>
      <button class="mbutton" @click="goToPage('GrowPredict')">➜</button>
    </div>
    <div class="section">
      <img src="./icons/疾病.png" alt="本地图片" class="my-image" />
      <h2 class="title">水稻疾病监测</h2>
      <div class="textbox">
        <p class="text">这将会是一段描述性文字，用于解释关于水稻疾病监测功能的介绍。</p>
      </div>
      <button class="mbutton" @click="goToPage('DiseasePredict')">➜</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goToPage(page) {
      this.$router.push("/" + page);
    },
    logout() {
      this.userid = null;
      this.userimgurl = null;
      this.username = null;
    },
  },
};
</script>

<style>
body {
  background-color: #222831;
}
</style>
