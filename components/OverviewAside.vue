<template>
  <div>
    <aside class="ly_cont_side hp_aside_mobile">
      <h2 class="el_lv4Heading">
        Apr 27, 2020
      </h2>
      <div class="ly_score_square">
        <div class="ly_score_container">
          <div :class="{ el_badge: teeth >= 20 }" />
          <div class="el_score">
            {{ teeth }}
          </div>
        </div>
      </div>
    </aside>
    <aside class="ly_cont_side hp_aside_pc">
      <h2 class="el_lv4Heading">
        Apr 27, 2020
      </h2>
      <div class="ly_score_square">
        <div class="ly_score_container">
          <div :class="{ el_badge: teeth >= 20 }" />
          <div class="el_score">
            {{ teeth }}
          </div>
        </div>
      </div>
    </aside>
  </div>
</template>

<script>
export default {
  props: {
    teeth: {
      type: Number,
      default: 0
    }
  }
}
</script>
