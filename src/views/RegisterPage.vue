<!-- DigitalPaddy.vue -->
<template>
  <div class="screen">
    <div class="section">
      <h2 class="title">用户注册</h2>
      <div style="height: 30px;"></div>
      <div class="form-group">
        <img src="./icons/用户名.png" alt="p" class="miniimg" />
        <input class="myinputbox" type="text" id="iusername" v-model="username" required placeholder="请输入用户名" />
      </div>
      <div class="form-group">
        <img src="./icons/密码.png" alt="p" class="miniimg" />
        <input class="myinputbox" type="password" id="password" v-model="password" required placeholder="请输入密码" />
      </div>
      <div class="form-group">
        <img src="./icons/密码.png" alt="p" class="miniimg" />
        <input class="myinputbox" type="confirmpassword" id="confirmpassword" v-model="confirmpassword" required placeholder="请再次输入密码" />
      </div>
      <div style="height: 10px;"></div>
      <button class="thebutton" @click="register">注册</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { ElMessage } from 'element-plus'
export default {
  methods: {
    goToHome() {
      this.$router.push('/')
    },
    async register() {
      const userData = {
        username: this.username,
        password: this.password
      };

      if (this.password !== this.confirmpassword) {
        ElMessage.error('两次密码输入不一致，请重新输入!')
      } else {
        try {
          const response = await axios.post('http://localhost:5000/usersignup', userData, {
          headers: {
            'Content-Type': 'application/json; charset=utf-8'
          }
        });
          console.log(response.data)
          if (response.status == 400) {
            ElMessage.error('用户名已存在，请重新输入!')
          }
          if (response.status == 200) {
            console.log(response.data);
            ElMessage({
              message: '注册成功!',
              type: 'success',
            })
            this.$router.push('/Loginpage');
          }
        }
        catch (error)
        {
          console.error('Error:', error);
        }
      }
    },
    }
}
</script>
<style></style>