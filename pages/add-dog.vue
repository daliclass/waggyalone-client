<template>
  <section>
    <Navbar />
    <DogForm
      :dog="dog"
      :create-dog="addDog"
      :name-change="nameChange"
      :birth-month-change="birthMonthChange"
      :birth-year-change="birthYearChange"
      :breed-change="breedChange"
      :gender-change="genderChange"
    />
  </section>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import DogForm from '../components/DogForm.vue'
export default {
  components: { Navbar, DogForm },
  data () {
    return {
      dog: {
        name: '',
        birthMonth: '',
        birthYear: '',
        breed: '',
        gender: ''
      }
    }
  },
  methods: {
    addDog (dog) {
      this.$store.dispatch('dog/add', dog)
      this.$router.push('/app')
    },
    nameChange (updatedValue) {
      console.log(this.dog)
      this.dog.name = updatedValue
    },
    birthMonthChange (updatedValue) {
      this.dog.birthMonth = updatedValue
    },
    birthYearChange (updatedValue) {
      this.dog.birthYear = updatedValue
    },
    breedChange (updatedValue) {
      this.dog.breed = updatedValue
    },
    genderChange (updatedValue) {
      this.dog.gender = updatedValue
    }
  }
}
</script>
