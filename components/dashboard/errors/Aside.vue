<template>
  <aside class="ly_cont_side">
    <h2 class="el_lv4Heading">
      Apr 27, 2020
    </h2>
    <div class="ly_score_square">
      <div class="ly_score_container">
        <div class="el_downtime_description" />
        <div class="el_downtime">
          100
        </div>
        <div class="el_downtime_unit" />
      </div>
    </div>
  </aside>
</template>

<style lang="scss">
.el_downtime_description {
  position: absolute;
  top: 25px;
  left: 10px;

  &:before {
    content: '停止時間';
    display: inline-block;
    vertical-align: middle;
  }
}
.el_downtime {
  color: crimson;
  font-size: 5em;
}
.el_downtime_unit {
  position: absolute;
  bottom: 25px;
  right: 10px;

  &:before {
    content: '分';
    display: inline-block;
    vertical-align: middle;
  }
}
</style>
