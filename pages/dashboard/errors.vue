<template>
  <div>
    <Header />
    <div class="ly_cont ly_cont__col">
      <aside class="ly_cont_side">
        <h2 class="el_lv4Heading">
          Apr 27, 2020
        </h2>
        <div class="ly_score_square">
          <div class="ly_score_container">
            <div class="el_downtime_description" />
            <div class="el_downtime">
              {{ stopTime }}
            </div>
            <div class="el_downtime_unit" />
          </div>
        </div>
      </aside>
      <div class="ly_cont_main">
        <TabControl :current-page="currentPage" />
        <div class="ly_heatmap">
          <Heatmap
            :heat-map-source="errorCounts"
            :heat-map-label="historyLabels"
          />
        </div>
        <!-- /bl_tabNav -->
        <div class="ly_activity">
          <h4 class="el_activity_header">
            Error History
          </h4>
          <!-- /el_activity_header -->
          <div
            v-for="(month, index) in targetMonths"
            :key="index"
            class="ly_activity_monthly"
          >
            <div class="el_activity_monthly_header">
              {{ $getMonthName(month.getMonth()) + ' ' + month.getFullYear() }}
            </div>
            <!-- 表示付きのデータのみを抽出し、表示する -->
            <div
              v-for="(activity, key) in getErrorHistoryFilter(
                errorHistory,
                month
              )"
              :key="key"
              :class="{ ly_activity_item: true }"
            >
              <div
                :class="{
                  el_errors: true,
                  fatal: activity.type === 'fatal',
                  recoverable: activity.type === 'recoverable',
                  resumable: activity.type === 'resumable'
                }"
              >
                {{ activity.errorId + '-' + activity.errorParameter }}
              </div>
            </div>
            <!-- 表示データがない場合、下記を表示する -->
            <div
              v-if="getErrorHistoryFilter(errorHistory, month).length === 0"
              class="ly_activity_item"
            >
              No Error
            </div>
          </div>
          <!-- /ly_activity_monthly -->
        </div>
        <!-- /ly_activity -->
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Heatmap from '~/components/Heatmap.vue'
import TabControl from '~/components/library/TabControl.vue'
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer'

export default {
  components: {
    Heatmap,
    TabControl,
    Header,
    Footer
  },
  props: {},
  async asyncData({ store }) {
    await store.dispatch('errors/fetchStopTime')
    await store.dispatch('errors/fetchErrorCounts')
    await store.dispatch('errors/fetchHistoryLabels')
    await store.dispatch('errors/fetchTargetMonths')
  },
  data() {
    return {
      currentPage: 'errors',
      errorHistory: this.getErrorHistory()
    }
  },
  computed: {
    ...mapGetters('errors', [
      'stopTime',
      'errorCounts',
      'historyLabels',
      'targetMonths'
    ])
  },
  methods: {
    getErrorHistory() {
      const data = [
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
      return data
    },
    getErrorHistoryFilter(array, query) {
      return array.filter(function(item) {
        const errorDate = new Date(item.date)
        const queryDate = new Date(query)
        return (
          errorDate.getFullYear() === queryDate.getFullYear() &&
          errorDate.getMonth() === queryDate.getMonth()
        )
      })
    }
  }
}
</script>

<style lang="scss">
@import url('https://use.fontawesome.com/releases/v5.0.6/css/all.css');
.ly_activity {
  .ly_activity_item {
    .el_errors {
      &.fatal {
        &::before {
          position: absolute;
          top: 20px;
          left: -9px;
          width: 15px;
          height: 15px;
          border-radius: 100%;
          text-align: center;
          line-height: 25px;

          // 表示
          font-size: 0.8em;
          content: '';
          background-color: crimson;
        }
      }
      &.recoverable {
        &::before {
          position: absolute;
          top: 20px;
          left: -9px;
          width: 15px;
          height: 15px;
          border-radius: 100%;
          text-align: center;
          line-height: 25px;

          // 表示
          font-size: 0.8em;
          content: '';
          background-color: gold;
        }
      }
      &.resumable {
        &::before {
          position: absolute;
          top: 20px;
          left: -9px;
          width: 15px;
          height: 15px;
          border-radius: 100%;
          text-align: center;
          line-height: 25px;

          // 表示
          font-size: 0.8em;
          content: '';
          background-color: #e1e4e8;
        }
      }
    }
  }
}
.el_downtime_description {
  position: absolute;
  top: 25px;
  left: 10px;

  &:before {
    content: '停止時間';
    display: inline-block;
    vertical-align: middle;
  }
}
.el_downtime {
  color: crimson;
  font-size: 5em;
}
.el_downtime_unit {
  position: absolute;
  bottom: 25px;
  right: 10px;

  &:before {
    content: '分';
    display: inline-block;
    vertical-align: middle;
  }
}
</style>
