import axios from 'axios'

export const state = () => ({
  stopTime: 0,
  errorCounts: [],
  historyLabels: [],
  targetMonths: [],
  errorHistories: []
})

export const getters = {
  stopTime: (state) => state.stopTime,
  errorCounts: (state) => state.errorCounts,
  historyLabels: (state) => state.historyLabels,
  targetMonths: (state) => state.targetMonths,
  errorHistories: (state) => state.errorHistories
}

export const mutations = {
  updateStopTime(state, { stopTime }) {
    state.stopTime = stopTime
  },
  updateErrorCounts(state, { errorCounts }) {
    state.errorCounts = errorCounts
  },
  updateHistoryLabels(state, { historyLabels }) {
    state.historyLabels = historyLabels
  },
  addTargetMonths(state, { targetMonths }) {
    state.targetMonths = targetMonths
  },
  updateErrorHistories(state, { errorHistories }) {
    state.errorHistories = errorHistories
  }
}

export const actions = {
  fetchStopTime({ commit }) {
    commit('updateStopTime', { stopTime: 234 })
  },
  async fetchErrorCounts({ commit }) {
    const counts = []
    const labels = []
    await axios
      .get(
        'https://gist.githubusercontent.com/hydrangeas/c34f17884aea766f54717a7e860be562/raw/e5fba69f14dc4c3e6ef7ad6b9e954a2c23fcaeec/SampleData'
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
        commit('updateErrorCounts', { errorCounts: counts })
        commit('updateHistoryLabels', { historyLabels: labels })
      })
  },
  fetchTargetMonths({ commit }) {
    commit('addTargetMonths', { targetMonths: this.$getTargetMonths() })
  },
  fetchErrorHistories({ commit }) {
    const history = [
      {
        date: '2020/04/01 12:34:56',
        errorId: '104F',
        errorParameter: '0101',
        type: 'fatal'
      },
      {
        date: '2020/04/02 07:52:21',
        errorId: '1017',
        errorParameter: '0001',
        type: 'resumable'
      },
      {
        date: '2020/05/02 07:52:21',
        errorId: '1017',
        errorParameter: '0002',
        type: 'recoverable'
      }
    ]
    commit('updateErrorHistories', { errorHistories: history })
  }
}
