<template>
  <div class="notification is-primary">
    <h1 class="title has-text-white">You have {{ remainingTrainingSessions }} free training sessions left </h1>
    <p class="is-medium content">
      We want to help as many owners as we can that are struggling to train there dogs to be happy when left alone. We believe if we
      can help owners who are struggling we can make a difference to the number of dogs rehomed each hear.
    </p>
    <p class="is-medium content">
      Please support us in our goal for the price of 3 coffees, it will all go back into improving the product and expanding our services.
    </p>
    <a class="button is-info is-medium" @click="purchaseCourse()">
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
