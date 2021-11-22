<template>
  <div class="grid-container">
    <div class="row grid-padding">
        
      <div class="col-2 col-xl-1">
      </div>

      <div class="col-7 col-md-3">
        <block-content :blocks="$page.project._rawExcerpt" />
      </div>

      <div class="col-2 col-lg-2 col-lg-offset-5">
        <!-- <p class="project__years" v-html="$page.project.years" /> -->
      </div>

    </div>

    <block-content
      class="project__content row grid-padding"
      :blocks="$page.project._rawBody"
      v-if="$page.project._rawBody"
    />

    <div class="row grid-padding">
      <div class="col-2 col-xl-1">
      </div>
      <div class="col-7 col-md-3">
          <p>© Isaac Morrier {{ new Date().getFullYear() }}</p>
      </div>
    </div>

      

    <!-- <div class="row grid-padding">

      <div class="col-3 col-lg-2">
        <h2 class="project__title" v-html="$page.next.title" />
      </div>

      <div class="col-7 col-lg-3">
        <p class="project__subtitle" v-html="$page.next.subtitle" />
      </div>

      <div class="col-2 col-lg-2 col-lg-offset-5">
        <p class="project__years" v-html="$page.next.years" />
      </div>

      <div :class="['project-card__content', $page.next.mainImage.layout]">
        <g-image
          :alt="$page.next.mainImage.alt"
          v-if="$page.next.mainImage"
          class="project-card__image"
          :src="src"
        />
        <g-link class="project-card__link" :to="$page.next.slug.current">Link</g-link>
      </div>

    </div> -->

  </div>

</template>

<script>
import BlockContent from '~/components/BlockContent'
import ProjectMeta from '~/components/ProjectMeta'
import ProjectTags from '~/components/ProjectTags'

export default {
  name: "Project",
  components: {
    ProjectMeta,
    ProjectTags,
    BlockContent
  },
  metaInfo() {
    return {
      title: this.$page.project.title,
      meta: [
        {
          name: 'description',
          content: this.$page.project.description
        }
      ]
    }
  },
  methods: {
    commitSubtitle: function(subtitle) {
      this.$store.commit('setSubtitle', subtitle)
    }
  },
  // computed: {
  //   src() {
  //     const image = this.next.mainImage
  //     const options = this.$page.metadata.sanityOptions
  //     const url = urlForImage(image, options).url()
  //     const params = urlForImage(image, options).auto('format').url().replace(url, '')
  //     const src = url + '/' + image.filename.current + params
  //     return src
  //   }
  // },
  beforeMount(){
    this.commitSubtitle(this.$page.project.title)
  }
}
</script>

<page-query>
  query Project ($id: ID!) {
    metadata {
      sanityOptions {
        projectId
        dataset
      }
    }
    project: sanityProject (id: $id) {
      title
      subtitle
      years
      categories {
        id
        title
      }
      _rawExcerpt
      _rawBody
    }
  }
</page-query>

<style lang="scss">

.project {
  &__title {
    font-size: 100%;
    margin-bottom: 1em;
  }
  &__subtitle,
  &__years {
    color: var(--alt-text-color)
  }
  &__content {
    margin-top: .625rem;
  }
}

</style>
