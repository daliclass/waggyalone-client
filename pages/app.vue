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
  middleware: ['authorization']
}
</script>
