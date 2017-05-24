// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Classic from './components/Classic'
import Notifications from './components/Notifications'
import Counter from './components/counter/counter'
import onTransition from './components/onTransition'
import Carousel from './components/carousel/Carousel'
import CarouselSlide from './components/carousel/CarouselSlide'

import User from './components/User'


import VueResource from 'vue-resource'


Vue.config.productionTip = false


Vue.use(VueResource)
Vue.http.options.root = 'http://jsonplaceholder.typicode.com'

Vue.http.interceptors.push((request, next) => {
  next((response) => {
    if (request.after) {
      request.after.call(this, response)
    }
  })
})


Vue.component('app-classic', Classic)
Vue.component('notifications', Notifications)
Vue.component('counter', Counter)
Vue.component('ontransition', onTransition)
Vue.component('carousel', Carousel)
Vue.component('carouslide', CarouselSlide)

Vue.component('app-user', User)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})

