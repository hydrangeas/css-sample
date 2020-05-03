<template>
  <aside class="ly_cont_side">
    <h2 class="el_lv4Heading">
      Apr 27, 2020
    </h2>
    <div class="ly_score_square">
      <div class="ly_score_container">
        <canvas id="radar"></canvas>
      </div>
    </div>
  </aside>
</template>
<script>
export default {
  mounted() {
    const ctx = document.getElementById('radar')
    const myRadarChart = new Chart(ctx, { // eslint-disable-line
      type: 'radar',
      data: {
        labels: ['消耗品', '日次', '定期', '予防'],
        datasets: [
          {
            data: [73, 95, 80, 87],
            backgroundColor: 'RGBA(115,255,25, 0.5)',
            borderColor: 'RGBA(115,255,25, 1)',
            borderWidth: 1,
            pointBackgroundColor: 'RGB(46,106,177)'
          }
        ]
      },
      options: {
        title: false,
        legend: false,
        aspectRatio: 1,
        scale: {
          pointLabels: {
            display: true
          },
          ticks: {
            fontSize: 0,
            min: 0,
            max: 100,
            stepSize: 50,
            callback(value, index, values) {
              return value
            }
          }
        },
        tooltips: {
          enabled: true,
          callbacks: {
            label(tooltipItem, data) {
              return data.datasets[tooltipItem.datasetIndex].data[
                tooltipItem.index
              ]
            }
          }
        }
      }
    })
  }
}
</script>
