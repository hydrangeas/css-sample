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
            <div :class="{ el_badge: teeth >= 20 }" />
            <div class="el_score">
              {{ teeth }}
            </div>
          </div>
        </div>
      </aside>
      <div class="ly_cont_main">
        <TabControl :current-page="currentPage" />
        <div class="ly_heatmap">
          <Heatmap
            :heat-map-source="teethHistories"
            :heat-map-label="teethLabel"
          />
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
              {{ $getMonthName(month.getMonth()) + ' ' + month.getFullYear() }}
            </div>
            <!-- 表示付きのデータのみを抽出し、表示する -->
            <div
              v-for="(activity, key) in $getHistoryFilter(
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
              v-if="$getHistoryFilter(millingActivities, month).length === 0"
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
    <Footer />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer'
import Heatmap from '~/components/Heatmap.vue'
import TabControl from '~/components/library/TabControl.vue'

export default {
  components: {
    Header,
    Footer,
    Heatmap,
    TabControl
  },
  props: {},
  async asyncData({ store }) {
    await store.dispatch('teeth/fetchTeeth')
  },
  data() {
    return {
      currentPage: 'overview',
      teethHistories: this.getTeeth(),
      teethLabel: this.getTeethLabel(),
      targetMonths: this.getTargetMonths(),
      millingActivities: this.getMillingActivity()
    }
  },
  computed: {
    ...mapGetters('teeth', ['teeth'])
  },
  methods: {
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
    getTeethLabel() {
      const teethLabel = []
      // Sat
      teethLabel.push('2020/05/01', '2020/04/01', '2020/04/01', '2020/04/01')
      teethLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
      teethLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
      teethLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
      teethLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
      teethLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
      teethLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
      teethLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
      teethLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
      teethLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
      teethLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
      teethLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
      // Fri
      teethLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
      teethLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
      teethLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
      teethLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
      teethLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
      teethLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
      teethLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
      teethLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
      teethLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
      teethLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
      teethLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
      teethLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
      // Thu
      teethLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
      teethLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
      teethLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
      teethLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
      teethLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
      teethLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
      teethLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
      teethLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
      teethLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
      teethLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
      teethLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
      teethLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
      // Wed
      teethLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
      teethLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
      teethLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
      teethLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
      teethLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
      teethLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
      teethLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
      teethLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
      teethLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
      teethLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
      teethLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
      teethLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
      // Tue
      teethLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
      teethLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
      teethLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
      teethLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
      teethLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
      teethLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
      teethLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
      teethLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
      teethLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
      teethLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
      teethLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
      teethLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
      // Mon
      teethLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
      teethLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
      teethLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
      teethLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
      teethLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
      teethLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
      teethLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
      teethLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
      teethLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
      teethLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
      teethLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
      teethLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
      // Sun
      teethLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
      teethLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
      teethLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
      teethLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
      teethLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
      teethLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
      teethLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
      teethLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
      teethLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
      teethLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
      teethLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
      teethLabel.push('2020/04/01', '2020/04/01', '2020/04/01', '2020/04/01')
      return teethLabel
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
        { date: '2020/04/01 12:34:56', file: 'abc.prn', status: 'completed' },
        { date: '2020/04/02 07:52:21', file: 'xxx.prn', status: 'canceled' },
        { date: '2020/05/02 07:52:21', file: 'xxx.prn', status: 'canceled' }
      ]
      return data
    }
  }
}
</script>
