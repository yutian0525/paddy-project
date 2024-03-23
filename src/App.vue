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




</style>