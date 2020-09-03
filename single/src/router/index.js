import Vue from "vue";
import VueRouter from "vue-router"
import index from '../pages/index.vue'
import create from '../pages/create.vue'
import show from '../pages/show.vue'
import edit from '../pages/edit.vue'
import login from '../pages/login.vue'
import register  from '../pages/register.vue'
Vue.use(VueRouter)

const routes = [
{
path: '/',
name: 'home',
component: index,
},
{
path: '/create',
name: 'create',
component: create,
},
{
path: '/show/:id',
name: 'show',
component:show,
},
{
path: '/edit/:id',
name: 'edit',
component:edit,
},
{
path: '/login',
name: 'login',
component:login,
},
{
path: '/register',
name: 'register',
component:register,
},
]
const router = new VueRouter({
mode: 'history',
base: process.env.BASE_URL,
routes
})

export default router