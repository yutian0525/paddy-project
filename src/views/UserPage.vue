<script>
export default {
  methods: {
    exitlogin() {
      this.$userid.value = null;
      this.$userimgurl.value = null;
      this.$username.value = null;
      this.$router.push('/');
      alert("已退出登录！")
    }
  }
}
</script>

<template>
  <div class="UserInformationBar">
    <div class="userpic">
      <img :src="$userimgurl.value" alt="pic" class="userimginuserpage">
    </div>
    <h3 class="username">{{ $username.value }}</h3>
    <button class="button">个人信息</button>
    <button class="button">历史记录</button>
    <button class="button" @click="exitlogin">退出登录</button>
  </div>
</template>

<style>
.userpic {
  width: 100%;
  height: 16%;
  margin-top: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.userpic.container {
  display: flex;
  align-items: center;
  justify-content: center;
}

.UserInformationBar {
  width: 18%;
  height: 95vh;
  background: #3B4554;
}

.userimginuserpage {
  height: 126px;
  width: 126px;
  object-fit: cover;

  border-radius: 50%;
  overflow: hidden;

}

.username {
  text-align: center;
  margin-top: 0px;
  color: #eeeeee;
  font-size: 40px;
}

.button {
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
@keyframes userfadeIn {
  0% {
    opacity: 0;
    /* 动画开始时，div是完全透明的 */
    transform: translateX(-50%);
  }

  100% {
    opacity: 1;
    /* 动画结束时，div变为完全不透明 */
    transform: translateX(0);
  }
}
.UserInformationBar {
  animation-name: userfadeIn;
  /* 使用上面定义的fadeIn动画 */
  animation-duration: 0.5s;
  /* 动画持续时间为1秒 */
  animation-fill-mode: both;
  /* 动画结束后保持最后的关键帧状态（此处为完全不透明） */
  animation-timing-function: ease-in-out;
  /* 动画速度曲线，这里采用平滑过渡 */
}
</style>
