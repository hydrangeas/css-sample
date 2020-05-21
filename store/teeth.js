import axios from 'axios'

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
  async fetchTeethHistories({ commit }) {
    const counts = []
    const labels = []
    await axios
      .get(
        'https://gist.githubusercontent.com/hydrangeas/1ada34517140487aaa99964c5f29b796/raw/653a71d370adf48497f2a2b5e74e468804ae0d4c/SampleTeeth.json'
      )
      .then((response) => {
        const json = response.data
        const myFilter = (array, query) => {
          return array.filter((element) => {
            if (element.DayOfWeek.includes(query)) return true
            return false
          })
        }
        const mySort = (a, b) => {
          return new Date(a.Date).getTime() - new Date(b.Date).getTime()
        }
        const addData = (array) => {
          array.forEach((element) => {
            counts.push(element.Data)
            labels.push(element.Date)
          })
        }

        // Sat
        addData(myFilter(json, 'Sat').sort(mySort))
        // Fri
        addData(myFilter(json, 'Fri').sort(mySort))
        // Thu
        addData(myFilter(json, 'Thu').sort(mySort))
        // Wed
        addData(myFilter(json, 'Wed').sort(mySort))
        // Tue
        addData(myFilter(json, 'Tue').sort(mySort))
        // Mon
        addData(myFilter(json, 'Mon').sort(mySort))
        // Sun
        addData(myFilter(json, 'Sun').sort(mySort))

        // eslint-disable-next-line
        commit('updateTeethHistories', { teethHistories: counts })
        commit('updateTeethLabels', { teethLabels: labels })
      })
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
