<!-- DigitalPaddy.vue -->
<template>
  <div style="height: 55px;"></div>
  <div>
    <h1 style="color:#00adb5">数字水稻</h1>
    <p style="color:#ffffff">页面正在施工中...</p>
    <button class="thebutton" @click="goToHome">返回主页</button>
  </div>
</template>
  
<script>
export default {
  methods: {
    goToHome() {
      this.$router.push('/')
    }
  }
}
</script>
<style></style>