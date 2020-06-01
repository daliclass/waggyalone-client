<template>
  <section>
    <Loading v-if="isLoading" />
    <section v-else>
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-12-mobile is-10-tablet is-8-desktop is-8-widescreen has-text-centered">
            <Hero
              :title="message"
              subtitle="some generic advice about keeping going etc etc etc"
            />
            <table class="table is-fullwidth">
              <thead>
                <tr>
                  <th>Exercise</th>
                  <th>Duration</th>
                  <th>Grade</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="exercise in trainingSession.exercises" :key="exercise.uuid" class="is-size-5">
                  <td>{{ exercise.exercise.action }} in  {{ exercise.exercise.location }}</td>
                  <td>{{ formattedTime(exercise.duration) }}</td>
                  <td><Grade :grade="exercise.grade" /></td>
                </tr>
              </tbody>
            </table>
            <button class="button is-info is-medium" @click="goToOverview">
              Back to overview
            </button>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
import Loading from '../../components/common/Loading'
import Grade from '../../components/common/Grade'
import Hero from '../../components/common/Hero'
import { formatSecondsIntoTime } from '../../store/timer'

export default {
  components: { Loading, Hero, Grade },
  computed: {
    isLoading () {
      return this.trainingSession === null
    },
    trainingSession () {
      const trainingSessionId = this.$route.params.id
      const trainingSession = this.$store.getters['trainingPlan/getTrainingSession'](trainingSessionId)
      return trainingSession
    },
    message () {
      const grade = this.trainingSession.grade
      const name = this.$store.state.dog.dog.name
      if (grade === 'STRESSED') {
        return name + ' was stressed, we are reducing the time for the next session'
      } else if (grade === 'GREAT') {
        return name + ' did really well we are increasing the time for the next session'
      }
      return name + ' did okay next session we will try the same length again'
    }
  },
  created () {
    this.$store.dispatch('trainingPlan/get')
  },
  methods: {
    goToOverview () {
      this.$router.push('/app')
    },
    formattedTime (duration) {
      return formatSecondsIntoTime(duration)
    }
  }
}
</script>
