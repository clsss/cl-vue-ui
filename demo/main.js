import Vue from "vue";
import App from "./app.vue";
// 导入组件库
import CLUI from "../components";
import './style/index.scss'
import './offer/fb'

Vue.config.productionTip = false;

Vue.use(CLUI);

new Vue({
  render: h => h(App)
}).$mount("#app");
