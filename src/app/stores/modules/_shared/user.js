const user = {
  state: {
    userData: null
  },
  mutations: {
    setUserData(state, userData) {
      state.userData = userData;
    }
  },
  actions: {
    setUserData({state, commit}, userData) {
      commit('setUserData', userData);
    }
  },
  getters: {
    getUserData(state) {
      return state.userData;
    }
  },
}

export default user;