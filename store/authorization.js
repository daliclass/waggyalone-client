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

export const actions = {
  continueWithFacebook (context) {
    window.FB.getLoginStatus(function (response) {
      if (response.status === 'connected') {
        window.FB.api('/me', { fields: 'id,first_name,last_name,name,email' }, function (response) {
          context.commit('setUser', response)
        })
      } else {
        window.FB.login(function (response) {
          if (response.status === 'connected') {
            window.FB.api('/me', { fields: 'id,first_name,last_name,name,email' }, function (response) {
              context.commit('setUser', response)
            })
          } else {
            context.commit('failedLogin')
          }
        }, { scope: 'public_profile,email' })
      }
    })
  },
  logout (context) {
    context.commit('logout')
  }
}
