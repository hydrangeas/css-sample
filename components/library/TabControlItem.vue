<template>
  <span v-if="isActive" class="bl_tabNav_link is_active">
    {{ title }}
  </span>
  <nuxt-link v-else class="bl_tabNav_link" :to="linkTo">
    {{ title }}
  </nuxt-link>
</template>

<script>
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}
export default {
  props: {
    title: {
      type: String,
      require: true,
      default: ''
    },
    isActive: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      linkTo: '/dashboard/' + capitalizeFirstLetter(this.title.toLowerCase())
    }
  }
}
</script>

<style lang="scss">
.bl_tabNav_link {
  display: inline-block;
  padding-right: 10px;
  padding-bottom: 10px;
  padding-left: 10px;
  margin-bottom: 10px;
  border-bottom: 2px solid #efefef;
  color: #777;
  text-decoration: none;
  transition: 0.25s;
  font-size: 0.8em;

  &:focus,
  &:hover {
    border-bottom-color: currentColor;
    color: #e25c00;
    opacity: 0.75;
  }
  &.is_active {
    border-bottom-color: currentColor;
    color: #e25c00;
    pointer-events: none;
  }
}
</style>
