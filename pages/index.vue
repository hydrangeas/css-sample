<template>
  <div>
    <Header />
    <div class="ly_jumbotron">
      <div class="bl_jumbotron_inner">
        <h1 class="bl_jumbotron_ttl">
          無停止で稼働し続けるには、道具の状態を正しく保ちます。
        </h1>
        <div class="bl_callSales">
          <a href="" class="el_afterIconBtn el_afterIconBtn__call">
            営業担当者へのお問い合わせ
          </a>
        </div>
        <div class="bl_jumbotron_benefit">
          <h2 class="bl_benefit_title">
            以下の内容がご利用になれます。
          </h2>
          <ul class="bl_benefit_list">
            <li class="bl_benefit_item">3カ月間の無料サービス</li>
            <li class="bl_benefit_item">15を超える機能</li>
            <li class="bl_benefit_item">豊富なドキュメント</li>
          </ul>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer'

export default {
  components: {
    Header,
    Footer
  },
  data() {
    return {}
  }
}
</script>

<style lang="scss">
@import '~assets/styles/main.scss';
@import '~assets/styles/_viewportscale.scss';

.ly_jumbotron {
  background-image: url('~static/images/landscape.jpg');
  // background-color: #1034a6;
  background-position: center center;
  background-size: cover;
  padding: 100px 0 20px 0;
}
.bl_jumbotron_inner {
  width: 67%;
  padding: 0 15px 0 15px;
}
.bl_jumbotron_ttl {
  color: white;
  font-size: 3em;
  font-weight: 600;
  line-height: 1.2;
}
.bl_callSales {
  margin: 40px 0px;
}
.el_afterIconBtn {
  position: relative;
  display: inline-block;
  padding: 1em 1em;
  border-radius: 0.5em;
  border: 1px solid currentColor;
  color: #e25c00;
  text-decoration: none;
  transition: 0.25s;

  &:focus,
  &:hover {
    background-color: #e25c00;
    color: #fff;
  }
  &::after {
    display: inline-block;
    margin-left: 0.5em;
    margin-right: 0.5em;
    font-family: 'Font Awesome 5 Free';
    font-weight: 900;
  }
  &.el_afterIconBtn__call {
    &::after {
      content: '\f095';
    }
  }
}
.bl_benefit_title {
  color: #fff;
  font-size: 1.5em;
}
.bl_benefit_list {
  padding-top: 30px;
  padding-left: 50px;
}
.bl_benefit_item {
  color: #fff;
  font-size: 1.2em;
  padding-top: 10px;

  &:first-of-type {
    padding-top: 0px;
  }
}
</style>
