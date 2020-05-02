<template>
  <div class="ly_cont ly_cont__col">
    <Aside />
    <div class="ly_cont_main">
      <TabControl />
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
import Aside from '~/components/dashboard/overview/Aside.vue'
import Heatmap from '~/components/Heatmap.vue'
import TabControl from '~/components/library/TabControl.vue'

export default {
  components: {
    Aside,
    Heatmap,
    TabControl
  }
}
</script>
<style lang="scss">
//@import url('https://use.fontawesome.com/releases/v5.13.0/css/all.css');

.ly_cont {
  max-width: 1010px;
  padding: 60px 15px;
  margin-right: auto;
  margin-left: auto;

  &.ly_cont__col {
    display: flex;
    justify-content: space-between;
  }
}
.ly_cont_main {
  flex: 1;
}
// heatmap
.ly_heatmap {
  margin-top: 20px;
}
// for activity control
.ly_milling_activity {
  margin-top: 20px;

  .ly_milling_activity_monthly {
    border-top: 1px solid #696969;

    // アクティビティリストの最初だけマージンを確保する
    &:first-of-type {
      margin-top: 20px;
    }
    // アクティビティリストの最後にメッセージを入れる
    &:last-of-type {
      &::after {
        font-size: 0.8em;
        content: 'Seeing something unexpected? Please contact us.';
      }
    }
    .el_milling_activity_monthly_header {
      // 少し小さめに表示
      font-size: 0.8em;
      color: #ffffff;

      display: inline-block;
      margin-top: 0;
      padding: 5px 10px;
      background-color: #696969;
    }
  }

  .ly_milling_activity_item {
    font-size: 0.9em;
    // 線を引くために右寄せ
    margin-left: 25px;
    border-left: 3px solid #e1e4e8;
    // アクティビティ
    padding-top: 20px;
    padding-bottom: 20px;
    padding-left: 20px;
    position: relative;

    &:last-of-type {
      padding-bottom: 40px;
    }

    .el_milling_file {
      &.completed {
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
          content: '✔';
          background-color: #e1e4e8;
        }
      }
      &.cancelled {
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
          content: '×';
          background-color: #e1e4e8;
        }
      }
    }
  }
}
</style>
