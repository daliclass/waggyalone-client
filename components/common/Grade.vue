<template>
  <section>
    <button v-if="grade === 'GREAT'" class="button is-primary">
      Great
    </button>
    <button v-if="grade === 'OKAY'" class="button is-warning">
      Okay
    </button>
    <button v-if="grade === 'STRESSED'" class="button is-danger">
      Stressed
    </button>
  </section>
</template>

<script>
export default {
  props: {
    grade: String
  }
}
</script>
