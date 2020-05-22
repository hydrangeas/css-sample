<template>
  <div>
    <div class="ly_cont ly_cont__col">
      <tab-control-mobile :current-page="currentPage" />
      <aside class="ly_cont_side">
        <h2 class="el_lv4Heading">
          Apr 27, 2020
        </h2>
        <div class="ly_score_square">
          <div class="ly_score_container">
            <canvas id="radar"></canvas>
          </div>
        </div>
        <div class="ly_detail_container">
          <h4 class="el_detail_header">
            消耗品
          </h4>
          <div class="bl_item_container">
            <div class="el_item_title">
              ツール #1
            </div>
            <div class="el_item_content">
              012h15m / 025h00m
            </div>
          </div>
          <div class="bl_item_container">
            <div class="el_item_title">
              ツール #2
            </div>
            <div class="el_item_content">
              012h15m / 025h00m
            </div>
          </div>
          <div class="bl_item_container">
            <div class="el_item_title">
              ツール #3
            </div>
            <div class="el_item_content">
              012h15m / 025h00m
            </div>
          </div>
          <div class="bl_item_container">
            <div class="el_item_title">
              ツール #4
            </div>
            <div class="el_item_content">
              012h15m / 025h00m
            </div>
          </div>
          <div class="bl_item_container">
            <div class="el_item_title">
              ツール #5
            </div>
            <div class="el_item_content">
              012h15m / 025h00m
            </div>
          </div>
          <div class="bl_item_container">
            <div class="el_item_title">
              ツール #6
            </div>
            <div class="el_item_content">
              012h15m / 025h00m
            </div>
          </div>
          <div class="bl_item_container">
            <div class="el_item_title">
              ツール #7
            </div>
            <div class="el_item_content">
              012h15m / 025h00m
            </div>
          </div>
          <div class="bl_item_container">
            <div class="el_item_title">
              ツール #8
            </div>
            <div class="el_item_content">
              012h15m / 025h00m
            </div>
          </div>
          <div class="bl_item_container">
            <div class="el_item_title">
              ツール #9
            </div>
            <div class="el_item_content">
              012h15m / 025h00m
            </div>
          </div>
          <div class="bl_item_container">
            <div class="el_item_title">
              ツール #10
            </div>
            <div class="el_item_content">
              012h15m / 025h00m
            </div>
          </div>
          <div class="bl_item_container">
            <div class="el_item_title">
              ツール #11
            </div>
            <div class="el_item_content">
              012h15m / 025h00m
            </div>
          </div>
          <div class="bl_item_container">
            <div class="el_item_title">
              ツール #12
            </div>
            <div class="el_item_content">
              012h15m / 025h00m
            </div>
          </div>
          <div class="bl_item_container">
            <div class="el_item_title">
              ツール #13
            </div>
            <div class="el_item_content">
              012h15m / 025h00m
            </div>
          </div>
          <div class="bl_item_container">
            <div class="el_item_title">
              ツール #14
            </div>
            <div class="el_item_content">
              012h15m / 025h00m
            </div>
          </div>
          <div class="bl_item_container">
            <div class="el_item_title">
              ツール #15
            </div>
            <div class="el_item_content">
              012h15m / 025h00m
            </div>
          </div>
        </div>
        <div class="ly_detail_container">
          <h4 class="el_detail_header">
            日次
          </h4>
          <div class="bl_item_container">
            <div class="el_item_title">
              クリーニング
            </div>
            <div class="el_item_content">
              済
            </div>
          </div>
        </div>
        <div class="ly_detail_container">
          <h4 class="el_detail_header">
            定期
          </h4>
          <div class="bl_item_container">
            <div class="el_item_title">
              スピンドル
            </div>
            <div class="el_item_content">
              0120h15m / 2000h00m
            </div>
          </div>
        </div>
        <div class="ly_detail_container">
          <h4 class="el_detail_header">
            予防
          </h4>
          <div class="bl_item_container">
            <div class="el_item_title">
              自動補正
            </div>
            <div class="el_item_content">
              済
            </div>
          </div>
          <div class="bl_item_container">
            <div class="el_item_title">
              ならし運転
            </div>
            <div class="el_item_content">
              未
            </div>
          </div>
        </div>
      </aside>
      <div class="ly_cont_main">
        <tab-control-pc :current-page="currentPage" />
        <div class="ly_heatmap">
          <Heatmap
            :heat-map-source="maintenanceHistories"
            :heat-map-label="maintenanceLabels"
            :heat-map-kind="2"
          />
        </div>
        <!-- /bl_tabNav -->
        <div class="ly_activity">
          <h4 class="el_activity_header">
            Maintenance Activity
          </h4>
          <!-- /el_activity_header -->
          <div
            v-for="(month, index) in $getTargetMonths()"
            :key="index"
            class="ly_activity_monthly"
          >
            <div class="el_activity_monthly_header">
              {{ $getMonthName(month.getMonth()) + ' ' + month.getFullYear() }}
            </div>
            <!-- 表示付きのデータのみを抽出し、表示する -->
            <div
              v-for="(activity, key) in $getHistoryFilter(
                maintenanceActivities,
                month
              )"
              :key="key"
              :class="{ ly_activity_item: true }"
            >
              <div
                :class="{
                  el_milling_file: true,
                  setting: true
                }"
              >
                {{ activity.file }}
              </div>
            </div>
            <!-- 表示データがない場合、下記を表示する -->
            <div
              v-if="
                $getHistoryFilter(maintenanceActivities, month).length === 0
              "
              class="ly_activity_item"
            >
              No Maintenance
            </div>
          </div>
          <!-- /ly_activity_monthly -->
          <div class="ly_activity_monthly">
            <div class="el_activity_monthly_header">
              March 2020
            </div>
            <div class="ly_activity_item">
              No Milling
            </div>
          </div>
          <!-- /ly_activity_monthly -->
        </div>
        <!-- /ly_activity -->
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Heatmap from '~/components/Heatmap.vue'
import TabControlMobile from '~/components/library/TabControlMobile.vue'
import TabControlPc from '~/components/library/TabControlPc.vue'

export default {
  components: {
    Heatmap,
    TabControlMobile,
    TabControlPc
  },
  async asyncData({ store }) {
    await store.dispatch('maintenances/fetchScore')
    await store.dispatch('maintenances/fetchMaintenanceHistories')
    await store.dispatch('maintenances/fetchMaintenanceActivities')
  },
  data() {
    return {
      currentPage: 'maintenances'
    }
  },
  computed: {
    ...mapGetters('maintenances', [
      'score',
      'maintenanceHistories',
      'maintenanceLabels',
      'maintenanceActivities'
    ])
  },
  mounted() {
    const ctx = document.getElementById('radar')
    const myRadarChart = new Chart(ctx, { // eslint-disable-line
      type: 'radar',
      data: {
        labels: ['消耗品', '日次', '定期', '予防'],
        datasets: [
          {
            data: this.score,
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
<style lang="scss" scoped>
.ly_detail_container {
  margin: 15px 30px 0 30px;
}
.el_detail_header {
  font-size: 0.8em;
  font-weight: 600;
}
.bl_item_container {
  display: flex;
  margin: 5px 0;

  .el_item_title {
    font-size: 0.775rem;
  }
  .el_item_content {
    flex-grow: 3;
    text-align: right;
    font-size: 0.775rem;
  }
}
</style>
