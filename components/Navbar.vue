<template>
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
      >
        App
      </router-link>
      <router-link
        to="/about-dog"
        class="button is-info is-inverted"
        :disabled="!loggedIn"
      >
       Your dog
      </router-link>
      <router-link
        to="/dog-course-preferences"
        class="button is-info is-inverted"
        :disabled="!loggedIn"
      >
        Course preferences
      </router-link>
      <a v-if="loggedIn" class="button is-info is-inverted" @click="logout"> log out </a>
    </div>
  </nav>
</template>

<script>
export default {
  computed: {
    loggedIn () {
      return this.$store.state.authorization.loggedIn
    },
    dogExists () {
      return !this.$store.state.dog.dog.id
    }
  },
  updated () {
    if (this.loggedIn) {
      this.$router.push('/app')
    }
  },
  methods: {
    logout () {
      this.$store.dispatch('authorization/logout')
      this.$router.push('/')
    }
  }
}
</script>
