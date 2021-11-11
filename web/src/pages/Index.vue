<template>
  <Layout :show-logo="false">
    <!-- Author intro -->
    <author-card :show-title="true" />

    <div class="projects">
      <project-card
        v-for="edge in $page.projects.edges"
        :key="edge.node.id"
        :project="edge.node"
        :metadata="$page.metadata"
      />
    </div>
  </Layout>
</template>

<page-query>
{
  metadata {
    sanityOptions {
      projectId
      dataset
    }
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
import AuthorCard from '~/components/AuthorCard'
import ProjectCard from '~/components/ProjectCard'

export default {
  components: {
    AuthorCard,
    ProjectCard
  },
  metaInfo: {
    title: 'Work'
  }
}
</script>
