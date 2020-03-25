export const state = () => ({
  theme: 'dark'
})

export const mutations = {
  SET_THEME: (state, theme) => {
    state.theme = theme
  }
}

export const actions = {
  setTheme({ commit }, payload) {
    commit('SET_THEME', payload)
  }
}
