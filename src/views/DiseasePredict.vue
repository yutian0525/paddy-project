<!-- DigitalPaddy.vue -->
<template>
    <div class="screen">
        <div class="mainsquare">
            <div>
                <h1 class="title">水稻疾病监测</h1>
            </div>
            <div style="display: flex;justify-content: center;height:610px;">
                <div class="square">
                    <div class="pic">
                        <img src="./icons/nopic.png" alt="Uploaded Image" class="showpic" v-if="!imageUrl">
                        <img :src=imageUrl alt="Uploaded Image" class="showpic" v-if="imageUrl">
                    </div>
                    <input ref="fileInput" type="file" style="display: none" @change="handleFileChange">
                    <button class="thebutton" @click="selectFile">上传图片</button>
                    <button class="thebutton" @click="predictImage" :disabled="!imageUrl">开始识别</button>
                </div>
                <div class="square">
                    <div v-if="predictedImg">
                        <h2 class="title">识别完成！</h2>
                        <p style="color: rgb(255, 255, 255);">{{ result }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
import axios from 'axios';
export default {
  data() {
    return {
      selectedImage: null,
      imageUrl: null,
      predictedImg: null,
      imgname: null,
      result: null
    };
  },
  methods: {
    goToHome() {
      this.$router.push('/')
    },
    selectFile() {
      this.$refs.fileInput.click();
    },
    handleFileChange(event) {
      this.selectedImage = event.target.files[0];
      this.uploadImage();
    },
    async uploadImage() {
      try {
        const formData = new FormData();
        formData.append('file', this.selectedImage);

        const response = await axios.post('http://127.0.0.1:5000/DiseaseImage', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });

        this.imageUrl = "http://127.0.0.1:5000/show_disease_image/" + response.data.data;
        this.imgname = response.data.data
        console.log(this.imageUrl);
      } catch (error) {
        console.error('Error uploading image:', error);
      }

    },
    async predictImage() {
      try {
        //const formData = new FormData();
        //formData.append('imageid', this.imageUrl);
        //formData.append('modelid', 1);
        console.log({ imageid: this.imgname, modelid: "1" })
        const response = await axios.post('http://localhost:5000/predict_image', { imageid: this.imgname, modelid: "2" });

        this.predictedImg = "http://127.0.0.1:5000/show_predict_disease_image/" + this.imgname;
        this.imageUrl = this.predictedImg;
        this.result = response.data;
      } catch (error) {
        console.error('Error:', error);
      }
    }

  }
}
</script>
  