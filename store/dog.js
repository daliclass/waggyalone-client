export const state = () => ({
  dog: null
})

export const mutations = {
  add (state, dog) {
    state.dog = dog
  }
}

export const actions = {
  add ({ commit, rootState }, dogInput) {
    const axios = this.$axios
    const userId = rootState.authorization.user.id
    dogInput.userId = userId
    axios.$post('/api/dog', dogInput)
      .then(function (dog) {
        commit('add', dog)
      })
  }
}
