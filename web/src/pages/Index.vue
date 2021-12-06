<template>
  <div class="projects-list">
    <project-card
      v-for="edge in $page.projects.edges"
      :key="edge.node.id"
      :project="edge.node"
      :metadata="$page.metadata"
    />
  </div>
</template>

<page-query>
{
  metadata {
    sanityOptions {
      projectId
      dataset
    }
  }
  settings: sanitySiteSettings(id: "siteSettings") {
    subtitle
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

<script>
  import ProjectCard from '~/components/ProjectCard'

  export default {
    components: {
      ProjectCard
    },
    metaInfo: {
      title: 'Work'
    },
    methods: {
      commitSubtitle: function(subtitle) {
        this.$store.commit('setSubtitle', subtitle)
      }
    },
    beforeMount(){
      this.commitSubtitle(this.$page.settings.subtitle)
    }
  }
</script>

<style lang="scss">
  @import '~/assets/style/_utils.scss';

  .projects-list {
     @extend .grid-container;
  &  .project-card {
      margin-bottom: 6rem;
    }
  }
</style>