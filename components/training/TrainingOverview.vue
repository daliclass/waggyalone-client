<template>
  <section>
    <Hero
      :title="milestoneTitle"
      :subtitle="milestoneDescription"
    />
    <div class="container">
      <div class="columns is-centered">
        <div class="column is-12-mobile is-10-tablet is-8-desktop is-8-widescreen has-text-centered">
          <table class="table is-fullwidth">
            <thead>
              <tr>
                <th>Exercise</th>
                <th>Description</th>
                <th>Duration</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="trainingExercise in trainingExercises" :key="trainingExercise.uuid" class="is-size-5">
                <td>{{ trainingExercise.exercise.action }} in  {{ trainingExercise.exercise.location }}</td>
                <td>{{ trainingExercise.exercise.description }}</td>
                <td>{{ trainingExercise.duration }}</td>
              </tr>
            </tbody>
          </table>
          <button class="button is-info is-medium" @click="goToOverview">
            Back to overview
          </button>
          <button class="button is-primary is-medium" @click="goToSession">
            Start session
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Hero from '../common/Hero'

export default {
  components: { Hero },
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
    },
    goToSession () {
      this.$router.push('/training-session')
    }
  }
}
</script>
