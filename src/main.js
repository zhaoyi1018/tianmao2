import Vue from 'vue'
import App from './App.vue'
import router from './router/router.js'
import store from './store/store.js'
// 商品详情轮播图 -zy


// vant 商品详情轮播图 -zy
// import Vant from 'vant';
// import 'vant/lib/index.css';
// Vue.use(Vant);
import { Swipe, SwipeItem } from "vant";
Vue.use(Swipe);
Vue.use(SwipeItem);

import { SwipeCell } from 'vant';

Vue.use(SwipeCell);

import { Button } from 'vant';

Vue.use(Button);


new Vue({
  router: router,
  store,
  render: h => h(App)
}).$mount('#app')