<template>
  <header>
    <div class="ly_header">
      <div class="ly_header_inner">
        <nav>
          <ul class="bl_headerNav hp_topMenu">
            <li class="bl_headerNav_item hp_logo">
              <a class="bl_headerNav_link" href="/">DWINDEX type-D</a>
            </li>
            <li class="bl_headerNav_item hp_signin">
              <nuxt-link class="el_signInButton" to="/dashboard/overview">
                サインイン
              </nuxt-link>
            </li>
          </ul>
          <!-- /bl_headerNav_item -->
        </nav>
      </div>
      <!-- /ly_header_inner -->
      <div class="ly_header_inner">
        <nav>
          <ul class="bl_headerNav">
            <li class="bl_headerNav_item">
              <nuxt-link class="bl_headerNav_link" to="/">
                概要
              </nuxt-link>
            </li>
            <li class="bl_headerNav_item">
              <nuxt-link class="bl_headerNav_link" to="/pricing">
                価格表
              </nuxt-link>
            </li>
            <li class="bl_headerNav_item">
              <nuxt-link class="bl_headerNav_link" to="/story/company-inc">
                お客様事例
              </nuxt-link>
            </li>
            <li class="bl_headerNav_item">
              <nuxt-link class="bl_headerNav_link" to="/">
                お問い合わせ
              </nuxt-link>
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
<style lang="scss" scoped>
.ly_header {
  padding-top: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid #ddd;
  background-color: #24292e;
}

.ly_header_inner {
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}

.bl_headerNav {
  display: flex;
}

.bl_headerNav_item {
  font-size: 0.85rem;
  &:last-child {
    content: none;
  }
  .bl_headerNav_link {
    &::after {
      content: none;
    }
  }
}
.hp_logo {
  font-size: 1.5rem;
}
.hp_topMenu {
  justify-content: space-between;
}
.hp_signin {
  margin: auto 0;
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

.el_signInButton {
  position: relative;
  display: inline-block;
  padding: 0.5rem;
  border-radius: 0.5em;
  border: 1px solid currentColor;
  color: #00cb00;
  text-decoration: none;
  transition: 0.25s;

  &:focus,
  &:hover {
    background-color: #00cb00;
    color: #fff;
  }
  &::after {
    width: 0;
  }
}
</style>
