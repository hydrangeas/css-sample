<template>
  <div class="ly_cont ly_cont__col">
    <Aside :stop-time-today="stopTimeToday" />
    <div class="ly_cont_main">
      <TabControl :current-page="currentPage" />
      <div class="ly_heatmap">
        <Heatmap />
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
            {{ getMonthName(month.getMonth()) + ' ' + month.getFullYear() }}
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
</template>
<script>
import Aside from '~/components/dashboard/errors/Aside.vue'
import Heatmap from '~/components/Heatmap.vue'
import TabControl from '~/components/library/TabControl.vue'

export default {
  components: {
    Aside,
    Heatmap,
    TabControl
  },
  props: {},
  data() {
    return {
      currentPage: 'errors',
      stopTimeToday: this.getStopTime(),
      targetMonths: this.getTargetMonths(),
      errorHistory: this.getErrorHistory()
    }
  },
  methods: {
    getStopTime() {
      return 123
    },
    getMonthName(value) {
      if (value < 0 || value > 11) {
        return 'unknown'
      }
      const monthNames = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
      ]
      return monthNames[value]
    },
    getTargetMonths() {
      const today = new Date()
      const targetMonths = []
      for (let i = 0; i < 12; i++) {
        targetMonths.push(new Date(today.getFullYear(), today.getMonth() - i))
      }
      return targetMonths
    },
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
.ly_activity {
  .ly_activity_item {
    .el_errors {
      &.fatal {
        &::before {
          position: absolute;
          top: 14px;
          left: -14px;
          width: 25px;
          height: 25px;
          border-radius: 100%;
          text-align: center;
          line-height: 25px;

          // 表示
          font-size: 0.8em;
          content: '1';
          background-color: #e1e4e8;
        }
      }
      &.recoverable {
        &::before {
          position: absolute;
          top: 14px;
          left: -14px;
          width: 25px;
          height: 25px;
          border-radius: 100%;
          text-align: center;
          line-height: 25px;

          // 表示
          font-size: 0.8em;
          content: '2';
          background-color: #e1e4e8;
        }
      }
      &.resumable {
        &::before {
          position: absolute;
          top: 14px;
          left: -14px;
          width: 25px;
          height: 25px;
          border-radius: 100%;
          text-align: center;
          line-height: 25px;

          // 表示
          font-size: 0.8em;
          content: '3';
          background-color: #e1e4e8;
        }
      }
    }
  }
}
</style>
