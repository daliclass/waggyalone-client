export const state = () => ({
  id: null,
  trainingSessions: [],
  currentMilestone: 0,
  currentSeparationDuration: 0,
  nextSeparationDuration: 0,
  nextTrainingSession: {
    details: {
      title: 'title',
      description: 'description'
    }
  }
})

export const mutations = {
  set (state, trainingPlan) {
    state.id = trainingPlan.id
    state.currentMilestone = trainingPlan.currentMilestone
    state.currentSeparationDuration = trainingPlan.currentSeparationDuration
    state.nextSeparationDuration = trainingPlan.nextSeparationDuration
    state.trainingSessions = trainingPlan.trainingSessions
      .filter((trainingSession) => { return trainingSession.grade != null })
    state.nextTrainingSession = trainingPlan
      .trainingSessions
      .filter((trainingSession) => { return trainingSession.grade == null })[0]
  }
}

export const actions = {
  get ({ commit, rootState }) {
    const axios = this.$axios
    const dogId = rootState.dog.dog.id
    axios.$get('/api/training/' + dogId)
      .then(function (trainingPlan) {
        commit('set', trainingPlan)
      })
  }
}
