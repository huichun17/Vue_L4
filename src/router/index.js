import { createRouter, createWebHistory } from 'vue-router'
import VBind from '../views/VBind.vue'
import Home from '../views/Home.vue'
import Notifications from '../views/Notifications.vue'
import Props from '../views/Props.vue'
import Emit from '../views/Emit.vue'
import VShow from '../views/VShow.vue'
import RouterView from '../views/RouterView.vue'
import Modal from '../views/Modal.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/v-bind',
      name: 'VBind',
      component: VBind //要顯示的原件
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home //要顯示的原件
    }, {
      path: '/Notifications',
      name: 'Notifications',
      component: Notifications //要顯示的原件
    }, {
      path: '/Props',
      name: 'Props',
      component: Props //要顯示的原件
    }, {
      path: '/emit',
      name: 'Emit',
      component: Emit //要顯示的原件，import的變數
    }, {
      path: '/VShow',
      name: 'VShow',
      component: VShow //要顯示的原件，import的變數
    },
    {
      path: '/router-view',
      name: 'RouterView',
      component: RouterView //要顯示的原件，import的變數
    },
    {
      path: '/Modal',
      name: 'Modal',
      component: Modal //要顯示的原件，import的變數
    },
  ]
})
export default router
