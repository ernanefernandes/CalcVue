import Vue from 'vue';
import Router from 'vue-router';
import Calculadora from '@/components/calculadora/Index.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Calculadora',
      component: Calculadora,
    },
  ],
});
