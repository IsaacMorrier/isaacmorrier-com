<template>
    <g-link class="logo" to="/">
      <span class="logo__text">{{ $static.settings.title }}</span>
      <transition name="fade" mode="out-in">
      <span class="logo__subtitle" :key=subtitle>{{subtitle}}</span>
      </transition>
    </g-link>
</template>

<static-query>
query {
  settings: sanitySiteSettings(id: "siteSettings") {
    title
    subtitle
  }
}
</static-query>

<script>
  export default {
    computed: {
      subtitle () {
        return this.$store.state.subtitle
      }
    }
  }
</script>

<style lang="scss">
  .logo {
    text-decoration: none;
    color: var(--body-color) !important;
    font-size: 0.9em;

    &__image {
      vertical-align: middle;
      border-radius: 99px;
      height: 40px;
      width: 40px;
      margin-right: 0.5em;
    }
  }
</style>
