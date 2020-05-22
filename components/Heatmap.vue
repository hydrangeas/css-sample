<template>
  <div class="ly_heatMapContainer">
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
    },
    heatMapLabel: {
      type: Array,
      default() {
        const dlist = []
        for (let i = 0; i < mapHeight * mapWidth; i++) {
          dlist.push('Unknown date')
        }
        return dlist
      }
    },
    heatMapKind: {
      type: Number,
      default() {
        return 0
      }
    }
  },
  data() {
    return {}
  },
  mounted() {
    const _heatMapSource = this.heatMapSource
    const _heatMapLabel = this.heatMapLabel
    const _heatMapKind = this.heatMapKind
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
          enabled: true,
          mode: 'point',
          bodyFontFamily: "'Noto Sans JP', sans-serif",
          custom(tooltip) {
            if (!tooltip) return
            // disable displaying the color box;
            tooltip.displayColors = false
          },
          callbacks: {
            title(tooltipItems, data) {
              const x = tooltipItems[0].datasetIndex
              const y = mapWidth - tooltipItems[0].index - 1
              return _heatMapLabel[x + y * mapHeight]
              // return x + ' x ' + y + ': '
            },
            label(tooltipItem, data) {
              const x = tooltipItem.datasetIndex
              const y = mapWidth - tooltipItem.index - 1
              const val = _heatMapSource[x + y * mapHeight]

              if (_heatMapKind === 0) {
                return val === 0 ? 'No Milled' : '' + val + ' milled'
              } else if (_heatMapKind === 1) {
                return val === 0 ? 'No Error' : '' + val + ' minutes'
              } else if (_heatMapKind === 2) {
                return val === 0 ? 'No Maintenance' : '' + val + ' times'
              }
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
      let data = 0
      let opa = 0
      for (let y = 0; y < mapHeight; y++) {
        data = this.heatMapSource[x + (mapWidth - y - 1) * mapHeight]
        opa = 0.3

        if (data >= 1) {
          if (this.heatMapKind === 0) {
            if (data >= 20) {
              opa = 1.0
            } else if (data >= 10) {
              opa = 0.8
            } else if (data >= 5) {
              opa = 0.6
            }
            datasetColors.push('rgba(135,206,235,' + opa + ')')
          } else if (this.heatMapKind === 1) {
            if (data >= 120) {
              opa = 1.0
            } else if (data >= 60) {
              opa = 0.8
            } else if (data >= 5) {
              opa = 0.6
            }
            datasetColors.push('rgba(255,100,100,' + opa + ')')
          } else if (this.heatMapKind === 2) {
            if (data >= 6) {
              opa = 1.0
            } else if (data >= 4) {
              opa = 0.8
            } else if (data >= 1) {
              opa = 0.6
            }
            datasetColors.push('rgba(128,255,128,' + opa + ')')
          }
        } else {
          datasetColors.push('rgba(239,239,239,' + opa + ')')
        }
      }
      return datasetColors
    }
  }
}
</script>

<style lang="scss" scoped>
.ly_heatMapContainer {
  position: relative;
  width: 100%;
}
@media screen and (max-width: 560px) {
  .ly_heatMapContainer {
    display: none;
  }
}
</style>
