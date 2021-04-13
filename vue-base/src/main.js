import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

/**
 * registerMicroApps: url 触发 qiankun 匹配逻辑，激活对应 activeRule 规则的微应用
 * loadMicroApp: 手动加载，与 url 无关，页面可以同时存在多个微应用
 */
import { registerMicroApps, loadMicroApp, start } from 'qiankun'

const apps = [
  {
    name: 'vue-module-deeplink',
    entry: '//localhost:8001',
    container: '#moduleDeeplink',
    activeRule: '/deeplink'
  }
]
const loadApps = [
  {
    name: 'vue-module-luck',
    entry: '//localhost:8002',
    container: '#moduleLuck',
  },
  {
    name: 'vue-module-prize',
    entry: '//localhost:8003',
    container: '#modulePrize',
  },
]
registerMicroApps(apps)
loadApps.forEach(app => {
  loadMicroApp(app, 
    {
      scope: { experimentalStyleIsolation: true },
      sandbox: { strictStyleIsolation: true }
    }
  )
})
start({
  scope: { experimentalStyleIsolation: true },
  sandbox: { strictStyleIsolation: true }
})

Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
