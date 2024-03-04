<script>
export default {
  methods: {
    exitlogin() {
      this.$userid.value = null;
      this.$userimgurl.value=null;
      this.$username.value=null;
    }
  }
}
</script>

<template>
<<div class="UserInformationBar">
  <img :src="$userimgurl.value" alt="pic" class="userimginuserpage">
  <h3 class="username">{{$username.value}}</h3>
  <button class="button">个人信息</button>
  <button class="button">历史记录</button>
  <button class="button" @click="exitlogin">退出登录</button>
</div>
</template>

<style>
.UserInformationBar{
  width:20%;
  height: 98vh;
  background: #3B4554;
}
.userimginuserpage{
  height: 46px;
  width: 46px;
  object-fit: cover;
  margin-top: 100px;
  border-radius: 50%;
  overflow: hidden;
  margin-left: 80px;
  margin-bottom: 100px;
}
.username{
  text-align: center;
}
.button{
  font-size: 20px;
  color: #eeeeee;
  border-width: 0;
  border-style: solid;
  border-color: #eeeeee;
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
  width: 100%;
  height: 5%;
  background: #3B4554;
  margin-bottom: 3%;
}
</style>
