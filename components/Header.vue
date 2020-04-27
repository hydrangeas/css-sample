<template>
  <header>
    <div class="ly_header">
      <div class="ly_header_inner">
        <nav>
          <ul class="bl_headerNav">
            <li class="bl_headerNav_item">
              <a class="bl_headerNav_link" href="/">DWINDEX type-D</a>
            </li>
            <li class="bl_headerNav_item">
              <a class="bl_headerNav_link" href="#">マニュアル</a>
            </li>
            <li class="bl_headerNav_item">
              <a class="bl_headerNav_link" href="#">ダウンロード</a>
            </li>
            <li class="bl_headerNav_item">
              <a class="bl_headerNav_link" href="#">お問い合わせ</a>
            </li>
          </ul>
          <!-- /bl_headerNav_item -->
        </nav>
      </div>
      <!-- /ly_header_inner -->
    </div>
    <!-- /ly_header -->
  </header>
</template>
<style lang="scss">
.ly_header {
  padding-top: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid #ddd;
  background-color: #24292e;
}

.ly_header_inner {
  max-width: 1230px;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}

.bl_headerNav {
  display: flex;
}

.bl_headerNav_item {
  &:last-child {
    content: none;
  }
  .bl_headerNav_link {
    &::after {
      content: none;
    }
  }
}

.bl_headerNav_link {
  position: relative;
  display: block;
  padding: 10px 10px;
  color: white;
  text-decoration: none;
  transition: 0.25s;

  &:focus,
  &:hover {
    color: hsla(0, 0%, 100%, 0.7);
  }
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    right: 0;
    width: 1px;
    height: 20px;
    background-color: #ddd;
    transform: translateY(-50%);
  }
}
</style>
