<template>
  <div>
    <Header />
    <Contents />
  </div>
</template>

<script>
import Header from '~/components/Header.vue'
import Contents from '~/components/dashboard/maintenances/Contents.vue'

export default {
  components: {
    Header,
    Contents
  },
  data() {
    return {}
  }
}
</script>
