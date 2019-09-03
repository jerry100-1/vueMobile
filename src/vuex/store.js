import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)


export default new Vuex.Store({
  state: {
    token: localStorage.getItem('token'),
    userInfo: JSON.parse(localStorage.getItem('userInfo') || '{}')
  },
  getters:{
  },
  mutations: {
      setUserInfoAndToken(state, userInfo) {
      state.token = userInfo.token
      state.userInfo = userInfo
      localStorage.setItem("token", userInfo.token);
      localStorage.setItem("userInfo", JSON.stringify(userInfo));
    }
  },
  actions: {
  }
})