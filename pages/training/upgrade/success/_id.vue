<template>
  <div class="container is-centered">
    <div v-if="isLoading" class="container">
      <h1 class="title is-3"> Upgrading your account do not refresh the page </h1>
      <Loading/>
    </div>
    <div v-else>
      <h1 class="title is-3"> Your payment was successful </h1>
      <p class="is-medium content">
        Login again to access to course! Thank you for supporting the work we do and helping us help more people.
        We would love to hear more from you, please reach out over email if we can assist your training in anyway mark@waggyalone.com.
      </p>
      <button class="button is-facebook is-medium" @click="continueWith">
        Login with Facebook
      </button>
    </div>
  </div>
</template>

<script>
import Loading from '../../../../components/common/Loading'

export default {
  components: { Loading },
  created () {
    this.$store.dispatch('authorization/upgradeSuccess', this.$route.params.id)
  },
  computed: {
    isLoading () {
      return this.$store.state.authorization.upgraded === null
    }
  },
  methods: {
    continueWith() {
      if (this.loggedIn) {
        this.$router.push('/training/plan')
      } else {
        this.$store.dispatch('authorization/continueWith')
      }
    }
  }
}
</script>
