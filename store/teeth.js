export const state = () => ({
  teeth: 0
})

export const getters = {
  teeth: (state) => state.teeth
}

export const mutations = {
  updateTeeth(state, { teeth }) {
    state.teeth = teeth
  }
}

export const actions = {
  fetchTeeth({ commit }) {
    commit('updateTeeth', { teeth: 21 })
  }
}
