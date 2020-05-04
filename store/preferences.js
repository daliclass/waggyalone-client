export const state = () => ({
  denTraining: false,
  preDepartureTraining: false,
  leaveTraining: false
})

export const mutations = {
  updateDenTraining (state, isSet) {
    state.denTraining = isSet
  },
  updatePreDepartureTraining (state, isSet) {
    state.preDepartureTraining = isSet
  },
  updateLeaveTraining (state, isSet) {
    state.leaveTraining = isSet
  },
  save (state, preferences) {
    state = preferences
  }
}

export const actions = {
  updateDenTraining ({ commit }, isSet) {
    commit('updateDenTraining', isSet)
  },
  updatePreDepartureTraining ({ commit }, isSet) {
    commit('updatePreDepartureTraining', isSet)
  },
  updateLeaveTraining ({ commit }, isSet) {
    commit('updateLeaveTraining', isSet)
  },
  save ({ commit, rootState }) {
    const axios = this.$axios
    const preferences = rootState.preferences
    const dogId = rootState.dog.dog.id
    const userId = rootState.authorization.user.id

    preferences.dogId = dogId
    preferences.userId = userId

    axios
      .$post('/api/dog/preferences', preferences)
      .then(function (createdPreferences) {
        commit('save', createdPreferences)
      })
  }
}
