import { createRouter, createWebHistory } from 'vue-router'
import VBind from '../views/VBind.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/v-bind',
      name: 'VBind',
      component: VBind
    },
  ]
})

