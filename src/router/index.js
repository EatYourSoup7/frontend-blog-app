import Vue from 'vue';
import VueRouter from 'vue-router';

import Signup from '../views/Signup.vue';
import Login from '../views/Login.vue';
import Logout from '../views/Logout.vue';

import PostsIndex from '../views/PostsIndex.vue';
import PostsNew from '../views/PostsNew.vue';

Vue.use(VueRouter)

const routes = [
  {path: '/signup', name: 'signup', component: Signup},
  {path: '/login', name: 'login', component: Login},
  {path: '/logout', name: 'logout', component: Logout},

  {path: '/', name: 'root', component: PostsIndex},
  {path: '/posts', name: 'posts-index', component: PostsIndex}, 
  {path: '/posts/new', name: 'posts-new', component: PostsNew}
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
