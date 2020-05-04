<template>
  <div>
    <Header />
    <Contents />
    <Footer />
  </div>
</template>

<script>
import Header from '~/components/Header.vue'
import Contents from '~/components/dashboard/maintenances/Contents.vue'
import Footer from '~/components/Footer'

export default {
  components: {
    Header,
    Contents,
    Footer
  },
  data() {
    return {}
  }
}
</script>
