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
  start (state) {
    state.active = true
  },
  increment (state) {
    state.currentSeconds += 1
    state.formattedSeconds = state.currentSeconds % 60
    state.formattedMinutes = Math.floor(state.currentSeconds / 60) % 60
    state.formattedHours = Math.floor(state.currentSeconds / 3600)
  },
  setIntervalId (state, intervalId) {
    state.intervalId = intervalId
  },
  stop (state) {
    state.active = false
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
  start ({ commit, rootState }) {
    commit('start')
  },
  stop ({ commit, rootState }) {
    commit('stop')
  }
}
