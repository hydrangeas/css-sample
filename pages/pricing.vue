<template>
  <div>
    <Header />
    <ul class="bl_priceUnit">
      <li class="bl_price">
        <div class="bl_price_header">
          <p class="bl_price_ttl">STARTER</p>
          <p class="bl_price_price">6,000 <span>円/台/月</span></p>
        </div>
        <!-- /bl_price_header -->
        <div class="bl_price_body">
          <p class="bl_price_lead">
            初めてインバウンドマーケティングを行う企業向けのスタートアッププラン
          </p>
          <dl class="bl_price_features">
            <dt>費用に含まれるコンタクト数</dt>
            <dd>1,000件</dd>
            <dt>月間Eメール送信数上限</dt>
            <dd>最大コンタクト数の5倍</dd>
          </dl>
          <!-- /bl_price_features -->
        </div>
      </li>
      <li class="bl_price">
        <div class="bl_price_header">
          <p class="bl_price_ttl">STANDARD</p>
          <p class="bl_price_price">18,000 <span>円/台/月</span></p>
        </div>
        <!-- /bl_price_header -->
        <div class="bl_price_body">
          <p class="bl_price_lead">
            初めてインバウンドマーケティングを行う企業向けのスタートアッププラン
          </p>
          <dl class="bl_price_features">
            <dt>費用に含まれるコンタクト数</dt>
            <dd>1,000件</dd>
            <dt>月間Eメール送信数上限</dt>
            <dd>最大コンタクト数の5倍</dd>
          </dl>
          <!-- /bl_price_features -->
        </div>
      </li>
      <li class="bl_price">
        <div class="bl_price_header">
          <p class="bl_price_ttl">ENTERPRISE</p>
          <p class="bl_price_price"><span>要お問い合わせ</span></p>
        </div>
        <!-- /bl_price_header -->
        <div class="bl_price_body">
          <p class="bl_price_lead">
            初めてインバウンドマーケティングを行う企業向けのスタートアッププラン
          </p>
          <dl class="bl_price_features">
            <dt>費用に含まれるコンタクト数</dt>
            <dd>1,000件</dd>
            <dt>月間Eメール送信数上限</dt>
            <dd>最大コンタクト数の5倍</dd>
          </dl>
          <!-- /bl_price_features -->
        </div>
      </li>
    </ul>
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
.bl_priceUnit {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  list-style: none;

  .bl_price {
    flex: 1;
    margin-right: 2.43902%;
    &:last-child {
      margin-right: 0;
    }
  }
}

.bl_price {
  border: 1px solid #ddd;
}
.bl_price_header {
  padding: 10px;
  background-color: #e25c00;
  color: #fff;
  text-align: center;
}
.bl_price_ttl {
  font-size: 1.125rem;
}
.bl_price_price {
  font-size: 1.875rem;
  span {
    font-size: 1rem;
  }
}
.bl_price_body {
  padding: 15px;
  *:last-child {
    margin-bottom: 0;
  }
}
.bl_price_lead {
  margin-bottom: 20px;
}
.bl_price_features {
  text-align: center;
  *:last-child {
    margin-bottom: 0;
  }

  dt {
    font-size: 0.9rem;
    padding: 5px;
    margin-bottom: 10px;
    background-color: #efefef;
  }
  dd {
    font-size: 0.85rem;
    margin-bottom: 10px;
  }
}
</style>
