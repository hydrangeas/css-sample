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
      </div>
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
</style>
