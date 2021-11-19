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
