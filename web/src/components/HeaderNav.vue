<template>
  <header class="grid-container">
      <div class="row grid-padding">
          <div class="col-2 col-xl-1">
            <g-link to="/" class="logo__container">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                <desc>Isaac Morrier</desc>
                <path d="M16,32A16,16,0,1,1,32,16,16.019,16.019,0,0,1,16,32ZM16,2A14,14,0,1,0,30,16,14.015,14.015,0,0,0,16,2Z"/>
                <path d="M6,16V14H9V10H6V8.008h8V10H11v4h3v2Z"/>
                <polygon points="24.104 8 21.516 10.831 18.928 8 17.001 8 17.001 16 19.001 16 19.001 11.043 21.516 13.794 24.001 11.076 24.001 16 26 16 26 8 24.104 8"/>
                <path d="M4.869,18.5H6.932a9.406,9.406,0,0,0,18.136,0h2.063a11.409,11.409,0,0,1-22.262,0Z"/>
              </svg>
            </g-link>
          </div>

            <div class="col-7 col-md-3">
              <transition name="fade" mode="out-in">
                <h1 class="logo__subtitle" :key=subtitle>{{subtitle}}</h1>
              </transition>
            </div>

          <div class="col-2 col-offset-1 col-md-offset-5 col-xl-1 col-xl-offset-6">
              <g-link to="/info">info</g-link>
              <!-- <toggle-theme /> -->
          </div>

      </div>
  </header>

</template>

<static-query>
query {
  settings: sanitySiteSettings(id: "siteSettings") {
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
  h1 {
    font-size: 100%;
  }
  .logo__container {
    display: inline-block;
    height: 1.5rem;
    width: 1.5rem;
  }
</style>
