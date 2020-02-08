export const state = () => ({
  compatibleBrowser: true
})

export const actions = {
}

export const mutations = {
  setCompatibleBrowser(state, boolean) {
    state.compatibleBrowser = boolean
  }
}

export const getters = {
  compatibleBrowser(state) {
    return state.compatibleBrowser
  }
}
