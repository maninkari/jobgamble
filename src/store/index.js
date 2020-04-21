export const state = () => ({
  counter: 0,
  lifes: 3
})

export const getters = {
  getLifes(state) {
    return state.lifes
  }
}

export const mutations = {
  increment(state) {
    state.counter++
  },
  setLifes(state, n) {
    state.lifes = n
  }
}
