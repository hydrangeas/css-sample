<template>
  <aside class="ly_cont_side">
    <h2 class="el_lv4Heading">
      Apr 27, 2020
    </h2>
    <div class="ly_score_square">
      <div class="ly_score_container">
        <div class="el_badge" />
        <div class="el_score">
          21
        </div>
      </div>
    </div>
  </aside>
</template>
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap');
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
  border: 1px solid #e1e4e8;
  position: relative;
}
.ly_score_container {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  // 内部データのレイアウト指定
  display: flex;
  justify-content: center;
  align-items: center;
}
.el_badge {
  position: absolute;
  top: 10px;
  right: 10px;

  &:before {
    content: '';
    display: inline-block;
    width: 20px;
    height: 16px;
    background-image: url('data:image/png;base64,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');
    background-size: contain;
    vertical-align: middle;
  }
}
.el_score {
  font-family: 'Abril Fatface', cursive;
  font-size: 7em;
}
</style>
