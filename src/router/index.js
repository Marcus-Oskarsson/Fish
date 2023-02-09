import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../home/HomeView.vue'
import FishView from '../fish/FishView.vue'
import FishInfo from '../fish/FishInfo.vue'
import SideBarFish from '../sidebar/SideBarFish.vue'
import SideBarStandard from '../sidebar/SideBarStandard.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      component: HomeView,
      path: '/'
    },
    {
      components: {
        default: FishView,
        sidebar: SideBarFish
      },
      path: '/fish'
    },
    {
      component: FishInfo,
      path: '/fish/:id'
    }
  ],
  linkActiveClass: 'active'
})

export default router
