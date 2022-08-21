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
      axios.$get('/api/user/' + user.id + '/dog')
        .then(function (dog) {
          commit('setUser', user)
          if (dog.courseInterest) {
            commit('preferences/updateDenTraining', dog.courseInterest.denTraining, { root: true })
            commit('preferences/updatePreDepartureTraining', dog.courseInterest.preDepartureTraining, { root: true })
            commit('preferences/updateLeaveTraining', dog.courseInterest.leaveTraining, { root: true })
          }
          delete dog.courseInterest
          commit('dog/setDog', dog, { root: true })
        }).catch(function () {
          commit('setUser', user)
        })
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
        console.log('UPGRADED ' + userUuid)
        commit('upgradeSuccess')
      }).catch(function (error) {
        console.log(error)
        router.push('/training/upgrade/cancel')
      })
  }
}
