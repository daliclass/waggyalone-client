<template>
  <section>
    <div class="hero is-primary">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            Tell us about your Dog
          </h1>
          <h2 class="subtitle">
            So that we can give you and your furry companion the best experience we need to get to know a little bit about you both.
          </h2>
        </div>
      </div>
    </div>
    </br>
    <div class="container">
      <div class="columns is-centered">
        <div class="column is-12-mobile is-8-tablet is-10-desktop is-10-widescreen has-text-centered">
          <div class="field">
            <div class="control">
              <input
                :class="[nameError ? 'is-info' : '', 'input is-medium']"
                type="text"
                placeholder="Name"
                :value="dog.name"
                @input="nameChanged"
              >
            </div>
          </div>
          <div class="field">
            <div class="control">
              <input
                :class="[birthMonthError ? 'is-info' : '', 'input is-medium']"
                type="number"
                min="1"
                max="12"
                placeholder="Birth month 1-12"
                :value="dog.birthMonth"
                @input="birthMonthChanged"
              >
            </div>
          </div>
          <div class="field">
            <div class="control">
              <input
                :class="[birthYearError ? 'is-info' : '', 'input is-medium']"
                type="number"
                min="1990"
                max="2050"
                placeholder="Birth year ie 2006"
                :value="dog.birthYear"
                @input="birthYearChanged"
              >
            </div>
          </div>
          <div class="field">
            <div class="control">
              <input
                :class="[breedError ? 'is-info' : '', 'input is-medium']"
                type="text"
                placeholder="Breed"
                :value="dog.breed"
                @input="breedChanged"
              >
            </div>
          </div>
          <div class="control is-size-5">
            What gender is your dog?
            <label class="is-size-5">
              <input type="radio" name="gender" value="MALE" @input="genderChanged" :checked="isMaleSelected">
              Male
            </label>
            <label class="is-size-5">
              <input type="radio" name="gender" value="FEMALE" @input="genderChanged" :checked="isFemaleSelected">
              Female
            </label>
          </div>
          </br>
          <div v-show="showErrorMessage" class="notification is-info">
            <p> We need to know a bit more about your dog please will in the highlighted fields </p>
          </div>
          <button class="button is-primary is-large is-outlined" @click="addDog">
            Add dog
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    createDog: Function,
    dog: Object,
    nameChange: Function,
    birthMonthChange: Function,
    birthYearChange: Function,
    breedChange: Function,
    genderChange: Function
  },
  data () {
    return {
      nameError: false,
      birthMonthError: false,
      birthYearError: false,
      breedError: false,
      genderError: false,
      showErrorMessage: false
    }
  },
  computed: {
    isMaleSelected () {
      return this.dog.gender === 'MALE'
    },
    isFemaleSelected () {
      return this.dog.gender === 'FEMALE'
    }
  },
  methods: {
    nameChanged (updatedValue) {
      this.nameChange(updatedValue.target.value)
    },
    birthMonthChanged (updatedValue) {
      this.birthMonthChange(updatedValue.target.value)
    },
    birthYearChanged (updatedValue) {
      this.birthYearChange(updatedValue.target.value)
    },
    breedChanged (updatedValue) {
      this.breedChange(updatedValue.target.value)
    },
    genderChanged (updatedValue) {
      this.genderChange(updatedValue.target.value)
    },
    addDog () {
      if (this.dog.name.length === 0) {
        this.nameError = true
      } else {
        this.nameError = false
      }

      if (this.dog.birthMonth < 1 || this.dog.birthMonth > 12) {
        this.birthMonthError = true
      } else {
        this.birthMonthError = false
      }

      if (this.dog.birthYear > 2050 || this.dog.birthYear < 1990) {
        this.birthYearError = true
      } else {
        this.birthYearError = false
      }

      if (this.dog.breed.length === 0) {
        this.breedError = true
      } else {
        this.breedError = false
      }

      if (this.dog.gender.length === 0) {
        this.genderError = true
      } else {
        this.genderError = false
      }

      if (this.nameError || this.birthMonthError || this.birthYearError || this.breedError || this.genderError) {
        this.showErrorMessage = true
      } else {
        this.showErrorMessage = false
        this.createDog(this.dog)
      }
    }
  }
}
</script>
