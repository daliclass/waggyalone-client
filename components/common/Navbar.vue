<template>
  <nav class="navbar">
    <div class="navbar-brand">
      <h1 class="navbar-item has-text-weight-bold">
        Waggy Alone
      </h1>

      <div class="navbar-burger burger" onclick="document.querySelector('.navbar-menu').classList.toggle('is-active');">
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
          Training
        </router-link>
        <router-link
          to="/dog/about"
          class="navbar-item"
        >
          Your dog
        </router-link>
      </div>

      <div v-else class="navbar-end">
        <router-link
          to="/"
          class="navbar-item"
        >
          Home
        </router-link>
        <nuxt-link v-scroll-to="{el: '#course'}" :to="{path: '/treating-separation-anxiety-in-dogs', hash: 'course'}" class="navbar-item">
          Course
        </nuxt-link>
        <nuxt-link v-scroll-to="{el: '#trainers'}" :to="{path: '/treating-separation-anxiety-in-dogs', hash: 'trainers'}" class="navbar-item">
          For Trainers
        </nuxt-link>
      </div>

      <div v-if="loggedIn" class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <a class="button is-info" @click="logout"> log out </a>
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
