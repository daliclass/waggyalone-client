export const state = () => ({
  user: null,
  userErrorAuthenticating: false,
  loggedIn: false
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
  }
}

function createFacebookUser (facebookUser, commit, axios) {
  axios.$post('/api/user/fb', facebookUser)
    .then(function (user) {
      commit('setUser', user)
    })
    .catch(function () {
      commit('failedLogin')
    })
}

function lookupUserFromFacebookUser (facebookUser, commit, axios) {
  axios.$get('/api/user/fb/' + facebookUser.id, facebookUser)
    .then(function (user) {
      commit('setUser', user)
    })
    .catch(function () {
      commit('failedLogin')
    })
}

export const actions = {
  continueWithFacebook ({ commit }) {
    const axios = this.$axios
    window.FB.getLoginStatus(function (response) {
      if (response.status === 'connected') {
        window.FB.api('/me', { fields: 'id,first_name,last_name,name,email' }, function (facebookUser) {
          lookupUserFromFacebookUser(facebookUser, commit, axios)
        })
      } else {
        window.FB.login(function (response) {
          if (response.status === 'connected') {
            window.FB.api('/me', { fields: 'id,first_name,last_name,name,email' }, function (facebookUser) {
              createFacebookUser(facebookUser, commit, axios)
            })
          } else {
            commit('failedLogin')
          }
        }, { scope: 'public_profile,email' })
      }
    })
  },
  logout (context) {
    context.commit('logout')
  }
}
