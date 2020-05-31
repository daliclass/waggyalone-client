<template>
  <section class="is-fullwidth">
    <h1 class="title is-3">
      {{ formattedHours }} / {{ formattedMinutes }} / {{ formattedSeconds }}
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
export default {
  props: {
    startTimer: Function,
    stopTimer: Function,
    currentSeconds: Number,
    totalSeconds: Number,
    formattedHours: Number,
    formattedMinutes: Number,
    formattedSeconds: Number
  }
}
</script>
