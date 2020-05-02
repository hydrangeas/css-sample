<template>
  <div class="ly_cont ly_cont__col">
    <Aside />
    <div class="ly_cont_main">
      <TabControl :current-page="currentPage" />
      <div class="ly_heatmap">
        <Heatmap />
      </div>
      <!-- /bl_tabNav -->
      <div class="ly_milling_activity">
        <h4 class="el_milling_activity_header">
          Milling Activity
        </h4>
        <!-- /el_milling_activity_header -->
        <div class="ly_milling_activity_monthly">
          <div class="el_milling_activity_monthly_header">
            April 2020
          </div>
          <div class="ly_milling_activity_item">
            <div class="el_milling_file completed">
              abc
            </div>
          </div>
          <div class="ly_milling_activity_item">
            <div class="el_milling_file cancelled">
              abc
            </div>
          </div>
        </div>
        <!-- /ly_milling_activity_monthly -->
        <div class="ly_milling_activity_monthly">
          <div class="el_milling_activity_monthly_header">
            March 2020
          </div>
          <div class="ly_milling_activity_item">
            No Milling
          </div>
        </div>
        <!-- /ly_milling_activity_monthly -->
      </div>
      <!-- /ly_milling_activity -->
    </div>
  </div>
</template>
<script>
import Aside from '~/components/dashboard/maintenances/Aside.vue'
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
      currentPage: 'maintenances'
    }
  }
}
</script>
