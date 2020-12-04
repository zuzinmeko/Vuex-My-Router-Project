import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Item from '../views/Item.vue'
import Subcategory from '../views/Subcategory.vue'
import Category from '../views/Category.vue'
import Brand from '../views/Brand.vue'
import ItemDetail from '../views/ItemDetail.vue'
import Cart from '../views/Cart.vue'
import Register from '../views/Register.vue'
import Login from '../views/Login.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/item',
    name: 'Item',
    component: Item
  },
{
    path: '/itemdetail/:id',
    name: 'ItemDetail',
    component: ItemDetail
  },

  {
    path: '/category',
    name: 'Category',
    component: Category
  },
  {
    path: '/subcategory',
    name: 'Subcategory',
    component: Subcategory
  },
  {
    path: '/brand',
    name: 'Brand',
    component: Brand
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
