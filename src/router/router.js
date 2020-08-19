import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Cart from '../views/Cart.vue'
import Product from '../views/Product.vue'
import Classify from '../views/Classify.vue'
import Enter from '../views/Enter.vue'
import Search from '../views/Search.vue'
import Index from '../views/Index.vue'


const routes = [{
    path: '/',
    component: Index
  },
  {
    path: '/cartPath',
    component: Cart
  },

  {
    path: '/productPath',
    component: Product
  },

  {
    path: '/classifyPath',
    component: Classify
  },

  {
    path: '/enterPath',
    component: Enter
  },

  {
    path: '/searchPath',
    component: Search
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    return {
      x: 0,
      y: 0
    }
  }
})

router.beforeEach((to, from, next) => {
  // 让页面回到顶部
  document.documentElement.scrollTop = 0
  // 调用 next()，一定要调用 next 方法，否则钩子就不会被销毁
  next()
})

export default router