export const state = () => ({
  active: false,
  currentSeconds: 0,
  totalSeconds: 7200,
  intervalId: null,
  formattedSeconds: 0,
  formattedMinutes: 0,
  formattedHours: 0
})

export const mutations = {
  start (state, exerciseDuration) {
    state.totalSeconds = exerciseDuration
    state.active = true
  },
  increment (state) {
    state.currentSeconds += 1
  },
  setIntervalId (state, intervalId) {
    state.intervalId = intervalId
  },
  stop (state) {
    state.active = false
    state.currentSeconds = 0
  }
}

export const plugin = (store) => {
  // called when the store is initialized
  store.subscribe((mutation, state) => {
    if (mutation.type === 'timer/start' && state.timer.intervalId === null) {
      const intervalId = setInterval(() => {
        store.commit('timer/increment')
      }, 1000)
      store.commit('timer/setIntervalId', intervalId)
    }
    if (mutation.type === 'timer/stop' && state.timer.intervalId !== null) {
      clearInterval(state.timer.intervalId)
      store.commit('timer/setIntervalId', null)
    }
    if (state.timer.intervalId !== null && state.timer.currentSeconds >= state.timer.totalSeconds) {
      clearInterval(state.timer.intervalId)
      store.commit('timer/setIntervalId', null)
    }
  })
}

export const actions = {
  start ({ commit, rootState }, exerciseDuration) {
    commit('start', exerciseDuration)
  },
  stop ({ commit, rootState }) {
    commit('stop')
  }
}

export const formatSecondsIntoTime = (seconds) => {
  const formattedSeconds = seconds % 60
  const formattedMinutes = Math.floor(seconds / 60) % 60
  const formattedHours = Math.floor(seconds / 3600)
  return formattedHours + ':' + formattedMinutes + ':' + formattedSeconds
}
