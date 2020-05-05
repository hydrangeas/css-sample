<template>
  <nav class="bl_tabNav">
    <ul class="bl_tabNav_inner">
      <!-- <li v-for="(item, index) in items" :key="index">
        <tab-control-item :title="item" />
      </li> -->
      <li v-for="(item, index) in items" :key="index">
        <span v-if="item === currentPage" class="bl_tabNav_link is_active">
          {{ capitalizeFirstLetter(item) }}
        </span>
        <nuxt-link v-else class="bl_tabNav_link" :to="'/dashboard/' + item">
          {{ capitalizeFirstLetter(item) }}
        </nuxt-link>
      </li>
    </ul>
    <!-- /bl_tabNav_inner -->
  </nav>
</template>

<script>
/* eslint-disable */
import TabControlItem from '~/components/library/TabControlItem.vue'

export default {
  components: {
    TabControlItem
  },
  props: {
    currentPage: {
      type: String,
      require: true,
      default: ''
    }
  },
  data() {
    return {
      items: ['overview', 'errors', 'maintenances', 'badges']
    }
  },
  methods: {
    capitalizeFirstLetter(title) {
      return title.charAt(0).toUpperCase() + title.slice(1)
    }
  }
}
</script>

<style lang="scss">
@import '~assets/styles/main.scss';

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
