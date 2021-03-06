export const getters = {
  getTrainingSession (state) {
    return (id) => {
      const trainingSession = state.trainingSessions.filter((trainingSession) => {
        return trainingSession.id === id
      })

      if (trainingSession.length > 0) {
        return trainingSession[0]
      }

      return null
    }
  }
}

export const state = () => ({
  id: null,
  trainingSessions: [],
  currentMilestone: 0,
  currentSeparationDuration: 0,
  nextSeparationDuration: 0,
  currentExerciseId: 1,
  currentTrainingSession: {
    details: {
      title: null,
      description: null
    }
  },
  currentExercise: null,
  completedTrainingSessionId: null,
  hasNextMilestone: false,
  hasPreviousMilestone: false
})

export const mutations = {
  set (state, trainingPlan) {
    state.id = trainingPlan.id
    state.activeMilestoneId = trainingPlan.activeMilestoneId
    state.currentSeparationDuration = trainingPlan.currentSeparationDuration
    state.nextSeparationDuration = trainingPlan.nextSeparationDuration
    state.trainingSessions = trainingPlan.trainingSessions.reverse()
    state.currentTrainingSession = trainingPlan.currentTrainingSession
    state.hasPreviousMilestone = trainingPlan.hasPreviousMilestone
    state.hasNextMilestone = trainingPlan.hasNextMilestone
  },
  setCurrentExercise (state) {
    const exercises = state.currentTrainingSession.exercises.filter((exercise) => {
      return exercise.grade === null
    })

    if (exercises.length > 0) {
      state.currentExercise = exercises[0]
    } else {
      state.currentExercise = null
    }
  },
  completeExercise (state, grade) {
    state.currentExercise.grade = grade

    const exercises = state.currentTrainingSession.exercises.filter((exercise) => {
      return exercise.grade === null
    })

    if (exercises.length > 0) {
      state.currentExercise = exercises[0]
    } else {
      state.currentExercise = null
    }
  },
  completeTraining (state, values) {
    state.currentExercise.grade = values.grade
    state.completedTrainingSessionId = values.trainingSessionId
    state.currentExercise = null
  },
  removeCompletedTrainingSessionId (state) {
    state.completedTrainingSessionId = null
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
  },
  setCurrentExercise ({ commit, rootState }) {
    commit('setCurrentExercise')
  },
  completeExercise (store, grade) {
    const axios = this.$axios
    const trainingSessionId = store.state.currentTrainingSession.id
    const trainingPlanId = store.state.id
    const exerciseId = store.state.currentExercise.id
    const payload = {
      grade,
      trainingPlanId,
      trainingSessionId,
      exerciseId
    }
    axios.$put('/api/training/complete', payload)
      .then(function (response) {
        if (response.status === 'IN_PROGRESS') {
          store.commit('completeExercise', grade)
        }
        if (response.status === 'COMPLETED') {
          store.commit('completeTraining', { grade, trainingSessionId })
        }
      })
  },
  removeCompletedTrainingSessionId ({ commit }) {
    commit('removeCompletedTrainingSessionId')
  },
  skipMilestone ({ commit, rootState }) {
    const axios = this.$axios
    const trainingPlanId = rootState.trainingPlan.id
    axios.$put('/api/training/skipModule/' + trainingPlanId)
      .then(function (response) {
        const dogId = rootState.dog.dog.id
        axios.$get('/api/training/' + dogId)
          .then(function (trainingPlan) {
            commit('set', trainingPlan)
          })
      })
  },
  previousMilestone ({ commit, rootState }) {
    const axios = this.$axios
    const trainingPlanId = rootState.trainingPlan.id
    axios.$put('/api/training/previousModule/' + trainingPlanId)
      .then(function (response) {
        const dogId = rootState.dog.dog.id
        axios.$get('/api/training/' + dogId)
          .then(function (trainingPlan) {
            commit('set', trainingPlan)
          })
      })
  }
}
