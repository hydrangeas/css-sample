import axios from 'axios'

export const state = () => ({
  score: [0, 0, 0, 0],
  maintenanceHistories: [],
  maintenanceLabels: [],
  maintenanceActivities: []
})

export const getters = {
  score: (state) => state.score,
  maintenanceHistories: (state) => state.maintenanceHistories,
  maintenanceLabels: (state) => state.maintenanceLabels,
  maintenanceActivities: (state) => state.maintenanceActivities
}

export const mutations = {
  updateScore(state, { score }) {
    state.score = score
  },
  updateMaintenanceHistories(state, { maintenanceHistories }) {
    state.maintenanceHistories = maintenanceHistories
  },
  updateMaintenanceLabels(state, { maintenanceLabels }) {
    state.maintenanceLabels = maintenanceLabels
  },
  updateMaintenanceActivities(state, { maintenanceActivities }) {
    state.maintenanceActivities = maintenanceActivities
  }
}

export const actions = {
  fetchScore({ commit }) {
    commit('updateScore', { score: [25, 50, 75, 100] })
  },
  async fetchMaintenanceHistories({ commit }) {
    const counts = []
    const labels = []
    await axios
      .get(
        'https://gist.githubusercontent.com/hydrangeas/64b0e59b6b6e6d202b1d980a33d34664/raw/2d7299adcd735e294ab711e2701848493bb7d76e/SampleMaintenances.json'
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
        commit('updateMaintenanceHistories', { maintenanceHistories: counts })
        commit('updateMaintenanceLabels', { maintenanceLabels: labels })
      })
  },
  fetchMaintenanceActivities({ commit }) {
    const data = [
      { date: '2020/04/01 12:34:56', file: 'Cleaning Front' },
      { date: '2020/04/02 07:52:21', file: 'Change Tool #1' },
      { date: '2020/05/02 07:52:21', file: 'Change Tool #2' }
    ]
    commit('updateMaintenanceActivities', { maintenanceActivities: data })
  }
}
