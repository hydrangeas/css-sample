export const state = () => ({
  errorHistories: []
})

export const getters = {
  errorHistories: (state) => state.errorHistories
}

export const mutations = {
  addHistory(state, { histories }) {
    state.errorHistories = histories
  }
}

export const actions = {
  fetchErrorHistories({ commit }) {
    const history = []
    // Sat -12
    history.push(1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1)
    // Sat -24
    history.push(1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1)
    // Sat -36
    history.push(1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1)
    // Sat -48
    history.push(1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1)
    // Fri -12
    history.push(5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5)
    // Fri -24
    history.push(1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1)
    // Fri -36
    history.push(1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1)
    // Fri -48
    history.push(1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1)
    // Thu -12
    history.push(1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1)
    // Thu -24
    history.push(1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1)
    // Thu -36
    history.push(1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1)
    // Thu -48
    history.push(1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1)
    // Wed -12
    history.push(1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1)
    // Wed -24
    history.push(1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1)
    // Wed -36
    history.push(1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1)
    // Wed -48
    history.push(1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1)
    // Tue -12
    history.push(1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1)
    // Tue -24
    history.push(1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1)
    // Tue -36
    history.push(1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1)
    // Tue -48
    history.push(1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1)
    // Mon -12
    history.push(1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1)
    // Mon -24
    history.push(1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1)
    // Mon -36
    history.push(1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1)
    // Mon -48
    history.push(1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1)
    // Sun -12
    history.push(1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1)
    // Sun -24
    history.push(1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1)
    // Sun -36
    history.push(1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1)
    // Sun -48
    history.push(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)

    commit('addHistory', { histories: history })
  }
}
