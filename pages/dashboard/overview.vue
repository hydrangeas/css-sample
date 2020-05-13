<template>
  <div>
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
            :heat-map-label="teethLabels"
          />
        </div>
        <!-- /bl_tabNav -->
        <div class="ly_activity">
          <h4 class="el_activity_header">
            Milling Activity
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
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Heatmap from '~/components/Heatmap.vue'
import TabControl from '~/components/library/TabControl.vue'

export default {
  components: {
    Heatmap,
    TabControl
  },
  props: {},
  async asyncData({ store }) {
    await store.dispatch('teeth/fetchTeeth')
    await store.dispatch('teeth/fetchTeethHistories')
    await store.dispatch('teeth/fetchTeethLabels')
    await store.dispatch('teeth/fetchMillingActivities')
  },
  data() {
    return {
      currentPage: 'overview'
    }
  },
  computed: {
    ...mapGetters('teeth', [
      'teeth',
      'teethHistories',
      'teethLabels',
      'millingActivities'
    ])
  }
}
</script>
