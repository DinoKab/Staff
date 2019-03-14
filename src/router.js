import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Worker from './views/Worker.vue'
import Profile from './views/Profile.vue'
import Signin from './views/Signin.vue'
import Signup from './views/Signup.vue'
import AddEmployee from './views/AddEmployee.vue'
import Edit from './views/Edit.vue'
import Store from './store'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      beforeEnter: AuthGuard
    },
    {
      path: '/worker/:id',
      name: 'worker',
      component: Worker,
      props: true,
      beforeEnter: AuthGuard
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile,
      beforeEnter: AuthGuard
    },
    {
      path: '/signin',
      name: 'signin',
      component: Signin
    },
    {
      path: '/signup',
      name: 'signup',
      component: Signup
    },
    {
      path: '/addEmployee',
      name: 'addEmployee',
      component: AddEmployee,
      beforeEnter: AuthGuard
    },
    {
      path: '/edit',
      name: 'edit',
      component: Edit,
      beforeEnter: AuthGuard
    },
    {
      path: '/*',
      name: 'signin',
      component: Signin
    }
  ],
  mode: 'history'
})

function AuthGuard (from, to, next) {
  if (Store.getters.isUserAuthenticated) next()
  else next('/signin')
}
