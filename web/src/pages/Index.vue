<template>
  <div>
    <!-- <button v-on:click="testMethod($page.settings.subtitle)">Test Button</button> -->
    <div class="projects">
      <project-card
        v-for="edge in $page.projects.edges"
        :key="edge.node.id"
        :project="edge.node"
        :metadata="$page.metadata"
      />
    </div>
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
        slug {
          current
        }
        categories {
          id
          title
        }
        publishedAt(format: "D. MMMM YYYY")
        _rawExcerpt
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
