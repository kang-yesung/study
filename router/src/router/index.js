import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [{
    path: '/',
    component: () => import('@/pages/Home.vue')
  },
  {
    path: '/about',
    component: ()=> import('@/pages/About.vue')
  },
  {
    path: '/members',
    component:()=> import('@/pages/Members.vue')
  },
  {
    path: '/members/:id',
    component: ()=> import('@/pages/MemberInfo.vue')
  },
  {
    path: '/videos',
    component: ()=> import('@/pages/Videos.vue')
  },
  {
    path: '/students',
    component: ()=> import('@/pages/Students.vue')
  }
  ],
})

export default router
