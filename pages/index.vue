<template>
  <div>
    <Header />
    <Contents />
    <Footer />
  </div>
</template>

<script>
import Header from '~/components/Header.vue'
import Contents from '~/components/dashboard/overview/Contents'
import Footer from '~/components/Footer'

export default {
  components: {
    Header,
    Contents,
    Footer
  }
}
</script>
