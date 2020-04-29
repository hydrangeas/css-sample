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
  }
}
</script>
