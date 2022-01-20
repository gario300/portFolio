import Vue from 'vue'
import VueLazyload from 'vue-lazyload'
const loadimage = require('./../static/loading-buffering.gif')
Vue.use(VueLazyload, {
  preLoad: 1.9,
  error: 'dist/error.png',
  loading: loadimage,
  attempt: 1,
  listenEvents: ['scroll']
})
