<template>
  <footer>
    <div class="ly_footer">
      <div class="ly_footer_inner">
        <nav>
          <ul class="bl_footerNav">
            <li class="bl_footerNav_item">
              <a class="bl_footerNav_link" href="/">DWINDEX type-D</a>
              <ul class="bl_footerChildNav">
                <li class="bl_footerChildNav_item">
                  <a class="bl_footerChildNav_link" href="#">私たちの強み</a>
                </li>
                <li class="bl_footerChildNav_item">
                  <a class="bl_footerChildNav_link" href="#">
                    私たちのポリシー
                  </a>
                </li>
              </ul>
            </li>
            <li class="bl_footerNav_item">
              <a class="bl_footerNav_link" href="/">マニュアル</a>
              <ul class="bl_footerChildNav">
                <li class="bl_footerChildNav_item">
                  <a class="bl_footerChildNav_link" href="#">DWX-52DCi</a>
                </li>
                <li class="bl_footerChildNav_item">
                  <a class="bl_footerChildNav_link" href="#">DWX-52DC</a>
                </li>
                <li class="bl_footerChildNav_item">
                  <a class="bl_footerChildNav_link" href="#">DWX-52D</a>
                </li>
              </ul>
            </li>
          </ul>
          <!-- /bl_footerNav_item -->
        </nav>
      </div>
      <!-- /ly_footer_inner -->
    </div>
    <!-- /ly_footer -->
    <div class="ly_footer hp_btGray">
      <div class="ly_footer_inner">
        <small class="el_footerCopyright">© 2019 Company</small>
      </div>
      <!-- /.ly_footer_inner -->
    </div>
  </footer>
</template>
<style lang="scss">
.ly_footer {
  padding-top: 10px;
  padding-bottom: 10px;
  background-color: #24292e;
}

.ly_footer_inner {
  max-width: 1010px;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}

.hp_btGray {
  border-top: 1px solid #777;
}

.bl_footerNav {
  display: flex;
}

.bl_footerNav_item {
  text-align: center;
  &:last-child {
    .bl_footerNav_link {
      &::after {
        content: none;
      }
    }
  }
  .bl_footerNav_link {
    &::after {
      content: '';
      position: absolute;
      top: 50%;
      right: 0;
      width: 1px;
      height: 15px;
      background-color: currentColor;
      transform: translateY(-50%);
    }
  }
}

.bl_footerNav_link {
  position: relative;
  display: block;
  padding: 10px 20px;
  color: white;
  text-decoration: none;
  transition: 0.25s;
  font-size: 0.9em;

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

.bl_footerChildNav {
  list-style-type: none;
  margin-top: 15px;
}

.bl_footerChildNav_item {
  margin-bottom: 10px;
}

.bl_footerChildNav_link {
  color: #ddd;
  font-size: 0.7em;
  text-decoration: none;
}

.bl_footerChildNav_link:focus,
.bl_footerChildNav_link:hover {
  text-decoration: underline;
}

.el_footerCopyright {
  display: block;
  color: #ddd;
  font-size: 12px;
  text-align: center;
}
</style>
