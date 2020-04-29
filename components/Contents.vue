<template>
  <div class="ly_cont ly_cont__col">
    <Aside />
    <div class="ly_cont_main">
      <nav class="bl_tabNav">
        <ul class="bl_tabNav_inner">
          <li>
            <span class="bl_tabNav_link is_active">
              Overview
            </span>
          </li>
          <li>
            <a class="bl_tabNav_link" href="#">
              Errors
            </a>
          </li>
          <li>
            <a class="bl_tabNav_link" href="#">
              Maintenances
            </a>
          </li>
          <li>
            <a class="bl_tabNav_link" href="#">
              Badges
            </a>
          </li>
        </ul>
        <!-- /bl_tabNav_inner -->
      </nav>
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
import Aside from '~/components/Aside.vue'

export default {
  components: {
    Aside
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
// for Tab Control
$breakPoints: (
  'github-middle': 'screen and (min-width: 1012px)',
  'github-small': 'screen and (min-width: 544px)'
) !default;
@mixin mediaQuery($breakPoint: github-middle) {
  @media #{map-get($breakPoints, $breakPoint)} {
    @content;
  }
}

.bl_tabNav {
  @include mediaQuery() {
    overflow-x: auto;
  }
}
.bl_tabNav_inner {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: -10px;

  @include mediaQuery() {
    flex-wrap: nowrap;
    justify-content: flex-start;
    margin-bottom: 0;
    white-space: nowrap;
  }
}
.bl_tabNav_link {
  display: inline-block;
  padding-right: 10px;
  padding-bottom: 10px;
  padding-left: 10px;
  margin-bottom: 10px;
  border-bottom: 2px solid #efefef;
  color: #777;
  text-decoration: none;
  transition: 0.25s;
  font-size: 0.8em;

  &:focus,
  &:hover {
    border-bottom-color: currentColor;
    color: #e25c00;
    opacity: 0.75;
  }
  &.is_active {
    border-bottom-color: currentColor;
    color: #e25c00;
    pointer-events: none;
  }
}
// for activity control
.ly_milling_activity {
  margin-top: 40px;

  .ly_milling_activity_monthly {
    border-top: 1px solid #696969;

    // アクティビティリストの最初だけマージンを確保する
    &:first-of-type {
      margin-top: 20px;
    }
    // アクティビティリストの最後にメッセージを入れる
    &:last-of-type {
      &::after {
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
