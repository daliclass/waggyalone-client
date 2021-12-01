<template>
  <TrainingSession />
</template>

<script>
import TrainingSession from '../../components/training/TrainingSession'

export default {
  components: { TrainingSession },
  head () {
    return {
      title: 'Training Exercises',
    }
  },
  middleware: ['authorization']
}
</script>
