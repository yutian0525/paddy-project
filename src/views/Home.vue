<!-- Home.vue -->
<template>
  <div class="hscreen">
    <img src="./pic/homeshow2.png" class="homeimg" />
  </div>
  <div class="hscreen">
    <img src="./pic/mappage2.png" class="halfimg" />
    <div class="halfscreen">
      <h2 class="title">可视化展示</h2>
      <div class="textbox">
        <p class="text">
          在地图上清晰直观的展示你所需要的数据，包括热力图、降雨分布、生长曲线等
        </p>
      </div>
       <button class="mbutton" @click="goToPage('Map')">➜</button>
    </div>
  </div>
  <div class="hscreen">
    
    <div class="halfscreen">
      <h2 class="title">生长识别</h2>
      <div class="textbox">
        <p class="text">
          利用深度学习技术精准识别生长期，进行产量预测，生成生长曲线，帮助用户更好的了解水稻
        </p>
      </div>
       <button class="mbutton" @click="goToPage('GrowPredict')">➜</button>
    </div>
    <img src="./pic/grow.png" class="halfimg" />
  </div>
  <div class="hscreen">
    <img src="./pic/disease.png" class="halfimg" />
    <div class="halfscreen">
      <h2 class="title">疾病检测</h2>
      <div class="textbox">
        <p class="text">
          利用深度学习技术识别水稻疾病，并给出建议
        </p>
      </div>
       <button class="mbutton" @click="goToPage('DiseasePredict')">➜</button>
    </div>
  </div><!--
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
    
  </div>-->
  <div class="hbbar"></div>
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
  background-color: #eaeaea;
}
</style>
