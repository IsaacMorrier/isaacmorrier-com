<template>
  <div class="grid-container">
    <div class="row grid-padding">
      <div class="main col-10">
        <block-content
          class="body-content row"
          :blocks="$page.settings.author._rawBio"
        />
      </div>
      <div class="sidebar col-2">
        <div class="sidebar-content row">
          <p class="col-12">
            <a class="nav-link" href="https://instagram.com/isaacmorrier" target="_blank">instagram</a><br>
            <a class="nav-link" href="https://linkedin.com/in/isaacmorrier" target="_blank">linkedin</a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<page-query>
{
  metadata {
    sanityOptions{
      projectId
      dataset
    }
  }
  settings: sanitySiteSettings(id: "siteSettings") {
    author {
      name
      image {
        asset {
          _id
          url
        }
      }
      _rawBio
    }
  }
}

</page-query>

<script>
import BlockContent from '~/components/BlockContent'

export default {
    components: {
      BlockContent
    },
    metaInfo: {
      title: 'Info'
    },
    methods: {
      commitSubtitle: function(subtitle) {
        this.$store.commit('setSubtitle', subtitle)
      }
    },
    beforeMount(){
      this.commitSubtitle('')
    }
  }
</script>
