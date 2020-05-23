<template>
    <section>
    <Navbar />
    <div class="hero is-white">
      <div class="hero-body">
        <div class="container">
          <div class="columns is-mobile">
            <div class="column is-one-fifth">
              <img src="~/assets/paw.png" alt="Sa coach logo" height="50">
            </div>
            <div class="column">
              <h1 class="title">
                Train {{ dogName }} to be confident when left alone
              </h1>
              <h2 class="subtitle">
                {{ milestoneDescription }}
              </h2>
              <div class="buttons is-pulled-right">
                <button class="button is-info is-medium">
                  Information
                </button>
                <button class="button is-primary is-medium">
                  Start training
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
</template>

<script>
import Navbar from './Navbar.vue'

export default {
  components: { Navbar },
  computed: {
    dogId () {
      return this.$store.state.dog.dog.id
    },
    dogName () {
      return this.$store.state.dog.dog.name
    },
    milestoneDescription () {
      return 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris a quam ut neque pretium vehicula quis at erat.' +
      'Etiam rhoncus at dui in accumsan. Duis pretium orci sed quam rutrum, eget ultrices tortor feugiat. Integer leo dolor, ' +
      'aliquam et condimentum vitae, congue eu mauris. Aenean elementum erat sed tortor placerat tristique. Cras tristique sit amet. ipsum non aliquam.'
    }
  }
}
</script>
