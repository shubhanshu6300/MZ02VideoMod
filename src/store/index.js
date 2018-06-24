import Vue from 'vue'
import Vuex from 'vuex'
// modules
import gen from './modules/gen'

// training
import training from './modules/course/training'

import course from './modules/course';

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    gen,
    training,
    course
  }
})
