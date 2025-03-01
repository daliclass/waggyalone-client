<template>
  <section>
    <Loading v-if="isLoading" />
    <section v-else>
      <div class="container is-centered has-text-centered">
        <div class="has-text-left">
          <ListHero
            :title="trainingSession.details.title"
            :subtitle="trainingSession.details.description"
          />
          <hr>
          <h2 class="title">
            Session report: {{ message }}
          </h2>
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
                <td>{{ exercise.exercise.action }}</td>
                <td>{{ formattedTime(exercise.duration) }}</td>
                <td><Grade :grade="exercise.grade" /></td>
              </tr>
            </tbody>
          </table>
        </div>
        <button class="button is-primary is-light is-large mb-4" @click="goToOverview">
          Back to overview
        </button>
      </div>
    </section>
  </section>
</template>

<script>
import Loading from '../../components/common/Loading'
import Grade from '../../components/common/Grade'
import ListHero from '../../components/common/ListHero'
import { formatSecondsIntoTime } from '../../store/timer'

export default {
  components: { Loading, Grade, ListHero },
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
      return name + ' did okay next session we will go back the previous great time'
    }
  },
  created () {
    this.$store.dispatch('trainingPlan/get')
  },
  methods: {
    goToOverview () {
      this.$router.push('/training/plan')
    },
    formattedTime (duration) {
      return formatSecondsIntoTime(duration)
    }
  },
  head () {
    return {
      title: 'Completed Training Overview'
    }
  },
  middleware: ['authorization']
}
</script>
