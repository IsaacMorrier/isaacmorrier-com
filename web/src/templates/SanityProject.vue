<template>
  <div class="grid-container">
    <div class="row grid-padding">
        
      <div class="col-3 col-lg-2">
        <h1 class="project__title" v-html="$page.project.title" />
        <block-content :blocks="$page.project._rawExcerpt" />
      </div>

      <div class="col-7 col-lg-3">
        <p class="project__subtitle" v-html="$page.project.subtitle" />
        <!-- <project-meta class="project-card__meta" :project="project" /> -->
        <!-- <project-tags class="project-card__tags" :project="project" /> -->
      </div>

      <div class="col-2 col-lg-2 col-lg-offset-5">
        <p class="project__years" v-html="$page.project.years" />
      </div>

    </div>

    <block-content
      class="project__content row grid-padding"
      :blocks="$page.project._rawBody"
      v-if="$page.project._rawBody"
    />

    <div class="project__footer">
      <project-tags :project="$page.project" v-if="$page.project" />
    </div>

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
  beforeMount(){
    this.commitSubtitle(' → ' + this.$page.project.title)
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
    publishedAt (format: "D. MMMM YYYY")
    categories {
      id
      title
    }
    _rawExcerpt
    _rawBody
    mainImage {
      asset {
        _id
        url
      }
      filename
      caption
      alt
      layout
      hotspot {
        x
        y
        height
        width
      }
      crop {
        top
        bottom
        left
        right
      }
    }
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
}

</style>
