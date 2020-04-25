<template>
  <section class="hero is-fullheight">
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <p class="navbar-item">
          <img src="~/assets/paw.png" alt="Sa coach logo" height="50">
        </p>
      </div>
      <div class="navbar-end">
        <router-link
          to="/app"
          class="button is-info is-inverted"
          :disabled="!loggedIn"
          @click="logout"
        >
          Go to app
        </router-link>
        <a
          class="button is-info is-inverted"
          disabled
        >
          Guides
        </a>
        <a v-if="loggedIn" class="button is-info is-inverted" href>
          log out
        </a>
      </div>
    </nav>
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
export default {
  computed: {
    loggedIn () {
      return this.$store.state.authorization.loggedIn
    },
    userErrorAuthenticating () {
      return this.$store.state.authorization.userErrorAuthenticating
    }
  },
  updated () {
    if (this.loggedIn) {
      this.$router.push('/app')
    }
  },
  methods: {
    continueWithFacebook () {
      this.$store.dispatch('authorization/continueWithFacebook')
    },
    logout () {
      this.$store.dispatch('authorization/logout')
    }
  }
}
</script>
