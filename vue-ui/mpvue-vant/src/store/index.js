import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    openId: '',
    authUserInfo: false
  },
  getters: {
    isLogin: state => {
      return state.authUserInfo && !!state.openId;
    }
  },
  mutations: {
    updateOpenId(state, openId) {
      state.openId = openId;
    },

    updateAuthUserInfo(state, authUserInfo) {
      state.authUserInfo = authUserInfo;
    }
  }
});
