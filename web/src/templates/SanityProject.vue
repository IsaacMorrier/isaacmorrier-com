<template>
  <div class="grid-container">

    <project-card
        :key="$page.project.id"
        :project="$page.project"
        :metadata="$page.metadata"
      />
    
    <div class="row grid-padding">
      <div class="col-7 col-offset-2 col-md-3 col-xl-offset-1">
        <block-content :blocks="$page.project._rawExcerpt" />
      </div>
    </div>

    <block-content
      class="project__content row grid-padding"
      :blocks="$page.project._rawBody"
      v-if="$page.project._rawBody"
    />

    <div class="row grid-padding">
      <div class="col-10">
          <p class="footer__copyright">© Isaac Morrier {{ new Date().getFullYear() }}</p>
      </div>
      <div class="col-2">
          <p>next:</p>
      </div>
    </div>

    <project-card
        :key="next.id"
        :project="next"
        :metadata="next.metadata"
      />

  </div>

</template>

<script>
import urlForImage from '~/utils/urlForImage.js'
import ProjectCard from '~/components/ProjectCard'
import BlockContent from '~/components/BlockContent'

export default {
  name: "Project",
  components: {
    ProjectCard,
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
  computed: {
    next() {
      const projects = this.$page.projects.edges
      const currentId = this.$page.project.id
       
      // create array of IDs
      const ids = []
      for (var  i=0; i<projects.length; i++) {
        ids.push(projects[i].node.id)
      }

      // set next to node with current index + 1, or to 0 for the last project
      var nextIndex = (ids.indexOf(currentId) < projects.length - 1) ? (ids.indexOf(currentId) + 1) : 0;
      const next = projects[nextIndex].node

      // get main image
      const image = next.mainImage
      const options = this.$page.metadata.sanityOptions
      const url = urlForImage(image, options).url()
      const params = urlForImage(image, options).auto('format').url().replace(url, '')
      const src = url + '/' + image.filename.current + params
      next.src = src

      return next
    }
  },
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
      id
      title
      subtitle
      years
      slug {
        current
      }
      mainImage {
          alt
          asset {
            _id
            url
          }
          filename {
            current
          }
          caption
          layout
        }
      _rawExcerpt
      _rawBody
    }
    projects: allSanityProject(sortBy: "publishedAt") {
      edges {
        node {
          id
          title
          subtitle
          years
          slug {
            current
          }
          categories {
            id
            title
          }
          mainImage {
            alt
            asset {
              _id
              url
            }
            filename {
              current
            }
            caption
            layout
          }
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
  &__content {
    margin-top: .625rem;
  }
}

.project-card {
  position: relative;
  margin-top: 10rem;

  &__content {
    margin-top: .625rem;

    &:empty {
      display: none;
    }
  }

  &__image {
    min-width: 100%;
  }

  &__title {
    font-size: 100%;
  }

  &__subtitle,
  &__years {
    color: var(--alt-text-color)
  }

  &__tags {
    z-index: 1;
    position: relative;
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
