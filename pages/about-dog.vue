<template>
  <section>
    <Navbar />
    <Hero
      title="Tell us about your Dog"
      subtitle="So that we can give you and your furry companion the best experience we need to get to know a little bit about you both."
    />
    </br>
    <div class="container">
      <div class="columns is-centered">
        <div class="column is-12-mobile is-8-tablet is-10-desktop is-10-widescreen has-text-centered">
          <DogForm
            :dog="dog"
            :create-dog="addDog"
            :name-change="nameChange"
            :birth-month-change="birthMonthChange"
            :birth-year-change="birthYearChange"
            :breed-change="breedChange"
            :gender-change="genderChange"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import Hero from '../components/Hero.vue'
import DogForm from '../components/DogForm.vue'

export default {
  components: { Navbar, DogForm, Hero },
  computed: {
    dog () {
      return this.$store.state.dog.dog
    }
  },
  methods: {
    addDog (dog) {
      this.$store.dispatch('dog/add')
      this.$router.push('/dog-course-preferences')
    },
    nameChange (updatedValue) {
      this.$store.dispatch('dog/setName', updatedValue)
    },
    birthMonthChange (updatedValue) {
      this.$store.dispatch('dog/setBirthMonth', updatedValue)
    },
    birthYearChange (updatedValue) {
      this.$store.dispatch('dog/setBirthYear', updatedValue)
    },
    breedChange (updatedValue) {
      this.$store.dispatch('dog/setBreed', updatedValue)
    },
    genderChange (updatedValue) {
      this.$store.dispatch('dog/setGender', updatedValue)
    }
  },
  middleware: ['authorization']
}
</script>
