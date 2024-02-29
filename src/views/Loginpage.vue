<!-- DigitalPaddy.vue -->
<template>
    <div class="screen">
        <div class="section">
            <h2 class="title">用户登录</h2>
            <div style="height: 30px;"></div>
            <div class="form-group">
                <img src="./icons/用户名.png" alt="p" class="miniimg" />
                <input class="myinputbox" type="text" id="iusername" v-model="username" required placeholder="请输入用户名" />
            </div>
            <div class="form-group">
                <img src="./icons/密码.png" alt="p" class="miniimg" />
                <input class="myinputbox" type="password" id="password" v-model="password" required placeholder="请输入密码" />
            </div>
            <div style="height: 30px;"></div>
            <button class="thebutton" @click="login">登录</button>
            <button class="thebutton" @click="register">注册</button>
        </div>
    </div>
</template>
    
<script>
import axios from 'axios';
export default {
    methods: {
        goToHome() {
            this.$router.push('/')
        },
        a(){
            this.$userid.value = '新的值';
        },
        b(){
            console.log(this.$userid.value)
        },
        async login() {
            console.log(iusername.value);
            console.log(password.value);

            try {
                const response = await axios.post('http://localhost:5000/userlogin', { username: iusername.value, password: password.value });
                console.log(response.data);
                this.$userid.value = response.data.id;
                this.$userimgurl.value = response.data.imgurl;
                this.$username.value = response.data.username;
                this.$router.push('/');
            } catch (error) {
                console.error('Error:', error);
            }
        },
        register(){
          this.$router.push('/RegisterPage')
        }
    }
}
</script>
<style></style>