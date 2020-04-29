<template>
  <aside class="ly_cont_side">
    <h2 class="el_lv4Heading">
      4 / 27
    </h2>
    <div class="ly_score_square">
      <div class="el_score">
        21
      </div>
    </div>
  </aside>
</template>
<style lang="scss">
.ly_cont_side {
  flex: 0 0 260px;
  margin-right: 3.25203%;
}
.el_lv4Heading {
  text-align: center;
}
.ly_score_square {
  // 150pxの四角枠を作り、左右中央に配置
  height: 150px;
  width: 150px;
  margin-top: 15px;
  margin-left: auto;
  margin-right: auto;
  // 枠
  border: 1px solid gray;
  // 内部データのレイアウト指定
  display: flex;
  justify-content: center;
  align-items: center;
}
.el_score {
}
</style>
