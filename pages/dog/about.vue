<template>
  <About />
</template>

<script>
import About from '../../components/dog/AboutDog.vue'

export default {
  components: { About },
  middleware: ['authorization']
}
</script>
