<template>
  <nav class="bl_tabNav">
    <ul class="bl_tabNav_inner">
      <li v-for="(item, index) in items" :key="index">
        <tab-control-item :title="item" />
      </li>
    </ul>
    <!-- /bl_tabNav_inner -->
  </nav>
</template>

<script>
import TabControlItem from '~/components/library/TabControlItem.vue'

export default {
  components: {
    TabControlItem
  },
  props: {},
  data() {
    return {
      items: ['Overview', 'Errors', 'Maintenances', 'Badges']
    }
  },
  watch: {
    currentPage(value) {
      this.createData()
    }
  }
}
</script>

<style lang="scss">
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
</style>
