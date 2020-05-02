<template>
  <div>
    <Header />
    <Contents />
  </div>
</template>

<script>
import Header from '~/components/Header.vue'
import Contents from '~/components/Contents.vue'

export default {
  components: {
    Header,
    Contents
  },
  defaults: {
    data() {
      return {
        page: this.$route.params.page
      }
    },
    validate({ params }) {
      return ['', 'overview', 'errors', 'maintenances', 'badges'].indexOf(
        params.page
      )
    }
  }
}
</script>
