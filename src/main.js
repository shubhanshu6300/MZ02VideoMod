// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import Element from 'element-ui'

import Meta from 'vue-meta';

// css
import './assets/css/animate.css'
import './assets/css/bbpress.css'
import './assets/css/bootstrap-theme.css'
import './assets/css/bootstrap-theme.min.css'
import './assets/css/bootstrap.css'
import './assets/css/bootstrap.min.css'
import './assets/css/bxslider.css'
import './assets/css/carousel.css'
import './assets/css/custom.css'
import './assets/css/menu.css'
import './assets/css/stroke.css'
import './assets/css/style.css'
import './assets/rs-plugin/css/settings.css'

// fonts
import './assets/fonts/glyphicons-halflings-regular.eot'
import './assets/fonts/glyphicons-halflings-regular.svg'
import './assets/fonts/glyphicons-halflings-regular.ttf'
import './assets/fonts/glyphicons-halflings-regular.woff'
import './assets/fonts/Stroke-Gap-Icons.eot'
import './assets/fonts/Stroke-Gap-Icons.svg'
import './assets/fonts/Stroke-Gap-Icons.ttf'
import './assets/fonts/Stroke-Gap-Icons.woff'

import './assets/fonts/font-awesome-4.3.0/css/font-awesome.css'
import './assets/fonts/font-awesome-4.3.0/css/font-awesome.min.css'
import './assets/fonts/font-awesome-4.3.0/fonts/fontawesome-webfont.eot'
import './assets/fonts/font-awesome-4.3.0/fonts/fontawesome-webfont.svg'
import './assets/fonts/font-awesome-4.3.0/fonts/fontawesome-webfont.ttf'
import './assets/fonts/font-awesome-4.3.0/fonts/fontawesome-webfont.woff'
import './assets/fonts/font-awesome-4.3.0/fonts/fontawesome-webfont.woff2'
import './assets/fonts/font-awesome-4.3.0/fonts/FontAwesome.otf'


// store
import {store} from './store'

Vue.config.productionTip = false
Vue.use(Element)
Vue.use(Meta)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
