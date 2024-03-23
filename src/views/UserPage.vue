<script>
export default {
  methods: {
    exitlogin() {
      this.$userid.value = null;
      this.$userimgurl.value = null;
      this.$username.value = null;
      this.$router.push("/");
      alert("已退出登录！");
    },
  },
};
</script>

<template>
  <div class="UserInformationBar">
    <div class="userpic">
      <img :src="$userimgurl.value" alt="pic" class="userimginuserpage" />
    </div>
    <h3 class="username">{{ $username.value }}</h3>
    <button class="buttonlist">个人信息</button>
    <button class="buttonlist">历史记录</button>
    <button class="buttonlist" @click="exitlogin">退出登录</button>
  </div>
</template>

<style>
</style>
