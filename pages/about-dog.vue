<template>
  <section>
    <Navbar />
    <About />
  </section>
</template>

<script>
import Navbar from '../components/common/Navbar.vue'
import About from '../components/dog/AboutDog.vue'

export default {
  components: { Navbar, About },
  middleware: ['authorization']
}
</script>
