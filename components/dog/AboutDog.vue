<template>
  <section>
    <Hero
      title="Tell us about your Dog"
      subtitle="So that we can give you and your furry companion the best experience we need to get to know a little bit about you both."
    />
    </br>
    <div class="container is-centered has-text-centered">
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
  </section>
</template>

<script>
import Hero from '../common/Hero'
import DogForm from './DogForm'

export default {
  components: { DogForm, Hero },
  computed: {
    dog () {
      return this.$store.state.dog.dog
    }
  },
  methods: {
    addDog (dog) {
      this.$store.dispatch('dog/add')
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
  }
}
</script>
