<template>
    <Layout>
        <router-view />
    </Layout>
</template>

<static-query>
query {
  settings: sanitySiteSettings(id: "siteSettings") {
    title
    description
  }
}
</static-query>

<script>

export default {
    metaInfo() {
        return {
            title: this.$static.settings.title,
            meta: [
                {
                key: 'description',
                name: 'description',
                content: this.$static.settings.description
                }
            ]
        }
    }
}
</script>
