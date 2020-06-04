<template>
  <section>
    <h1 class="subtitle is-5">
      How did dog get on?
    </h1>
    <button class="button is-primary is-medium" @click="gradeGreat">
      Great
    </button>
    <button class="button is-warning is-medium" @click="gradeOkay">
      Okay
    </button>
    <button class="button is-danger is-medium" @click="gradeStressed">
      Stressed
    </button>
  </section>
</template>

<script>
export default {
  props: {
    gradeGreat: Function,
    gradeOkay: Function,
    gradeStressed: Function
  }
}
</script>
