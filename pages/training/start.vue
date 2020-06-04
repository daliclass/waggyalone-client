<template>
  <TrainingOverview />
</template>

<script>
import TrainingOverview from '../../components/training/TrainingOverview'

export default {
  components: { TrainingOverview },
  middleware: ['authorization']
}
</script>
