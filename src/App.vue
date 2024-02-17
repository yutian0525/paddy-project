<!-- App.vue -->
<template>
  <div class="bar">
    <img @click="gotohome" src="./views/icons/ico.png" alt="本地图片" style="cursor: pointer;width: 31px;height: 31px;margin-top: 0px;margin-left: 20px;" />
    <h3 @click="gotohome" style="cursor: pointer;color: #eeeeee;margin-left: 20px;">基于深度学习的水稻生长识别与监测系统</h3>
  </div>
  <router-view />
</template>

<script>
export default {
  name: 'App',
  methods: {
    gotohome(){
      this.$router.push('/')
    }
  }
}
</script>
<style>
.bar {
  display: flex;
  position: fixed;
  align-items: center;
  top: 0;
  left: 0;
  height: 55px;
  width: 100%;
  background-color: #3B4554;
}
</style>