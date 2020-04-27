<template>
  <div>
    <Header />
    <div>
      <nav class="bl_tabNav">
        <ul class="bl_tabNav_inner">
          <li>
            <span class="bl_tabNav_link is_active">
              契約・手続きについて
            </span>
          </li>
          <li>
            <a class="bl_tabNav_link" href="#">
              製品について
            </a>
          </li>
          <li>
            <a class="bl_tabNav_link" href="#">
              キャンペーンについて
            </a>
          </li>
          <li>
            <a class="bl_tabNav_link" href="#">
              会員機能について
            </a>
          </li>
          <li>
            <a class="bl_tabNav_link" href="#">
              各種お手続きについて
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
import Header from '~/components/Header.vue'
// import Logo from '~/components/Logo.vue'

export default {
  components: {
    Header
  }
}
</script>
