<template>
  <section>
    <Navbar />
    <h1 class="title">
      App
    </h1>
  </section>
</template>

<script>
import Navbar from '../components/Navbar.vue'

export default {
  components: { Navbar },
  computed: {
    dogId () {
      return this.$store.state.dog.dog.id
    }
  },
  created () {
    if (!this.dogId) {
      this.$router.push('/about-dog')
    }
  },
  middleware: ['authorization']
}
</script>
