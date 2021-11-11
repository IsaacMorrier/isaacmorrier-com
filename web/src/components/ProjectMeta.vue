<template>
  <div class="project-meta">
    Published {{ project.publishedAt }}.
    <template v-if="project.timeToRead">
      <strong>{{ project.timeToRead }} min read.</strong>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    project: Object
  }
}
</script>

<style lang="scss">
.project-meta {
  font-size: 0.8em;
  opacity: 0.8;
}
</style>
