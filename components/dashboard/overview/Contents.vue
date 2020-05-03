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
            {{ month }}
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
      targetMonths: this.getTargetMonths()
    }
  },
  methods: {
    getTargetMonths() {
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
      const targetDay = new Date()
      // eslint-disable-next-line
      console.dir(targetDay.getMonth())
      const targetMonths = []
      for (let i = 0; i < 12; i++) {
        targetMonths.push(
          monthNames[targetDay.getMonth()] + ' ' + targetDay.getFullYear()
        )
        targetDay.setMonth(targetDay.getMonth() - 1)
      }
      return targetMonths
    }
  }
}
</script>
