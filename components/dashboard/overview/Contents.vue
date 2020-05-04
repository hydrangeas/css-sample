<template>
  <div class="ly_cont ly_cont__col">
    <Aside :teeth-today="teethToday" />
    <div class="ly_cont_main">
      <TabControl :current-page="currentPage" />
      <div class="ly_heatmap">
        <Heatmap :heat-map-source="teeth" />
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
          <!-- 表示データがない場合、下記を表示する -->
          <div
            v-if="
              getMillingActivityFilter(millingActivities, month).length === 0
            "
            class="ly_activity_item"
          >
            No Milling
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
      teethToday: this.getTeethToday(),
      teeth: this.getTeeth(),
      teethLabel: this.getTeethLabel(),
      targetMonths: this.getTargetMonths(),
      millingActivities: this.getMillingActivity()
    }
  },
  methods: {
    getTeethToday() {
      return 20
    },
    getTeeth() {
      const teeth = []
      // Sat -12
      teeth.push(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 0)
      // Sat -24
      teeth.push(1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1)
      // Sat -36
      teeth.push(1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1)
      // Sat -48
      teeth.push(1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1)
      // Fri -12
      teeth.push(1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1)
      // Fri -24
      teeth.push(1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1)
      // Fri -36
      teeth.push(1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1)
      // Fri -48
      teeth.push(1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1)
      // Thu -12
      teeth.push(1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1)
      // Thu -24
      teeth.push(1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1)
      // Thu -36
      teeth.push(1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1)
      // Thu -48
      teeth.push(1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1)
      // Wed -12
      teeth.push(1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1)
      // Wed -24
      teeth.push(1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1)
      // Wed -36
      teeth.push(1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1)
      // Wed -48
      teeth.push(1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1)
      // Tue -12
      teeth.push(1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1)
      // Tue -24
      teeth.push(1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1)
      // Tue -36
      teeth.push(1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1)
      // Tue -48
      teeth.push(1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1)
      // Mon -12
      teeth.push(1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1)
      // Mon -24
      teeth.push(1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1)
      // Mon -36
      teeth.push(1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1)
      // Mon -48
      teeth.push(1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1)
      // Sun -12
      teeth.push(1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1)
      // Sun -24
      teeth.push(1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1)
      // Sun -36
      teeth.push(1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1)
      // Sun -48
      teeth.push(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
      return teeth
    },
    getTeethLabel() {},
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
