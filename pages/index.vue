<template>
  <div>
    <div
      class="ly_jumbotron"
      :style="{ 'background-image': 'url(/images/landscape.jpg)' }"
    >
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
    <div class="ly_description">
      <h3 class="el_description_title">
        <span>どのような機能を使用できるか詳しく見る</span>
      </h3>
      <div class="bl_slogan">
        <div class="bl_slogan_left el_left_image">
          <img src="~static/images/landscape.jpg" />
        </div>
        <div class="bl_slogan_right el_right_text">
          b
        </div>
      </div>
      <div class="bl_slogan">
        <div class="bl_slogan_left el_left_text">
          c
        </div>
        <div class="bl_slogan_right el_right_image">
          <img src="~static/images/landscape.jpg" />
        </div>
      </div>
    </div>
    <div class="ly_description el_gray">
      <h3 class="el_description_title">
        <span>多くのラボで信頼されている理由をご覧ください</span>
      </h3>
      <div class="bl_cardUnit bl_cardUnit__col4">
        <nuxt-link to="/story/company-inc" class="bl_card">
          <figure class="bl_card_imgWrapper">
            <img src="~static/images/landscape.jpg" alt="aa" />
          </figure>
          <div class="bl_card_body">
            <h3 class="bl_card_ttl">
              title
            </h3>
            <p class="bl_card_txt">
              text
            </p>
          </div>
        </nuxt-link>
        <div class="bl_card">
          <figure class="bl_card_imgWrapper">
            <img src="~static/images/landscape.jpg" alt="aa" />
          </figure>
          <div class="bl_card_body">
            <h3 class="bl_card_ttl">
              title
            </h3>
            <p class="bl_card_txt">
              text
            </p>
          </div>
        </div>
        <div class="bl_card">
          <figure class="bl_card_imgWrapper">
            <img src="~static/images/landscape.jpg" alt="aa" />
          </figure>
          <div class="bl_card_body">
            <h3 class="bl_card_ttl">
              title
            </h3>
            <p class="bl_card_txt">
              text
            </p>
          </div>
        </div>
        <div class="bl_card">
          <figure class="bl_card_imgWrapper">
            <img src="~static/images/landscape.jpg" alt="aa" />
          </figure>
          <div class="bl_card_body">
            <h3 class="bl_card_ttl">
              title
            </h3>
            <p class="bl_card_txt">
              text
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'promotion',
  components: {},
  data() {
    return {}
  }
}
</script>

<style lang="scss">
@import '~assets/styles/main.scss';
@import '~assets/styles/_viewportscale.scss';

.ly_jumbotron {
  background-color: #333;
  background-position: center center;
  background-size: cover;
  padding: 100px 0 70px 0;
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
@media screen and (max-width: 560px) {
  .ly_jumbotron {
    background-color: #333;
    background-position: center center;
    background-size: cover;
    padding: 50px 0 35px 0;
  }
  .bl_jumbotron_inner {
    width: 90%;
    margin: 0 auto;
    padding: 0;
  }
  .bl_callSales {
    margin: 40px auto;
  }
  .el_afterIconBtn {
    text-align: center;
    width: 90%;
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
.el_gray {
  background-color: #efefef;
}
.ly_description {
  padding: 30px 10px;
  .el_description_title {
    font-size: 1.2em;
    text-align: center;

    span {
      position: relative;
      display: inline-block;
      transform: translateY(-20%);

      &::after {
        content: '';
        position: absolute;
        bottom: -10px;
        left: 50%;
        width: 80px;
        height: 1px;
        background-color: currentColor;
        transform: translateX(-50%);
      }
    }
  }
}
.bl_slogan {
  margin: 20px 0 0 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  min-height: 300px;

  .bl_slogan_left {
    &.el_left_image {
      text-align: center;
      flex: 2;
      img {
        width: 50%;
      }
    }
    &.el_left_text {
      font-size: 1.2em;
      text-align: right;
      flex: 3;
    }
  }
  .bl_slogan_right {
    &.el_right_image {
      text-align: center;
      flex: 2;
      img {
        width: 50%;
      }
    }
    &.el_right_text {
      font-size: 1.2em;
      flex: 3;
    }
  }
}
@media screen and (max-width: 560px) {
  .ly_description {
    padding: 30px 0px;
  }
  .bl_slogan {
    display: block;
    .bl_slogan_left,
    .bl_slogan_right {
      &.el_left_image,
      &.el_right_image {
        text-align: center;
        flex: 2;
        img {
          width: 100%;
        }
      }
    }
  }
}
.bl_cardUnit {
  margin-top: 60px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  .bl_cardUnit__col4 {
    margin-bottom: -30px;
  }
}
.bl_cardUnit__col4 {
  .bl_card {
    width: 23%;
    margin-right: 2%;
    margin-bottom: 30px;

    &:nth-of-type(4n) {
      margin-right: 0;
    }
  }
}

.bl_card {
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
}
.bl_card_imgWrapper {
  position: relative;
  padding-top: 56.25%;
  overflow: hidden;

  img {
    position: absolute;
    top: 50%;
    width: 100%;
    transform: translateY(-50%);
  }
}
.bl_card_body {
  padding: 15px;
  &:last-child {
    margin-bottom: 0;
  }
}
.bl_card_ttl {
  margin-bottom: 5px;
  font-size: 1.125rem;
  font-weight: bold;
}
.bl_card_txt {
  color: #777;
}
a.bl_card {
  display: block;
  color: currentColor;
  text-decoration: none;
  transition: 0.25s;
  .bl_card_ttl,
  .bl_card_txt {
    transition: 0.25s;
  }
  &:focus,
  &:hover {
    opacity: 0.75;
    .bl_card_ttl,
    .bl_card_txt {
      color: #e25c00;
      text-decoration: underline;
    }
  }
}
</style>
