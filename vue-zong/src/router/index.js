import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Register from "../components/Register";
import Activate from "../components/Activate";
import Loginbacks from "../components/Loginbacks";
import FrontActivate from "../components/FrontActivate";

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'Register',
      component: Register
    },
    {
      path: '/loginbacks/helloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/activate',
      name: 'Activate',
      component: Activate
    },
    {
      path: '/loginbacks',
      name: 'Loginbacks',
      component: Loginbacks,
    },{
      path: '/frontActivate',
      name: 'FrontActivate',
      component: FrontActivate,
    }
  ]
})
