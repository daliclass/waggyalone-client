<template>
  <div class="notification is-primary is-light">
    <h1 class="title">You have {{ remainingTrainingSessions }} free training sessions left </h1>
    <p class="is-medium content">
      We want to help as many owners as we can that are struggling to train there dogs to be happy when left alone. We believe if we
      can help owners and there dogs with training around separation anxiety we can make a difference to the number of dogs rehomed each hear.
    </p>
    <p class="is-medium content">
      Please support us in our goal if you are enjoying the course and have found it helpful so far.
    </p>
    <a class="button is-primary is-medium" @click="purchaseCourse()">
      Support us today
    </a>
  </div>
</template>

<script>

export default {
  props: {
    remainingTrainingSessions: Number,
    purchaseCourse: Function
  }
}
</script>
