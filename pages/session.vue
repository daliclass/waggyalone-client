<template>
  <section>
      <Navbar />
      <Timer />
  </section>
</template>

<script>
import Navbar from '../components/common/Navbar'
import Timer from '../components/training/Timer'

export default {
  components: { Navbar, Timer }
}
</script>
