
import { AUTH, AUTH_ENDPOINTS } from '@/app/services/modules/auth-service';
import { API, ENDPOINTS } from '@/app/services/services';

const user = {
  state: {
    idToken: null,
    userId: null,
    user: null
  },
  mutations: {
    authUser (state, userData) {
      state.idToken = userData.token;
      state.userId = userData.userId;
    },
    storeUser (state, user) {
      state.user = user;
    }
  },
  actions: {
    register ({commit, dispatch}, authData) {
      AUTH.post(`:signUp?key=${process.env.VUE_APP_AUTH_API_KEY}`, {
        name: authData.name,
        email: authData.email,
        password: authData.password,
        returnSecureToken: true
      })
        .then(res => {
          console.log(res);
          commit('authUser', {
            token: res.data.idToken,
            userId: res.data.localId
          });
          dispatch('storeUser', authData);
        })
        .catch(err => console.log(err));
    },
    storeUser ({commit, state}, userData) {
      if (!state.idToken) {
        return;
      }
      API.post(`${AUTH_ENDPOINTS.POST_USERS}.json?auth=${state.idToken}`, userData)
      .then(res => console.log(res))
      .catch(err => console.log(err));
    },
    login ({commit}, authData) {
      AUTH.post(`:signInWithPassword?key=${process.env.VUE_APP_AUTH_API_KEY}`, {
        email: authData.email,
        password: authData.password,
        returnSecureToken: true
      })
        .then(res => {
          console.log(res);
          commit('authUser', {
            token: res.data.idToken,
            userId: res.data.localId
          })
        })
        .catch(err => console.log(err))
    },
    fetchUser ({commit, state}) {
      globalAxios.get('/users.json' + '?auth=' + state.idToken)
        .then(res => {
          console.log(res)
          // get all users
          const data = res.data
          const users = []
          for (let key in data) {
            const user = data[key]
            user.id = key
            users.push(user)
          }
          console.log(users)
          // set first user as authenticated user
          commit('storeUser', users[0])
        })
        .catch(err => console.log(err))
    }
  },
  getters: {
    getUser (state) {
      return state.user;
    }
  }
};

export default user;
