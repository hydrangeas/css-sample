<template>
  <div style="position: relative; width:100%">
    <canvas id="heatMap" />
  </div>
</template>

<script>
const mapHeight = 48
const mapWidth = 7

export default {
  components: {},
  props: {
    heatMapSource: {
      type: Array,
      default() {
        const dlist = []
        for (let i = 0; i < mapHeight * mapWidth; i++) {
          // dlist.push(Math.random())
          dlist.push((0.1 * i).toFixed(2))
        }
        return dlist
      }
    }
  },
  data() {
    return {}
  },
  beforeUpdate() {
    // eslint-disable-next-line
    console.log(this.heatMapSource)
  },
  updated() {
    // eslint-disable-next-line
    console.log(this.heatMapSource)
  },
  mounted() {
    const _heatMapSource = this.heatMapSource
    const ctx = document.getElementById('heatMap').getContext('2d')
    const heatMap = new Chart(ctx, { // eslint-disable-line
      type: 'horizontalBar',
      data: {
        datasets: this.generateDatasets(),
        labels: ['', 'Mon', '', 'Wed', '', 'Fri', '']
      },
      options: {
        animation: false,
        responsive: true,
        maintainAspectRatio: true,
        aspectRatio: 48 / 8,
        title: {
          display: false,
          text: 'Heat Map Sample',
          fontSize: 18
        },
        legend: {
          display: false
        },
        scales: {
          xAxes: [
            {
              gridLines: {
                color: '#FFFFFF',
                zeroLineWidth: 0
              },
              stacked: true,
              ticks: {
                min: 0,
                stepSize: 1,
                display: false,
                padding: 0
              }
            }
          ],
          yAxes: [
            {
              gridLines: {
                color: '#FFFFFF'
              },
              barPercentage: 0.99,
              categoryPercentage: 0.99,
              stacked: true,
              ticks: {
                min: 0,
                display: true
              }
            }
          ]
        },
        tooltips: {
          mode: 'point',
          callbacks: {
            title(tooltipItems, data) {
              const x = tooltipItems[0].datasetIndex
              const y = mapWidth - tooltipItems[0].index - 1
              return x + ' x ' + y + ': '
            },
            label(tooltipItem, data) {
              const x = tooltipItem.datasetIndex
              const y = mapWidth - tooltipItem.index - 1
              const val = _heatMapSource[x + y * mapHeight]
              return 'dataVal - ' + val
            }
          }
        }
      }
    })
  },
  methods: {
    generateDatasets() {
      const datasets = []
      for (let i = 0; i < mapHeight; i++) {
        datasets.push({
          data: new Array(mapWidth).fill(1),
          borderWidth: 0.2,
          borderColor: '#FFFFFF',
          backgroundColor: this.generateColor(i),
          hoverBackgroundColor: this.generateColor(i),
          hoverBorderColor: new Array(mapWidth).fill('#FFFFFF')
        })
      }
      return datasets
    },
    generateColor(x) {
      const datasetColors = []
      let teeth = 0
      let opa = 0
      for (let y = 0; y < mapHeight; y++) {
        teeth = this.heatMapSource[x + (mapWidth - y - 1) * mapHeight]
        opa = 0.3

        if (teeth >= 1) {
          if (teeth >= 20) {
            opa = 1.0
          } else if (teeth >= 10) {
            opa = 0.8
          } else if (teeth >= 5) {
            opa = 0.6
          }
          datasetColors.push('rgba(135,206,235,' + opa + ')')
        } else {
          datasetColors.push('rgba(239,239,239,' + opa + ')')
        }
      }
      return datasetColors
    }
  }
}
</script>
