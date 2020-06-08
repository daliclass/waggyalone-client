<template>
  <section>
    <Hero
      :title="milestoneTitle"
      :subtitle="milestoneDescription"
    />
    <div class="container is-centered has-text-centered">
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
            <td>{{ formattedTime(trainingExercise.duration) }}</td>
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
  </section>
</template>

<script>
import Hero from '../common/Hero'
import { formatSecondsIntoTime } from '../../store/timer'

export default {
  components: { Hero },
  computed: {
    milestoneTitle () {
      return this.$store.state.trainingPlan.currentTrainingSession.details.title
    },
    milestoneDescription () {
      return this.$store.state.trainingPlan.currentTrainingSession.details.description
    },
    trainingExercises () {
      return this.$store.state.trainingPlan.currentTrainingSession.exercises
    }
  },
  methods: {
    goToOverview () {
      this.$router.push('/training/plan')
    },
    goToSession () {
      this.$router.push('/training/session')
      this.$store.dispatch('trainingPlan/setCurrentExercise')
    },
    formattedTime (duration) {
      return formatSecondsIntoTime(duration)
    }
  }
}
</script>
