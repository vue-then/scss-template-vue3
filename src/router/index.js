import { createRouter, createWebHashHistory } from 'vue-router'


const routes = [
  {
    path: "/",
    redirect: {
      name: "home",
    },
  },
  {
    path: '/home',
    name: 'home',
    component: () =>
				import(
					/* webpackChunkName: "home" */ "../views/Home.vue"
				),
  },
  
]

const router = createRouter({
  // createWebHistory
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
