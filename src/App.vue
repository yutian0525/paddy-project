<!-- App.vue -->
<template>
  <div class="bar">
    <img @click="gotohome" src="./views/icons/ico.png" alt="本地图片"
      style="cursor: pointer;width: 31px;height: 31px;margin-top: 0px;margin-left: 20px;" />
    <h3 @click="gotohome" style="cursor: pointer;color: #eeeeee;margin-left: 20px;">基于深度学习的水稻生长识别与监测系统</h3>
    <div style="display: flex; flex: 1;height: 55px;justify-content: right;">
      <div style="display: flex; " v-if="!$userid.value">
        <p style="color: #eeeeee;">访客模式</p>
        <button class="loginbutton" @click="gologinpage">登录</button>
      </div>
      <div style="display: flex; " v-if="$userid.value">
        <p style="color: #eeeeee;">{{ $username.value }}</p>
        <img :src="$userimgurl.value" @click="gotouserpage" alt="pic" class="userimg" />
      </div>
    </div>
  </div>
  <router-view />
</template>

<script>
export default {
  data() {
    return {
      isDropdownOpen: false,
      items: ['选项1', '选项2', '选项3'],
    };
  },
  name: 'App',
  methods: {
    gotohome() {
      this.$router.push('/')
    },
    bb() {
      console.log(this.$userid.value)
    },
    gologinpage() {
      this.$router.push('/Loginpage')
    },
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
    },
    handleClickOutside(event) {
      if (!this.$refs.dropdown.contains(event.target)) {
        this.isDropdownOpen = false;
      }
    },
    gotouserpage(){
      this.$router.push('/UserPage')
    }
  }
}
</script>
<style>
.userimg {
  width: 46px;
  /* 设置图片宽度为200像素 */
  height: 46px;
  /* 或者固定高度：height: 200px; 如果要保持原始比例，则保留auto */
  object-fit: cover;
  /* 保持图片宽高比且填满容器 */
  margin-top: 4px;
  /* 设置上边距为20像素 */
  border-radius: 50%;
  /* 将边框半径设置为50%以实现圆形效果 */
  overflow: hidden;
  /* 隐藏可能超出圆形部分的内容 */
  margin-left: 20px;
  margin-right: 30px;
}
body{
  margin-left: 0px;
  margin-right: 0px;
  margin-top:0px ;
  margin-bottom:0px ;
}
.dropdown-content {
  display: flex;
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 11;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}

.loginbutton {
  display: inline-block;
  /* 或者inline-flex等布局方式 */
  padding: 1px 1px;
  /* 内边距 */
  font-size: 14px;
  color: #ffffff;
  background-color: #00adb5;
  /* 背景颜色 */
  border: none;
  border-radius: 23px;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  margin-top: 4px;
  margin-bottom: 5px;
  margin-left: 20px;
  margin-right: 30px;
  width: 46px;
  height: 46px;
  transition: all 0.2s ease;

  &:hover {
    background-color: #008086;
    /* 鼠标悬停时的背景色 */
    cursor: pointer;
  }

  &:active {
    background-color: #00565a;
  }
}

.bar {
  display: flex;
  position: fixed;
  align-items: center;
  top: 0;
  left: 0;
  height: 55px;
  width: 100%;
  background-color: #3B4554;
  z-index: 10;
}
</style>