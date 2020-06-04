<template>
  <nav class="navbar">
    <div class="navbar-brand">
      <p class="navbar-item">
        <img src="~/assets/paw.png" alt="Sa coach logo" height="50">
      </p>

      <div v-if="loggedIn" class="navbar-burger burger" onclick="document.querySelector('.navbar-menu').classList.toggle('is-active');">
        <span />
        <span />
        <span />
      </div>
    </div>

    <div class="navbar-menu">
      <div v-if="loggedIn" class="navbar-start">
        <router-link
          to="/training/plan"
          class="navbar-item"
        >
          App
        </router-link>
        <router-link
          to="/dog/about"
          class="navbar-item"
        >
          Your dog
        </router-link>
        <router-link
          to="/dog/preferences"
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
      this.$router.push('/training/plan')
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
