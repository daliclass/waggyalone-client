<template>
  <div class="container">
    <div class="columns is-centered">
      <div class="column is-10-mobile is-8-tablet is-8-desktop is-8-widescreen has-text-centered">
        <Hero
          title="Settle dog in same room"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
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
          :formatted-hours="formattedHours"
          :formatted-minutes="formattedMinutes"
          :formatted-seconds="formattedSeconds"
        />
        <br>
        <Grade />
      </div>
    </div>
  </div>
</template>

<script>
import Hero from '../common/Hero'
import Timer from './Timer'
import Grade from './Grade'

export default {
  components: { Timer, Grade, Hero },
  computed: {
    currentSeconds () {
      return this.$store.state.timer.currentSeconds
    },
    totalSeconds () {
      return this.$store.state.timer.totalSeconds
    },
    formattedHours () {
      return this.$store.state.timer.formattedHours
    },
    formattedMinutes () {
      return this.$store.state.timer.formattedMinutes
    },
    formattedSeconds () {
      return this.$store.state.timer.formattedSeconds
    }
  },
  methods: {
    startTimer () {
      this.$store.dispatch('timer/start')
    },
    stopTimer () {
      this.$store.dispatch('timer/stop')
    }
  }
}
</script>
