// main.js
import { createApp,ref  } from 'vue'
import App from './App.vue'
import router from './router'
const app = createApp(App);

app.config.globalProperties.$userid = ref(null);
app.config.globalProperties.$userimgurl = ref(null);
app.config.globalProperties.$username = ref(null);
app.use(router).mount('#app')
