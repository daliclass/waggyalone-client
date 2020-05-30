<template>
  <section>
    <TrainingPlan
      v-if="this.dogId"
    />
    <AboutDog v-else />
  </section>
</template>

<script>
import TrainingPlan from '../components/training/TrainingPlan'
import AboutDog from './about-dog'

export default {
  components: { AboutDog, TrainingPlan },
  computed: {
    dogId () {
      return this.$store.state.dog.dog.id
    }
  },
  middleware: ['authorization']
}
</script>
