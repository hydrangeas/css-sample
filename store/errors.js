export const state = () => ({
  stopTime: 0,
  errorCounts: [],
  historyLabels: [],
  targetMonths: []
})

export const getters = {
  stopTime: (state) => state.stopTime,
  errorCounts: (state) => state.errorCounts,
  historyLabels: (state) => state.historyLabels,
  targetMonths: (state) => state.targetMonths
}

export const mutations = {
  updateStopTime(state, { stopTime }) {
    state.stopTime = stopTime
  },
  addErrorCounts(state, { errorCounts }) {
    state.errorCounts = errorCounts
  },
  addHistoryLabels(state, { historyLabels }) {
    state.historyLabels = historyLabels
  },
  addTargetMonths(state, { targetMonths }) {
    state.targetMonths = targetMonths
  }
}

export const actions = {
  fetchStopTime({ commit }) {
    commit('updateStopTime', { stopTime: 234 })
  },
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
  },
  fetchHistoryLabels({ commit }) {
    const historyLabel = []
    // Sat
    historyLabel.push('2020/05/01', '2020/04/01', '2020/04/01', '2020/04/01')
    historyLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
    historyLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
    historyLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
    historyLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
    historyLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
    historyLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
    historyLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
    historyLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
    historyLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
    historyLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
    historyLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
    // Fri
    historyLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
    historyLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
    historyLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
    historyLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
    historyLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
    historyLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
    historyLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
    historyLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
    historyLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
    historyLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
    historyLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
    historyLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
    // Thu
    historyLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
    historyLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
    historyLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
    historyLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
    historyLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
    historyLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
    historyLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
    historyLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
    historyLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
    historyLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
    historyLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
    historyLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
    // Wed
    historyLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
    historyLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
    historyLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
    historyLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
    historyLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
    historyLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
    historyLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
    historyLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
    historyLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
    historyLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
    historyLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
    historyLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
    // Tue
    historyLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
    historyLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
    historyLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
    historyLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
    historyLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
    historyLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
    historyLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
    historyLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
    historyLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
    historyLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
    historyLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
    historyLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
    // Mon
    historyLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
    historyLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
    historyLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
    historyLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
    historyLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
    historyLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
    historyLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
    historyLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
    historyLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
    historyLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
    historyLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
    historyLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
    // Sun
    historyLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
    historyLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
    historyLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
    historyLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
    historyLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
    historyLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
    historyLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
    historyLabel.push('2020/04/01', '2020/04/01', '2020/01/05', '2020/01/12')
    historyLabel.push('2020/01/19', '2020/01/26', '2020/02/02', '2020/02/09')
    historyLabel.push('2020/02/16', '2020/02/23', '2020/03/01', '2020/03/08')
    historyLabel.push('2020/03/15', '2020/03/22', '2020/03/29', '2020/04/12')
    historyLabel.push('2020/04/19', '2020/04/26', '2020/05/03', '2020/05/10')

    commit('addHistoryLabels', { historyLabels: historyLabel })
  },
  fetchTargetMonths({ commit }) {
    commit('addTargetMonths', { targetMonths: this.$getTargetMonths() })
  }
}
