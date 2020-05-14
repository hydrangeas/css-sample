<template>
  <div>
    <Header />
    <nuxt />
    <Footer />
  </div>
</template>

<script>
import Header from '~/components/Header'
import Footer from '~/components/FooterPromotion'

export default {
  components: {
    Header,
    Footer
  }
}
</script>
