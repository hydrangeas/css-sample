<template>
  <tab-control :current-page="currentPage" />
</template>

<script>
import TabControl from '~/components/library/TabControl.vue'

export default {
  components: {
    TabControl
  },
  props: {
    currentPage: {
      type: String,
      require: true,
      default: ''
    }
  },
  async asyncData({ store }) {},
  data() {
    return {}
  },
  computed: {}
}
</script>

<style lang="scss" scoped>
@media screen and (min-width: 560px) {
  .bl_tabNav {
    display: none;
  }
}
</style>
