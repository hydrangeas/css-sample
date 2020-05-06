<template>
  <div>
    <Header />
    <div
      class="ly_jumbotron"
      :style="{ 'background-image': 'url(/images/landscape.jpg)' }"
    >
      <div class="bl_jumbotron_inner">
        <h1 class="bl_jumbotron_ttl">
          Company, Inc.は笑顔の先の白さを守るために活動します
        </h1>
      </div>
    </div>
    <div class="ly_cont ly_cont__col">
      <aside class="ly_cont_side">
        <h2 class="el_lv4Heading">
          aaa
        </h2>
      </aside>
      <main class="ly_cont_main">
        <article>
          <h2 class="el_lv2Heading">
            2020年5月6日
          </h2>
          <section>
            日本国民は、正当に選挙された国会における代表者を通じて行動し、われらとわれらの子孫のために、諸国民との協和による成果と、わが国全土にわたつて自由のもたらす恵沢を確保し、政府の行為によつて再び戦争の惨禍が起ることのないやうにすることを決意し、ここに主権が国民に存することを宣言し、この憲法を確定する。
          </section>
        </article>
        <blockquote>
          <div class="el_blockquote_content">
            そもそも国政は、国民の厳粛な信託によるものであつて、その権威は国民に由来し、その権力は国民の代表者がこれを行使し、その福利は国民がこれを享受する。
          </div>
          <div class="el_blockquote_author">
            日本国憲法
          </div>
        </blockquote>
        <article>
          <section>
            これは人類普遍の原理であり、この憲法は、かかる原理に基くものである。われらは、これに反する一切の憲法、法令及び詔勅を排除する。日本国民は、恒久の平和を念願し、人間相互の関係を支配する崇高な理想を深く自覚するのであつて、平和を愛する諸国民の公正と信義に信頼して、われらの安全と生存を保持しようと決意した。
          </section>

          <h2 class="el_lv3Heading">
            序文
          </h2>
          <section>
            われらは、平和を維持し、専制と隷従、圧迫と偏狭を地上から永遠に除去しようと努めてゐる国際社会において、名誉ある地位を占めたいと思ふ。われらは、全世界の国民が、ひとしく恐怖と欠乏から免かれ、平和のうちに生存する権利を有することを確認する。
          </section>
          <section>
            われらは、いづれの国家も、自国のことのみに専念して他国を無視してはならないのであつて、政治道徳の法則は、普遍的なものであり、この法則に従ふことは、自国の主権を維持し、他国と対等関係に立たうとする各国の責務であると信ずる。
          </section>
          <section>
            日本国民は、国家の名誉にかけ、全力をあげてこの崇高な理想と目的を達成することを誓ふ。日本国民は、正当に選挙された国会における代表者を通じて行動し、われらとわれらの子孫のために、諸国民との協和による成果と、わが国全土にわたつて自由のもたらす恵沢を確保し、政府の行為によつて再び戦争の惨禍が起ることのないやうにすることを決意し、ここに主権が国民に存することを宣言し、この憲法を確定する。
          </section>
        </article>
      </main>
      <aside class="ly_cont_side">
        <h2 class="el_lv4Heading">
          aaa
        </h2>
      </aside>
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
  // background-image: url('~static/images/landscape.jpg');
  background-color: #333;
  background-position: center center;
  background-size: cover;
  padding: 100px 0 100px 0;
}
.bl_jumbotron_inner {
  width: 40%;
  margin-left: 30px;
  padding: 15px;
  background-color: rgba(51, 51, 51, 0.4);
}
.bl_jumbotron_ttl {
  color: white;
  font-size: 2em;
  font-weight: 600;
  line-height: 1.4;
}
.ly_cont {
  max-width: 100%;
  .ly_cont_main {
    article {
      section {
        margin-top: 20px;
        line-height: 1.6em;
      }
    }
    blockquote {
      width: 80%;
      margin: 40px auto;
      .el_blockquote_content {
        font-size: 1.4em;
        line-height: 1.4em;
        quotes: '\201C''\201D''\2018''\2019';
        color: #0067b8;
        &::before {
          content: open-quote;
        }
        &::after {
          content: close-quote;
        }
      }
      .el_blockquote_author {
        margin-top: 10px;
        &::before {
          content: '\2014';
        }
      }
    }
  }
}
.ly_cont_side {
  flex: 0 0 260px;
  margin-right: 3.25203%;
  &:last-of-type {
    margin-right: 0;
    margin-left: 3.25203%;
  }
}
</style>
