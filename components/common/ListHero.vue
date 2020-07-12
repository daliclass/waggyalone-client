<template>
  <div class="hero is-white">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">
          {{ title }}
        </h1>
        <h2 v-for="paragraph in subtitle" :key="paragraph" class="subtitle">
          {{ paragraph }}
        </h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    subtitle: Object
  }
}
</script>
