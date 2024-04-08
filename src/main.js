import { createApp,ref } from 'vue'
import ElementPlus from 'element-plus'
import router from './router'
import 'element-plus/dist/index.css'
import '@/views/style/button.css'
import '@/views/style/img.css'
import '@/views/style/inputbox.css'
import '@/views/style/div.css'
import '@/views/style/text.css'
import '@/views/style/animate.css'
import App from './App.vue'
import * as echarts from "echarts";

const app = createApp(App)
app.config.globalProperties.$userid = ref(null);
app.config.globalProperties.$userimgurl = ref(null);
app.config.globalProperties.$username = ref(null);
app.use(ElementPlus)
app.use(router)
app.mount('#app')