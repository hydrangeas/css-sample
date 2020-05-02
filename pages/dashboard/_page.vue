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
  data() {
    return {
      page1: this.$route.params.page
    }
  },
  validate({ params }) {
    // eslint-disable-next-line
    console.dir(params)
    return (
      ['', 'overview', 'errors', 'maintenances', 'badges'].includes(
        params.page
      ) >= 0
    )
  }
}
</script>
