<template>
  <div class="grid-container">
    <block-content
      class="body-content row grid-padding"
      :blocks="$page.settings.author._rawBio"
    />
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
