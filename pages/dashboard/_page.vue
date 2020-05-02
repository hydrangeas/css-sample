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
    return {}
  },
  validate({ params }) {
    return (
      !params.params ||
      ['overview', 'errors', 'maintenances', 'badges'].includes(
        params.page.toLowerCase()
      ) >= 0
    )
  }
}
</script>
