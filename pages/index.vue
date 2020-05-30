<template>
  <section class="hero is-fullheight is-primary">
    <Navbar />
    <div class="hero-body">
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-12-mobile is-8-tablet is-10-desktop is-10-widescreen has-text-centered">
            <img
              src="~/assets/paw.png"
              height="100"
              width="100"
              alt="Larger sa coach logo"
            >
            <h2 class="title is-1 ">
              Welcome to SA coach
            </h2>
            <p class="subtitle">
              Helping dog owners help there best friend overcome separation anxiety one step at a time
            </p>
            <div v-if="userErrorAuthenticating" class="notification is-warning">
              Oops.... this is embarrassing their was a problem with your log in please try again
            </div>
            <button v-if="!loggedIn" class="button is-facebook" @click="continueWithFacebook">
              Login with Facebook
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>
  </section>
</template>

<script>
import Navbar from '../components/common/Navbar.vue'

export default {
  components: { Navbar },
  computed: {
    userErrorAuthenticating () {
      return this.$store.state.authorization.userErrorAuthenticating
    },
    loggedIn () {
      return this.$store.state.authorization.loggedIn
    }
  },
  methods: {
    continueWithFacebook () {
      this.$store.dispatch('authorization/continueWithFacebook')
    }
  },
  layout: 'no-nav'
}
</script>
