export const state = () => ({
  errorCounts: []
})

export const getters = {
  errorCounts: (state) => state.errorCounts
}

export const mutations = {
  addErrorCounts(state, { errorCounts }) {
    state.errorCounts = errorCounts
  }
}

export const actions = {
  fetchErrorCounts({ commit }) {
    const counts = []
    // Sat -12
    counts.push(0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1)
    // Sat -24
    counts.push(1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1)
    // Sat -36
    counts.push(1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1)
    // Sat -48
    counts.push(1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1)
    // Fri -12
    counts.push(5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5)
    // Fri -24
    counts.push(1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1)
    // Fri -36
    counts.push(1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1)
    // Fri -48
    counts.push(1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1)
    // Thu -12
    counts.push(1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1)
    // Thu -24
    counts.push(1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1)
    // Thu -36
    counts.push(1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1)
    // Thu -48
    counts.push(1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1)
    // Wed -12
    counts.push(1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1)
    // Wed -24
    counts.push(1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1)
    // Wed -36
    counts.push(1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1)
    // Wed -48
    counts.push(1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1)
    // Tue -12
    counts.push(1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1)
    // Tue -24
    counts.push(1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1)
    // Tue -36
    counts.push(1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1)
    // Tue -48
    counts.push(1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1)
    // Mon -12
    counts.push(1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1)
    // Mon -24
    counts.push(1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1)
    // Mon -36
    counts.push(1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1)
    // Mon -48
    counts.push(1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1)
    // Sun -12
    counts.push(1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1)
    // Sun -24
    counts.push(1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1)
    // Sun -36
    counts.push(1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1)
    // Sun -48
    counts.push(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)

    commit('addErrorCounts', { errorCounts: counts })
  }
}
