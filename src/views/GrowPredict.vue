<!-- DigitalPaddy.vue -->
<template>
    <div class="screen">
        <div class="mainsquare">
            <div>
                <h1 class="title">水稻生长期识别</h1>
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

                const response = await axios.post('http://127.0.0.1:5000/grow_image', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                });

                this.imageUrl = "http://127.0.0.1:5000/ShowGrowImage/" + response.data.data;
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
                const response = await axios.post('http://localhost:5000/predict_image', { imageid: this.imgname, modelid: "1" });

                this.imageUrl = "http://127.0.0.1:5000/show_predict_grow_image/" + this.imgname;
                this.predictedImg = this.imageUrl;
                this.result = response.data;
            } catch (error) {
                console.error('Error:', error);
            }
        }

    }
}
</script>
  
<style>
.showpic {
    margin-top: 5px;
    width: 440px;
    height: auto;

}

.mainsquare {
    background-color: #393e46;
    border-radius: 10px;
    height: 700px;
    width: 1400px;
    /* 设置右边外部间距 */
    text-align: center;
    /* 水平居中 */
}

.pic {
    height: 450px;
    width: 450px;
    background-color: #353535;
    border-radius: 8px;
    margin-left: 75px;
    margin-top: 20px;
    justify-items: center;
    align-items: center;

}

.square {
    justify-items: center;
    /*background-color: #536581;*/
    height: 600px;
    width: 600px;
    margin-left: 20px;
    /* 设置左边外部间距 */
    margin-right: 20px;
}

@keyframes fadeInAndScale {
    0% {
        opacity: 0;
        transform: scale(0.3);
        /* 初始缩放比例，这里设置为10%大小 */
    }

    100% {
        opacity: 1;
        transform: scale(1);
        /* 动画结束时，元素恢复到正常尺寸（100%） */
    }
}

.mainsquare {
    position: relative;
    /* 为了保证缩放不影响其他布局，一般会使用相对定位 */
    animation-name: fadeInAndScale;
    animation-duration: 0.5s;
    /* 动画持续时间 */
    animation-fill-mode: both;
    /* 动画结束后保持最后一个关键帧样式 */
    animation-timing-function: ease-in-out;
    /* 可以选择ease-in-out等其他速度曲线 */
}

/* 设置按钮的基础样式 */
.thebutton {
    display: inline-block;
    /* 或者inline-flex等布局方式 */
    padding: 8px 18px;
    /* 内边距 */
    font-size: 16px;
    color: #ffffff;
    background-color: #00adb5;
    /* 背景颜色 */
    border: none;
    border-radius: 4px;
    cursor: pointer;
    text-align: center;
    text-decoration: none;
    margin-left: 20px;
    /* 设置左边外部间距 */
    margin-right: 20px;
    margin-top: 20px;
    transition: all 0.2s ease;

    &:hover {
        background-color: #008086;
        /* 鼠标悬停时的背景色 */
        cursor: pointer;
    }

    &:active {
        background-color: #00565a;
    }
}

/* 设置按钮禁用时的样式 */
.thebutton:disabled {
    opacity: 0.5;
    /* 降低透明度以表示不可用 */
    cursor: not-allowed;
    /* 更改鼠标指针为禁止符号 */
    background-color: #cccccc;
    /* 可以更改背景色以区别正常状态 */
}</style>