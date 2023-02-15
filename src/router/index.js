import { createRouter, createWebHistory } from 'vue-router';

import HomeView from '../home/HomeView.vue';
import FishView from '../fish/FishView.vue';
import FishInfo from '../fish/FishInfo.vue';
import ProfileView from '../profile/ProfileView.vue';
import SideBarFish from '../sidebar/SideBarFish.vue';
import SideBarShop from '../sidebar/SideBarShop.vue';
import ShopView from '../shop/ShopView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      component: HomeView,
      path: '/',
    },
    {
      components: {
        default: FishView,
        sidebar: SideBarFish,
      },
      path: '/fish',
    },
    {
      component: FishInfo,
      path: '/fish/:id',
    },
    {
      component: ProfileView,
      path: '/profile/:id',
      beforeEnter(to, from, next) {
        // fantastisk koll här...
        const isAuth = to.params.id.length > 30;
        if (isAuth) next();
        else next('/');
      },
    },
    {
      components: {
        default: ShopView,
        sidebar: SideBarShop,
      },
      path: '/shop',
    },
  ],
  linkActiveClass: 'active',
});

export default router;
