<template>
  <section>
    <Loading v-if="isLoading" />
    <section v-else>
      <div class="hero is-white">
        <div class="hero-body">
          <div class="container">
            <div class="columns is-mobile">
              <div class="column is-one-fifth">
                <img src="~/assets/dog-2.svg" alt="Sa coach logo" height="50">
              </div>
              <div class="column">
                <h1 class="title">
                  {{ milestoneTitle }}
                </h1>
                <h2 v-for="paragraph in milestoneDescription" :key="paragraph" class="subtitle">
                  {{ paragraph }}
                </h2>
                <div v-if="hasNextMilestone" class="buttons is-pulled-right">
                  <button class="button is-info is-medium" @click="skipMilestone">
                    Skip milestone
                  </button>
                </div>
                <div v-if="hasPreviousMilestone" class="buttons is-pulled-right">
                  <button class="button is-info is-medium" @click="previousMilestone">
                    Previous milestone
                  </button>
                </div>
                <div class="buttons is-pulled-right">
                  <button class="button is-primary is-medium" @click="startTrainingSession">
                    Start training
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="hasTrainingSessions" class="container has-text-centered">
        <table class="table is-fullwidth">
          <thead>
            <tr>
              <th>Grade</th>
              <th>Milestone</th>
              <th>Duration</th>
              <th>View</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="trainingSession in trainingSessions" :key="trainingSession.id">
              <td><Grade :grade="trainingSession.grade" /></td>
              <td>{{ trainingSession.details.title }}</td>
              <td>{{ formatTime(trainingSession.exercises) }}</td>
              <td>
                <button class="button is-info" @click="reviewSession(trainingSession.id)">
                  View
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </section>
</template>

<script>
import Grade from '../common/Grade'
import Loading from '../common/Loading'
import { formatSecondsIntoTime } from '../../store/timer'

export default {
  components: { Grade, Loading },
  computed: {
    isLoading () {
      return this.milestoneTitle === null
    },
    dogId () {
      return this.$store.state.dog.dog.id
    },
    dogName () {
      return this.$store.state.dog.dog.name
    },
    milestoneTitle () {
      return this.$store.state.trainingPlan.currentTrainingSession.details.title
    },
    milestoneDescription () {
      return this.$store.state.trainingPlan.currentTrainingSession.details.description
    },
    trainingSessions () {
      return this.$store.state.trainingPlan.trainingSessions
    },
    hasTrainingSessions () {
      return this.$store.state.trainingPlan.trainingSessions != null && this.$store.state.trainingPlan.trainingSessions.length > 0
    },
    hasNextMilestone () {
      return this.$store.state.trainingPlan.hasNextMilestone
    },
    hasPreviousMilestone () {
      return this.$store.state.trainingPlan.hasPreviousMilestone
    }
  },
  created () {
    this.$store.dispatch('trainingPlan/get')
  },
  methods: {
    startTrainingSession () {
      this.$router.push('/training/start')
    },
    formatTime (exercises) {
      return formatSecondsIntoTime(exercises[exercises.length - 1].duration)
    },
    reviewSession (trainingSessionId) {
      this.$router.push('/training/' + trainingSessionId)
    },
    skipMilestone () {
      this.$store.dispatch('trainingPlan/skipMilestone')
    },
    previousMilestone () {
      this.$store.dispatch('trainingPlan/previousMilestone')
    }
  }
}
</script>
