<template>
  <About />
</template>

<script>
import About from '../../components/dog/AboutDog.vue'

export default {
  components: { About },
  head () {
    return {
      title: 'About Dog',
    }
  },
  middleware: ['authorization']
}
</script>
