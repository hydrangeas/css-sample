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
            <div class="el_downtime_description" />
            <div class="el_downtime">
              {{ stopTime }}
            </div>
            <div class="el_downtime_unit" />
          </div>
        </div>
      </aside>
      <div class="ly_cont_main">
        <tab-control-pc :current-page="currentPage" />
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
              v-for="(activity, key) in $getHistoryFilter(
                errorHistories,
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
              v-if="$getHistoryFilter(errorHistories, month).length === 0"
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
  props: {},
  async asyncData({ store }) {
    await store.dispatch('errors/fetchStopTime')
    await store.dispatch('errors/fetchErrorCounts')
    await store.dispatch('errors/fetchTargetMonths')
    await store.dispatch('errors/fetchErrorHistories')
  },
  data() {
    return {
      currentPage: 'errors'
    }
  },
  computed: {
    ...mapGetters('errors', [
      'stopTime',
      'errorCounts',
      'historyLabels',
      'targetMonths',
      'errorHistories'
    ])
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
