import Vue from 'vue';
import App from './App.vue';
import router from './router/index';
import store from './store/index';
import './registerServiceWorker';
import { Dialog,Toast } from 'vant';
import components from './components/index';

Vue.use(Dialog);
Vue.use(Toast);
Vue.prototype.$Dialog = Dialog;
Vue.prototype.$Toast = Toast;

Object.keys(components).forEach(key=>{
  Vue.component(key,components[key])
})
Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
