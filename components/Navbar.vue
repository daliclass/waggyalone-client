<template>
  <nav class="navbar">
    <div class="navbar-brand">
      <p class="navbar-item">
        <img src="~/assets/paw.png" alt="Sa coach logo" height="50">
      </p>

      <div class="navbar-burger burger" v-if="loggedIn" onclick="document.querySelector('.navbar-menu').classList.toggle('is-active');">
        <span />
        <span />
        <span />
      </div>
    </div>

    <div class="navbar-menu">
      <div class="navbar-start" v-if="loggedIn">
        <router-link
          to="/app"
          class="navbar-item"
        >
          App
        </router-link>
        <router-link
          to="/about-dog"
          class="navbar-item"
        >
          Your dog
        </router-link>
        <router-link
          to="/dog-course-preferences"
          class="navbar-item"
        >
          Course preferences
        </router-link>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <a v-if="loggedIn" class="button is-info" @click="logout"> log out </a>
          </div>
        </div>
      </div>
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
