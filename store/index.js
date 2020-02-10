export const state = () => ({
  compatibleBrowser: true,
  iteration: 0,
  words: [
    {english: 'water', spanish: 'agua'},
    {english: 'yes', spanish: 'sí'},
    {english: 'nothing', spanish: 'nada'}
  ],
  answer: null,
  initial: null,
  drawer: false
})

export const actions = {}

export const mutations = {
  setCompatibleBrowser(state, boolean) {
    state.compatibleBrowser = boolean
  },
  resetIteration(state) {
    state.iteration = 0
  },
  increaseIteration(state) {
    state.iteration += 1
  },
  setAnswer(state, answer) {
    state.answer = answer
  },
  setInitial(state, initial) {
    state.initial = initial
  },
  setDrawer(state, boolean) {
    state.drawer = boolean
  }
}

export const getters = {
  compatibleBrowser(state) {
    return state.compatibleBrowser
  },
  iteration(state) {
    return state.iteration
  },
  words(state) {
    return state.words
  },
  answer(state) {
    return state.answer
  },
  initial(state) {
    return state.initial
  },
  drawer(state) {
    return state.drawer
  }
}
