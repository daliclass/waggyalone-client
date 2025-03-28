export const state = () => ({
  dog: {
    name: '',
    birthMonth: undefined,
    birthYear: undefined,
    breed: '',
    gender: '',
    trainerEmail: ''
  }
})

export const mutations = {
  setDog(state, dog) {
    state.dog = dog
  },
  setName(state, name) {
    state.dog.name = name
  },
  setBirthMonth(state, birthMonth) {
    state.dog.birthMonth = birthMonth
  },
  setBirthYear(state, birthYear) {
    state.dog.birthYear = birthYear
  },
  setBreed(state, breed) {
    state.dog.breed = breed
  },
  setGender(state, gender) {
    state.dog.gender = gender
  },
  setTrainerEmail(state, trainerEmail) {
    state.dog.trainerEmail = trainerEmail
  }
}

export const actions = {
  add({ commit, rootState }) {
    const axios = this.$axios
    const userId = rootState.authorization.user.id
    const dogInput = rootState.dog.dog
    dogInput.userId = userId
    axios.$post('/api/dog', dogInput)
      .then(function (dog) {
        commit('setDog', dog)
      })
  },
  setName({ commit }, name) {
    commit('setName', name)
  },
  setBirthMonth({ commit }, birthMonth) {
    commit('setBirthMonth', birthMonth)
  },
  setBirthYear({ commit }, birthYear) {
    commit('setBirthYear', birthYear)
  },
  setBreed({ commit }, breed) {
    commit('setBreed', breed)
  },
  setGender({ commit }, gender) {
    commit('setGender', gender)
  },
  setTrainerEmail({ commit }, trainerEmail) {
    commit('setTrainerEmail', trainerEmail)
  }
}
