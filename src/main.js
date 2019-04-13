// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Notifications from 'vue-notification'
import SocialSharing from 'vue-social-sharing'

import 'bulma/css/bulma.css'

Vue.config.productionTip = false

Vue.use(Notifications)
Vue.use(SocialSharing)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
