export const state = () => ({
  teeth: 0,
  teethHistories: [],
  teethLabels: [],
  millingActivities: []
})

export const getters = {
  teeth: (state) => state.teeth,
  teethHistories: (state) => state.teethHistories,
  teethLabels: (state) => state.teethLabels,
  millingActivities: (state) => state.millingActivities
}

export const mutations = {
  updateTeeth(state, { teeth }) {
    state.teeth = teeth
  },
  updateTeethHistories(state, { teethHistories }) {
    state.teethHistories = teethHistories
  },
  updateTeethLabels(state, { teethLabels }) {
    state.teethLabels = teethLabels
  },
  updateMillingActivities(state, { millingActivities }) {
    state.millingActivities = millingActivities
  }
}

export const actions = {
  fetchTeeth({ commit }) {
    commit('updateTeeth', { teeth: 21 })
  },
  fetchTeethHistories({ commit }) {
    const teeth = []
    // Sat -12
    teeth.push(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 0)
    // Sat -24
    teeth.push(1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1)
    // Sat -36
    teeth.push(1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1)
    // Sat -48
    teeth.push(1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1)
    // Fri -12
    teeth.push(1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1)
    // Fri -24
    teeth.push(1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1)
    // Fri -36
    teeth.push(1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1)
    // Fri -48
    teeth.push(1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1)
    // Thu -12
    teeth.push(1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1)
    // Thu -24
    teeth.push(1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1)
    // Thu -36
    teeth.push(1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1)
    // Thu -48
    teeth.push(1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1)
    // Wed -12
    teeth.push(1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1)
    // Wed -24
    teeth.push(1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1)
    // Wed -36
    teeth.push(1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1)
    // Wed -48
    teeth.push(1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1)
    // Tue -12
    teeth.push(1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1)
    // Tue -24
    teeth.push(1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1)
    // Tue -36
    teeth.push(1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1)
    // Tue -48
    teeth.push(1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1)
    // Mon -12
    teeth.push(1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1)
    // Mon -24
    teeth.push(1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1)
    // Mon -36
    teeth.push(1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1)
    // Mon -48
    teeth.push(1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1)
    // Sun -12
    teeth.push(1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1)
    // Sun -24
    teeth.push(1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1)
    // Sun -36
    teeth.push(1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1)
    // Sun -48
    teeth.push(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
    commit('updateTeethHistories', { teethHistories: teeth })
  },
  fetchTeethLabels({ commit }) {
    const teethLabel = []
    // Sat
    teethLabel.push('2020/12/01', '2020/04/01', '2020/04/01', '2020/04/01')
    teethLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
    teethLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
    teethLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
    teethLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
    teethLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
    teethLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
    teethLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
    teethLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
    teethLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
    teethLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
    teethLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
    // Fri
    teethLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
    teethLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
    teethLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
    teethLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
    teethLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
    teethLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
    teethLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
    teethLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
    teethLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
    teethLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
    teethLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
    teethLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
    // Thu
    teethLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
    teethLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
    teethLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
    teethLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
    teethLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
    teethLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
    teethLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
    teethLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
    teethLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
    teethLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
    teethLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
    teethLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
    // Wed
    teethLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
    teethLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
    teethLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
    teethLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
    teethLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
    teethLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
    teethLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
    teethLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
    teethLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
    teethLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
    teethLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
    teethLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
    // Tue
    teethLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
    teethLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
    teethLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
    teethLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
    teethLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
    teethLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
    teethLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
    teethLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
    teethLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
    teethLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
    teethLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
    teethLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
    // Mon
    teethLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
    teethLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
    teethLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
    teethLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
    teethLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
    teethLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
    teethLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
    teethLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
    teethLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
    teethLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
    teethLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
    teethLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
    // Sun
    teethLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
    teethLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
    teethLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
    teethLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
    teethLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
    teethLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
    teethLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
    teethLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
    teethLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
    teethLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
    teethLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
    teethLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
    commit('updateTeethLabels', { teethLabels: teethLabel })
  },
  fetchMillingActivities({ commit }) {
    const data = [
      { date: '2020/04/01 12:34:56', file: 'abc.prn', status: 'completed' },
      { date: '2020/04/02 07:52:21', file: 'xxx.prn', status: 'canceled' },
      { date: '2020/05/02 07:52:21', file: 'xxx.prn', status: 'canceled' }
    ]
    commit('updateMillingActivities', { millingActivities: data })
  }
}
