import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  {
    path:'/webvip',
    name:'webvip',
    component:()=>import('../components/Webvip.vue/index.vue')
  },
  {
    path:'/commentsright',
    name:'commentsright',
    component:()=>import('../components/Comments/commentsright.vue')
  },
  {
    path:'/tabar',
    name:'tabar',
    component:()=>import('../components/Tabar/tabar.vue')
  },
  {
    path:'',
    redirect:'/index'
  },
  {
    path:'/index',
    name:'index',
    component:()=>import('../views/index.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
