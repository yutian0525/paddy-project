<!-- App.vue -->
<template>
  <div class="bar">
    <img @click="gotohome" src="./views/icons/ico.png" alt="本地图片" style="cursor: pointer;width: 31px;height: 31px;margin-top: 0px;margin-left: 20px;" />
    <h3 @click="gotohome" style="cursor: pointer;color: #eeeeee;margin-left: 20px;">基于深度学习的水稻生长识别与监测系统</h3>
    <div style="display: flex; flex: 1;height: 55px;justify-content: right;">
    <div style="display: flex; ">
      <p style="color: #eeeeee;">访客模式</p>
      <button class="loginbutton" @click="gologinpage">登录</button>
    </div>
    </div>
  </div>
  <router-view />
</template>

<script>
export default {
  data() {
    return {
    };
  },
  name: 'App',
  methods: {
    gotohome(){
      this.$router.push('/')
    },
    bb(){
      console.log(this.$userid.value)
    },
    gologinpage(){
      this.$router.push('/Loginpage')
    }
  }
}
</script>
<style>
.loginbutton{
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