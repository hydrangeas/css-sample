<template>
  <aside class="ly_cont_side">
    <h2 class="el_lv4Heading">
      Apr 27, 2020
    </h2>
    <div class="ly_score_square">
      <div class="ly_score_container">
        <div :class="{ el_badge: teethToday >= 20 }" />
        <div class="el_score">
          {{ teethToday }}
        </div>
      </div>
    </div>
  </aside>
</template>
<script>
export default {
  props: {
    teethToday: {
      type: Number,
      default() {
        return 0
      }
    }
  }
}
</script>
