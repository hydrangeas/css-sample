<template>
  <div>
    <Header />
    <Contents />
  </div>
</template>

<script>
import Header from '~/components/Header.vue'
import Contents from '~/components/dashboard/overview/Contents'

export default {
  components: {
    Header,
    Contents
  },
  data() {
    return {}
  },
  validate({ params }) {
    return true
    // return (
    //   !params.params ||
    //   ['overview', 'errors', 'maintenances', 'badges'].includes(
    //     params.page.toLowerCase()
    //   ) >= 0
    // )
  }
}
</script>
