<template>
  <footer>
    <div class="ly_footer">
      <div class="ly_footer_inner">
        <nav>
          <ul class="bl_footerNav">
            <li class="bl_footerNav_item">
              <div class="bl_footerNav_link hp_noLink">SNS</div>
              <ul class="bl_footerChildNav">
                <li class="bl_footerChildNav_item">
                  <a class="bl_footerChildNav_link" href="#">
                    <i class="fab fa-twitter"></i> Twitter
                  </a>
                </li>
                <li class="bl_footerChildNav_item">
                  <a class="bl_footerChildNav_link" href="#">
                    <i class="fab fa-facebook-f"></i> Facebook
                  </a>
                </li>
                <li class="bl_footerChildNav_item">
                  <a class="bl_footerChildNav_link" href="#">
                    <i class="fab fa-instagram"></i> Instagram
                  </a>
                </li>
              </ul>
            </li>
            <li class="bl_footerNav_item">
              <div class="bl_footerNav_link hp_noLink">マニュアル</div>
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
            <li class="bl_footerNav_item">
              <div class="bl_footerNav_link hp_noLink">ダウンロード</div>
              <ul class="bl_footerChildNav">
                <li class="bl_footerChildNav_item">
                  <a class="bl_footerChildNav_link" href="#">
                    DWINDEX デスクトップ版
                  </a>
                </li>
                <li class="bl_footerChildNav_item">
                  <a class="bl_footerChildNav_link" href="#">VPanel</a>
                </li>
                <li class="bl_footerChildNav_item">
                  <a class="bl_footerChildNav_link" href="#">
                    各種ファームウェア
                  </a>
                </li>
              </ul>
            </li>
            <li class="bl_footerNav_item">
              <div class="bl_footerNav_link hp_noLink">アカウント</div>
              <ul class="bl_footerChildNav">
                <li class="bl_footerChildNav_item">
                  <a class="bl_footerChildNav_link" href="#">サインイン</a>
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
<style lang="scss" scoped>
.ly_footer {
  padding-top: 10px;
  padding-bottom: 10px;
  background-color: #24292e;
}

.ly_footer_inner {
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
  width: 25%;
  &:last-child {
    .bl_footerNav_link {
      &::after {
        content: none;
      }
    }
  }
  .bl_footerNav_link {
    &::after {
    }
  }
}

.bl_footerNav_link {
  position: relative;
  display: block;
  color: white;
  text-decoration: none;
  transition: 0.25s;
  font-size: 0.9em;

  &:focus,
  &:hover {
    color: hsla(0, 0%, 100%, 0.7);
  }
  &::after {
  }

  &.hp_noLink {
    &:focus,
    &:hover {
      color: white;
    }
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
