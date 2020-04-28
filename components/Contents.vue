<template>
  <div class="ly_cont ly_cont__col">
    <Aside />
    <main class="ly_cont_main">
      <article>
        aaa
      </article>
    </main>
  </div>
</template>
<script>
import Aside from '~/components/Aside.vue'

export default {
  components: {
    Aside
  }
}
</script>
<style lang="scss">
.ly_cont {
  max-width: 1010px;
  padding: 60px 15px;
  margin-right: auto;
  margin-left: auto;

  &.ly_cont__col {
    display: flex;
    justify-content: space-between;
  }
}
.ly_cont_main {
  flex: 1;
}
</style>
