<template>
  <TrainingSession />
</template>

<script>
import TrainingSession from '../../components/training/TrainingSession'

export default {
  components: { TrainingSession },
  middleware: ['authorization']
}
</script>
