export const state = () => ({
  user: null,
  userErrorAuthenticating: false,
  loggedIn: false,
  upgraded: null
})

export const mutations = {
  setUser (state, user) {
    state.user = user
    state.userErrorAuthenticating = false
    state.loggedIn = true
  },
  failedLogin (state) {
    state.userErrorAuthenticating = true
  },
  logout (state) {
    state.user = null
    state.loggedIn = false
  },
  upgradeSuccess (state) {
    state.upgraded = true
  }
}

export const actions = {
  continueWith ({ commit }) {
    this.$auth.loginWith('auth0');
  },
  setupUser ({ commit }, user) {
    const axios = this.$axios;
    const auth = this.$auth;
    axios.$post('/api/user/fb', user)
    .then(function (waUser) {
      axios.$get('/api/user/' + waUser.id + '/dog').then(function (dog) {
        commit('dog/setDog', dog, { root: true })
        commit('setUser', waUser)
      }).catch(function (error) {
        commit('setUser', waUser) 
      })
    }).catch(function (error) {
      commit('logout')
      auth.logout()
      commit('failedLogin')
    })
  },
  convertTokenToUser ({ commit }, accessToken) {
    const auth = this.$auth
    const router = this.$router
    auth.setUserToken(accessToken).then(() => {
      auth.init().then(() => {
        router.push('/training/start')
      });
    })
  },
  logout (context) {
    context.commit('logout');
    this.$auth.logout();
  },
  purchaseCourse ({ rootState }) {
    const axios = this.$axios
    const userId = rootState.authorization.user.id
    axios.$get('/api/create-checkout-session/' + userId)
      .then(function (response) {
        window.location.href = response.checkoutUrl
      })
  },
  upgradeSuccess ({ commit }, userUuid) {
    const router = this.$router
    const axios = this.$axios
    axios.$post('/api/purchased/' + userUuid)
      .then(function (response) {
        commit('upgradeSuccess')
      }).catch(function (error) {
        router.push('/training/upgrade/cancel')
      })
  }
}
