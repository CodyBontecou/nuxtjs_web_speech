export const state = () => ({
  compatibleBrowser: true,
  iteration: 0,
  words: [
    {english: 'water', spanish: 'agua'},
    {english: 'yes', spanish: 'sí'},
    {english: 'nothing', spanish: 'nada'}
  ],
  word: null,

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
  setWord(state, word) {
    state.word = word
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
  word(state) {
    return state.word
  }
}
