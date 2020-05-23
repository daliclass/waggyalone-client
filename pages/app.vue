<template>
  <section>
    <TrainingOverview v-if="this.dogId" />
    <AboutDog v-else />
  </section>
</template>

<script>
import TrainingOverview from '../components/TrainingOverview'
import AboutDog from './about-dog'

export default {
  components: { AboutDog, TrainingOverview },
  computed: {
    dogId () {
      return this.$store.state.dog.dog.id
    }
  },
  middleware: ['authorization']
}
</script>
