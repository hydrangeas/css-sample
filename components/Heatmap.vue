<template>
  <div style="height:400px; width:800px">
    <canvas id="heatMap"></canvas>
  </div>
</template>

<script>
const mapHeight = 20
const mapWidth = 40

// データセットの生成
const generateDatasets = function() {
  const datasets = []
  for (let i = 0; i < mapHeight; i++) {
    datasets.push({
      data: new Array(mapWidth).fill(1),
      borderWidth: 0.2,
      borderColor: '#FFFFFF',
      backgroundColor: 'skyblue'
    })
  }
  return datasets
}

// データラベルの生成
const generateLabels = function() {
  const labels = []
  for (let i = 1; i < mapWidth + 1; i++) {
    labels.push(i)
  }
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
      type: 'bar',
      data: {
        datasets: generateDatasets(),
        labels: generateLabels()
      },
      options: {
        title: {
          display: true,
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
                color: '#FFFFFF'
              },
              barPercentage: 0.99,
              categoryPercentage: 0.99,
              stacked: true,
              ticks: {
                min: 0,
                display: false
              }
            }
          ],
          yAxes: [
            {
              gridLines: {
                color: '#FFFFFF',
                zeroLineWidth: 0
              },
              stacked: true,
              ticks: {
                min: 0,
                stepSize: 1,
                display: false
              }
            }
          ]
        }
      }
    })
  }
}
</script>
