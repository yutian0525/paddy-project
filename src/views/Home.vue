<!-- Home.vue -->
<template>
  <div class="screen">
    <div class="section">
      <img src="./icons/介绍.png" alt="本地图片" class="my-image" />
      <h2 class="title">项目介绍</h2>
      <div class="textbox">
        <p class="text">填写项目的介绍。</p>
      </div>
      <button class="mbutton" @click="goToPage('ProjectIntroduction')"> ➜ </button>
    </div>
    <div class="section">
      <img src="./icons/水稻.png" alt="本地图片" class="my-image" />
      <h2 class="title">数字水稻</h2>
      <div class="textbox">
        <p class="text">这将会是一段描述性文字，用于解释关于数字水稻功能的介绍。</p>
      </div>
      <button class="mbutton" @click="goToPage('DigitalPaddy')"> ➜ </button>
    </div>
    <div class="section">
      <img src="./icons/生长周期.png" alt="本地图片" class="my-image" />
      <h2 class="title">水稻生长期识别</h2>
      <div class="textbox">
        <p class="text">这将会是一段描述性文字，用于解释关于水稻生长期识别功能的介绍。</p>
      </div>
      <button class="mbutton" @click="goToPage('GrowPredict')"> ➜ </button>
    </div>
    <div class="section">
      <img src="./icons/疾病.png" alt="本地图片" class="my-image" />
      <h2 class="title">水稻疾病监测</h2>
      <div class="textbox">
        <p class="text">这将会是一段描述性文字，用于解释关于水稻疾病监测功能的介绍。</p>
      </div>
      <button class="mbutton" @click="goToPage('DiseasePredict')"> ➜ </button>
    </div>
  </div>
</template>
  
<script>

export default {
  methods: {
    goToPage(page) {
      this.$router.push('/' + page)
    },
    logout() {
      this.userid = null;
      this.userimgurl = null;
      this.username = null;
    },

  }
}
</script>
  
<style>
.form-group {
  height: 80px;
  display: flex;
  align-items: center;
  justify-items: center;
}


.myinputbox {
  width: 170px;
  height: 25px;
  align-items: center;
  /* 改变边框颜色和宽度 */
  border: 2px solid #ccc;

  /* 设置背景色 */
  background-color: #393e46;

  /* 改变字体大小 */
  font-size: 18px;
  color: #eeeeee;

  /* 圆角效果 */
  border-radius: 5px;
  padding-left: 10px;

  /* 当鼠标悬停时的样式 */
  &:hover {
    background-color: #3f4247;
  }

  /* 当聚焦时的样式 */
  &:focus {
    outline: none;
    /* 移除默认轮廓线 */
    background-color: #222831;
    /* 更改焦点时的边框颜色 */
  }

}

.screen {
  display: flex;
  height: 98vh;
  width: 100%;
  justify-content: center;
  align-items: center;
}

.my-image {
  width: 120px;
  /* 设置图片宽度为200像素 */
  height: auto;
  /* 或者固定高度：height: 200px; 如果要保持原始比例，则保留auto */
  object-fit: cover;
  /* 保持图片宽高比且填满容器 */
  margin-top: 40px;
  /* 设置上边距为20像素 */

}

.section {
  background-color: #393e46;
  border-radius: 10px;
  /*border-style:solid;
    border-width:5px;
    border-color: chocolate;*/
  height: 450px;
  width: 320px;
  margin-left: 15px;
  /* 设置左边外部间距 */
  margin-right: 15px;
  /* 设置右边外部间距 */
  text-align: center;
  /* 水平居中 */
}

/* 首先定义关键帧动画 */
@keyframes fadeIn {
  0% {
    opacity: 0;
    /* 动画开始时，div是完全透明的 */
    transform: translateY(-50%);
  }

  100% {
    opacity: 1;
    /* 动画结束时，div变为完全不透明 */
    transform: translateY(0);
  }
}

/* 然后将动画应用到div上，并设置动画参数 */
.section {
  animation-name: fadeIn;
  /* 使用上面定义的fadeIn动画 */
  animation-duration: 0.5s;
  /* 动画持续时间为1秒 */
  animation-fill-mode: both;
  /* 动画结束后保持最后的关键帧状态（此处为完全不透明） */
  animation-timing-function: ease-in-out;
  /* 动画速度曲线，这里采用平滑过渡 */
}

.textbox {
  text-align: left;
  height: 130px;
}

.title {
  color: #00adb5;
  margin-left: 20px;
  /* 设置左边外部间距 */
  margin-right: 30px;
  /* 设置右边外部间距 */
  margin-top: 20px;
  /* 设置上边距为20像素 */
  font-size: 28px;
}

.text {
  color: #eeeeee;
  text-indent: 2em;
  margin-left: 20px;
  /* 设置左边外部间距 */
  margin-right: 20px;
  /* 设置右边外部间距 */
}

.mbutton {
  font-size: 30px;
  color: #eeeeee;
  background-color: #393e46;
  border-width: 1px;
  border-style: solid;
  border-color: #eeeeee;
  padding: 2px 22px;
  border-radius: 5px;
  align-items: center;

  transition: all 0.2s ease;

  &:hover {
    background-color: #555C68;
    /* 鼠标悬停时的背景色 */
    cursor: pointer;
  }

  &:active {
    background-color: #707A89;
  }
}

.miniimg {
  width: 33px;
  /* 设置图片宽度为200像素 */
  height: auto;
  /* 或者固定高度：height: 200px; 如果要保持原始比例，则保留auto */
  object-fit: cover;
  margin-right: 20px;
  margin-left: 40px;
}

body {
  background-color: #222831;
}
</style>