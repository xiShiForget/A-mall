import Vue from 'vue'
import Router from 'vue-router'

import nav from '../components/nav.vue'
import homePage from '../components/homePage/homePages.vue'
import classify from '../components/classify/classify.vue'
import search from '../components/search.vue'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  routes: [
    {path:'/nav',name:'nav',component:nav,
    children:[
    {path:"首页",name:"首页",component:homePage},
    {path:"分类",name:"分类",component:classify},

    ]
    },
    {path:"/search",name:"search",component:search}

  ]
})
