<template>
  <section>
    <Loading v-if="sessionCompleted" />
    <div v-if="!sessionCompleted" class="container">
      <div class="columns is-centered">
        <div class="column is-10-mobile is-8-tablet is-8-desktop is-8-widescreen has-text-centered">
          <Hero
            :title="exerciseName"
            :subtitle="exerciseDescription"
          />
        </div>
      </div>
      <div class="columns is-centered">
        <div class="column is-10-mobile is-8-tablet is-8-desktop is-8-widescreen has-text-centered">
          <Timer
            :start-timer="startTimer"
            :stop-timer="stopTimer"
            :current-seconds="currentSeconds"
            :total-seconds="totalSeconds"
          />
          <br>
          <GradePicker
            :grade-great="gradeGreat"
            :grade-okay="gradeOkay"
            :grade-stressed="gradeStressed"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Hero from '../common/Hero'
import Loading from '../common/Loading'
import { formatSecondsIntoTime } from '../../store/timer'
import Timer from './Timer'
import GradePicker from './GradePicker'

export default {
  components: { Timer, GradePicker, Hero, Loading },
  computed: {
    sessionCompleted () {
      return this.$store.state.trainingPlan.currentExercise === null
    },
    currentSeconds () {
      return this.$store.state.timer.currentSeconds
    },
    totalSeconds () {
      return this.$store.state.timer.totalSeconds
    },
    exerciseName () {
      const exercise = this.$store.state.trainingPlan.currentExercise
      return exercise.exercise.action + ' in ' + exercise.exercise.location
    },
    exerciseDescription () {
      const exercise = this.$store.state.trainingPlan.currentExercise
      const duration = exercise.duration
      const durationInformation = 'This exercise takes ' + formatSecondsIntoTime(duration)
      return durationInformation + exercise.exercise.description
    },
    exerciseDuration () {
      const exercise = this.$store.state.trainingPlan.currentExercise
      return exercise.duration
    }
  },
  updated () {
    if (this.$store.state.trainingPlan.completedTrainingSessionId != null) {
      this.$router.push('/training/' + this.$store.state.trainingPlan.completedTrainingSessionId)
      this.$store.dispatch('trainingPlan/removeCompletedTrainingSessionId')
    }
  },
  methods: {
    startTimer () {
      this.$store.dispatch('timer/start', this.exerciseDuration)
    },
    stopTimer () {
      this.$store.dispatch('timer/stop')
    },
    gradeGreat () {
      this.$store.dispatch('trainingPlan/completeExercise', 'GREAT')
      this.stopTimer()
    },
    gradeOkay () {
      this.$store.dispatch('trainingPlan/completeExercise', 'OKAY')
      this.stopTimer()
    },
    gradeStressed () {
      this.$store.dispatch('trainingPlan/completeExercise', 'STRESSED')
      this.stopTimer()
    }
  }
}
</script>
