<template>
  <div>
    <div class="project-title">
      <h1 class="project-title__text">{{ $page.project.title }}</h1>

      <project-meta :project="$page.project" v-if="$page.project" />
    </div>

    <div class="project content-box">
      <div class="project__header">
        <img
          alt="Cover image"
          v-if="$page.project.mainImage"
          :src="$urlForImage($page.project.mainImage, $page.metadata.sanityOptions).width(600).auto('format').url()"
        />
      </div>

      <block-content
        class="project__content"
        :blocks="$page.project._rawBody"
        v-if="$page.project._rawBody"
      />

      <div class="project__footer">
        <project-tags :project="$page.project" v-if="$page.project" />
      </div>
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
      caption
      alt
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
.project-title {
  padding: calc(var(--space) / 2) 0 calc(var(--space) / 2);
  text-align: center;
}

.project {
  &__header {
    width: calc(100% + var(--space) * 2);
    margin-left: calc(var(--space) * -1);
    margin-top: calc(var(--space) * -1);
    margin-bottom: calc(var(--space) / 2);
    overflow: hidden;
    border-radius: var(--radius) var(--radius) 0 0;

    img {
      width: 100%;
    }

    &:empty {
      display: none;
    }
  }

  &__content {
    h2:first-child {
      margin-top: 0;
    }

    p:first-of-type {
      font-size: 1.2em;
      color: var(--title-color);
    }

    img {
      width: calc(100% + var(--space) * 2);
      margin-left: calc(var(--space) * -1);
      display: block;
      max-width: none;
    }
  }
}

</style>
