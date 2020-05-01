<template>
  <div style="position: relative; width:100%">
    <canvas id="heatMap" />
  </div>
</template>

<script>
const mapHeight = 48
const mapWidth = 7

// データのランダム生成
const datalist = (function() {
  const dlist = []
  for (let i = 0; i < mapHeight * mapWidth; i++) {
    dlist.push(Math.random())
  }
  return dlist
})()

// データセットの生成
const generateDatasets = function() {
  const datasets = []
  for (let i = 0; i < mapHeight; i++) {
    datasets.push({
      data: new Array(mapWidth).fill(1),
      borderWidth: 0.2,
      borderColor: '#FFFFFF',
      backgroundColor: generateColor(i)
    })
  }
  return datasets
}

// 色配列の生成
const generateColor = function(y) {
  const datasetColors = []
  for (let x = 0; x < mapWidth; x++) {
    const opa = (
      datalist[x + (mapHeight - y - 1) * mapWidth] * 0.7 +
      0.3
    ).toFixed(2)
    datasetColors.push('rgba(135,206,235,' + opa + ')')
  }
  return datasetColors
}

// データラベルの生成
const generateLabels = function() {
  const labels = ['', 'Mon', '', 'Wed', '', 'Fri', '']
  return labels
}
export default {
  components: {},
  data() {
    return {}
  },
  mounted() {
    const ctx = document.getElementById('heatMap').getContext('2d')
    const heatMap = new Chart(ctx, { // eslint-disable-line
      type: 'horizontalBar',
      data: {
        datasets: generateDatasets(),
        labels: generateLabels()
      },
      options: {
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
        animation: {
          duration: 0
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
              const val = datalist[x + y * mapHeight]
              return 'dataVal - ' + val
            }
          }
        }
      }
    })
  }
}
</script>
