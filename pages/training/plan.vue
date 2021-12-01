<template>
  <section>
    <TrainingPlan
      v-if="dogId"
    />
    <AboutDog v-else />
  </section>
</template>

<script>
import TrainingPlan from '../../components/training/TrainingPlan'
import AboutDog from '../dog/about'

export default {
  components: { AboutDog, TrainingPlan },
  computed: {
    dogId () {
      return this.$store.state.dog.dog.id
    }
  },
  head () {
    return {
      title: 'Training Home'
    }
  },
  middleware: ['authorization']

}
</script>
