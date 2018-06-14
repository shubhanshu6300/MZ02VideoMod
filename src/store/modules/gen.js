import router from '../../router'

const state = {
  patchUpdateDom: false,
  loader: false,
  btnLoader: false
}

const getters = {
  patchUpdateDom: state => state.patchUpdateDom,
  loader: state => state.loader,
  btnLoader: state => state.btnLoader
}

const mutations = {
  goTo (state, path) {
    router.push(path)
  }
}

const actions = {
}

export default {
  mutations,
  state,
  getters,
  actions
}
