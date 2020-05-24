<template>
  <TrainingSession />
</template>

<script>
import TrainingSession from '../components/TrainingSession'

export default {
  components: { TrainingSession },
  middleware: ['authorization']
}
</script>
