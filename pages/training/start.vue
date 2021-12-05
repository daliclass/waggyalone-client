<template>
  <TrainingOverview />
</template>

<script>
import TrainingOverview from '../../components/training/TrainingOverview'

export default {
  components: { TrainingOverview },
  head () {
    return {
      title: 'Training Start'
    }
  },
  middleware: ['authorization']
}
</script>
