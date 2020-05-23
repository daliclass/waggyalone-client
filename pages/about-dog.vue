<template>
  <section>
    <Navbar />
    <About />
  </section>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import About from '../components/About.vue'

export default {
  components: { Navbar, About },
  middleware: ['authorization']
}
</script>
