<script>
import axios from 'axios';
export default {
  data() {
        return {
            selectedImage: null,
        };
    },
  methods: {
    exitlogin() {
      this.$userid.value = null;
      this.$userimgurl.value = null;
      this.$username.value = null;
      this.$router.push("/");
      alert("已退出登录！");
    },
    selectFile() {
      this.$refs.fileInput.click();
    },
    handleFileChange(event) {
      this.selectedImage = event.target.files[0];
      this.uploadUserImage();
    },
    async uploadUserImage() {
      console.log(this.selectedImage);
            try {
                const formData = new FormData();
                formData.append('file', this.selectedImage);
                formData.append('userid', this.$userid.value);

                const response = await axios.post('http://127.0.0.1:5000/UploadUserImage', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                });
            } catch (error) {
                console.error('Error uploading image:', error);
            }

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
    <input ref="fileInput" type="file" style="display: none" @change="handleFileChange" />
    <button class="thebutton" @click="selectFile">上传图片</button>
  </div>
</template>

<style></style>
