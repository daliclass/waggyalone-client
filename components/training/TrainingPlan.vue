<template>
  <section>
    <div class="hero is-white">
      <div class="hero-body">
        <div class="container">
          <div class="columns is-mobile">
            <div class="column is-one-fifth">
              <img src="~/assets/paw.png" alt="Sa coach logo" height="50">
            </div>
            <div class="column">
              <h1 class="title">
                {{ milestoneTitle }}
              </h1>
              <h2 class="subtitle">
                {{ milestoneDescription }}
              </h2>
              <div class="buttons is-pulled-right">
                <button class="button is-info is-medium">
                  Information
                </button>
                <button class="button is-primary is-medium" @click="startTrainingSession">
                  Start training
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    dogId () {
      return this.$store.state.dog.dog.id
    },
    dogName () {
      return this.$store.state.dog.dog.name
    },
    milestoneTitle () {
      return this.$store.state.trainingPlan.nextTrainingSession.details.title
    },
    milestoneDescription () {
      return this.$store.state.trainingPlan.nextTrainingSession.details.description
    }
  },
  created () {
    this.$store.dispatch('trainingPlan/get')
  },
  methods: {
    startTrainingSession () {
      this.$router.push('/start-session')
    }
  }
}
</script>
