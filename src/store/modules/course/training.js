import axios from 'axios'
import gen from '../gen'
import router from './../../../router'
import {ServerUrl} from '../../../variables/config'

const state = {
  training: {},
  batches: {},
  instructorled: {},
  selfpaced: {}
}

const getters = {
  training: state => state.training,
  batches: state => state.batches,
  selfpaced: state => state.selfpaced,
  instructorled: state => state.instructorled
}

const mutations = {
  getcontent (state, payload) {
    state.sessionlist = {}
    console.log(payload)
    let url = ServerUrl.url
    let deployUrl = url + 'getcontent'
    axios.get(deployUrl, {
      params: {
        id: payload
      }
    })
      .then(function (response) {
        console.log(response.data)
        let dataLength = response.data.length
        if (dataLength === 0)
        {
          gen.state.loader = false
          gen.state.patchUpdateDom = !gen.state.patchUpdateDom
        }
        let i = 0
        let flag = 0
        for (i in response.data) {
          let demoVideo = 'https://player.vimeo.com/video/' + response.data[i].demoVideo + '?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0'
          let demoDoc = response.data[i].demoDoc + '#view=fit' + '&navpanes=0' + '&toolbar=0'
          state.sessionlist[response.data[i]._id] = {
            sessionNo: response.data[i].sessionNo,
            title: response.data[i].Title,
            shortDescription: response.data[i].shortDescription,
            demoVideo: demoVideo,
            demoDoc: demoDoc
          }
          flag++
          if (flag === dataLength) {
            console.log(state.sessionlist)
            gen.state.loader = false
            gen.state.patchUpdateDom = !gen.state.patchUpdateDom
          }
        }
      })
      .catch(function (error) {
        console.log(error)
        gen.state.loader = false
        gen.state.patchUpdateDom = !gen.state.patchUpdateDom
      })
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
