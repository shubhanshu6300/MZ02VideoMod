import Vue from 'vue'
import Router from 'vue-router'

const AccessCourse = resolve => {
  require.ensure(['@/components/Course/AccessCourse'],()=>{
    resolve(require('@/components/Course/AccessCourse'));
  });
};

const Home = resolve => {
  require.ensure(['@/components/Home'],()=>{
    resolve(require('@/components/Home'));
  });
};

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/AccessCourse/:id',
      name: 'AccessCourse',
      component: AccessCourse
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
