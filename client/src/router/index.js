import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Ratings from '../views/Ratings.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/ratings/:id',
    name: 'Ratings',
    component: Ratings,
    props: true,
  },
];

// TODO: This isn't yet used to the fullest
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
