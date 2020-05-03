<template>
  <div class="ly_cont ly_cont__col">
    <Aside />
    <div class="ly_cont_main">
      <TabControl :current-page="currentPage" />
      <div class="ly_heatmap">
        <Heatmap />
      </div>
      <!-- /bl_tabNav -->
      <div class="ly_activity">
        <h4 class="el_activity_header">
          Milling Activity
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
            v-for="(activity, key) in getMillingActivityFilter(
              millingActivities,
              month
            )"
            :key="key"
            :class="{ ly_activity_item: true }"
          >
            <div
              :class="{
                el_milling_file: true,
                completed: activity.status === 'completed',
                canceled: activity.status === 'canceled'
              }"
            >
              {{ activity.file }}
            </div>
          </div>
        </div>
        <!-- /ly_activity_monthly -->
      </div>
      <!-- /ly_activity -->
    </div>
  </div>
</template>
<script>
import Aside from '~/components/dashboard/overview/Aside.vue'
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
      currentPage: 'overview',
      targetMonths: this.getTargetMonths(),
      millingActivities: this.getMillingActivity()
    }
  },
  methods: {
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
    getMillingActivity() {
      const data = [
        { start: '2020/04/01 12:34:56', file: 'abc.prn', status: 'completed' },
        { start: '2020/04/02 07:52:21', file: 'xxx.prn', status: 'canceled' },
        { start: '2020/05/02 07:52:21', file: 'xxx.prn', status: 'canceled' }
      ]
      return data
    },
    getMillingActivityFilter(array, query) {
      return array.filter(function(item) {
        const startDate = new Date(item.start)
        const queryDate = new Date(query)
        return (
          startDate.getFullYear() === queryDate.getFullYear() &&
          startDate.getMonth() === queryDate.getMonth()
        )
      })
    }
  }
}
</script>
