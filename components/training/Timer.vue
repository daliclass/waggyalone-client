<template>
  <section class="is-fullwidth">
    <h1 class="title is-3">
      {{ formattedTime }}
    </h1>
    <progress class="progress is-primary" :value="currentSeconds" :max="totalSeconds" />
    <button class="button is-primary is-medium" @click="startTimer">
      Start
    </button>
    <button class="button is-danger is-medium" @click="stopTimer">
      Stop
    </button>
  </section>
</template>

<script>
import { formatSecondsIntoTime } from '../../store/timer'

export default {
  props: {
    startTimer: Function,
    stopTimer: Function,
    currentSeconds: Number,
    totalSeconds: Number
  },
  computed: {
    formattedTime () {
      return formatSecondsIntoTime(this.currentSeconds)
    }
  }
}
</script>
