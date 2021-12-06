<template>
  <div class="project-card">
      
    <div class="project-card__title-container">
      <h2 class="project-card__title" v-html="project.title" />
    </div>

    <div class="project-card__subtitle-container">
      <p class="project-card__subtitle" v-html="project.subtitle" />
    </div>

    <div class="project-card__years-container">
      <p class="project-card__years" v-html="project.years" />
    </div>

    <div :class="['project-card__content', project.mainImage.layout]">
      <g-image
        :alt="project.mainImage.alt"
        v-if="project.mainImage"
        class="project-card__image"
        :src="src"
      />
      <g-link class="project-card__link" :to="project.slug.current">Link</g-link>
    </div>

  </div>
</template>

<script>
import urlForImage from '~/utils/urlForImage.js'
import BlockContent from '~/components/BlockContent'

export default {
  components: {
    BlockContent
  },
  props: {
    project: Object
  },
  computed: {
    src() {
      const image = this.project.mainImage
      const options = this.$page.metadata.sanityOptions
      const url = urlForImage(image, options).url()
      const params = urlForImage(image, options).auto('format').url().replace(url, '')
      const src = url + '/' + image.filename.current + params
      return src 
    }
  }
}
</script>

<style lang="scss">
@import "~/assets/style/_utils.scss";

.project-card {
  @extend .row;
  @extend .grid-padding;
  position: relative;

  &__content {
    margin-top: .625rem;

    &:empty {
      display: none;
    }
  }

  &__image {
    min-width: 100%;
  }

  &__title-container {
    @extend .col-10, .col-md-2, .col-xl-1;
  }

  &__title {
    font-size: 100%;
  }

  &__years-container {
    @extend .col-2, .col-offset-1, .col-md-offset-5, .col-xl-offset-6;
  }

  &__subtitle-container {
    @extend .col-9, .col-md-3;
  }

  &__subtitle,
  &__years {
    color: var(--alt-text-color)
  }

  &__link {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    overflow: hidden;
    text-indent: -9999px;
    z-index: 0;
  }
}
</style>
