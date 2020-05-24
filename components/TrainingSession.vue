<template>
  <section>
    <Navbar />
    <Hero
      :title="milestoneTitle"
      :subtitle="milestoneDescription"
    />
    <div class="container">
      <div class="columns is-centered">
        <div class="column is-12-mobile is-12-tablet is-12-desktop is-12-widescreen has-text-centered">
          <table class="table">
            <thead>
              <tr>
                <th>Exercise</th>
                <th>Location</th>
                <th>Description</th>
                <th>Duration</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="trainingExercise in trainingExercises" :key="trainingExercise.uuid" class="is-size-5">
                <td>{{ trainingExercise.exercise.action }} </td>
                <td>{{ trainingExercise.exercise.location }} </td>
                <td>{{ trainingExercise.exercise.description }}</td>
                <td>{{ trainingExercise.duration }}</td>
              </tr>
            </tbody>
          </table>
          <button class="button is-info is-medium" @click="goToOverview">
            Back to overview
          </button>
          <button class="button is-primary is-medium">
            Start session
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Navbar from './Navbar.vue'
import Hero from './Hero.vue'

export default {
  components: { Navbar, Hero },
  computed: {
    milestoneTitle () {
      return this.$store.state.trainingPlan.nextTrainingSession.details.title
    },
    milestoneDescription () {
      return this.$store.state.trainingPlan.nextTrainingSession.details.description
    },
    trainingExercises () {
      return this.$store.state.trainingPlan.nextTrainingSession.exercises
    }
  },
  methods: {
    goToOverview () {
      this.$router.push('/app')
    }
  }
}
</script>
