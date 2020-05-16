<template>
  <section>
    <Navbar />
    <Hero
      :title="heroTitle"
      :subtitle="heroSubtitle"
    />
    </br>
    <div class="container">
      <div class="columns is-centered">
        <div class="column is-12-mobile is-8-tablet is-10-desktop is-10-widescreen has-text-centered">
          <CoursePreferences
            :dog-name="dogName"
            :den-training="denTraining"
            :pre-departure-training="preDepartureTraining"
            :leave-training="leaveTraining"
            :on-den-training-change="onDenTrainingChange"
            :on-pre-departure-training-change="onPreDepartureTrainingChange"
            :on-leave-training-change="onLeaveTrainingChange"
            :on-save="onSave"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import Hero from '../components/Hero.vue'
import CoursePreferences from '../components/CoursePreferences.vue'

export default {
  components: { CoursePreferences, Navbar, Hero },
  data () {
    return {
      dogName: 'David'
    }
  },
  computed: {
    heroTitle () {
      return 'Course preferences for ' + this.dogName
    },
    heroSubtitle () {
      return 'We offer a number of courses to help you train ' + this.dogName + ' to be more content while you are away. ' +
      'Below tell us how ' + this.dogName + ' is currently getting on so that we can offer you a personalised your experience.'
    },
    denTraining () {
      return this.$store.state.preferences.denTraining
    },
    preDepartureTraining () {
      return this.$store.state.preferences.preDepartureTraining
    },
    leaveTraining () {
      return this.$store.state.preferences.leaveTraining
    },
    dogId () {
      return this.$store.state.dog.dog.id
    }
  },
  created () {
    if (!this.dogId) {
      this.$router.push('/about-dog')
    }
  },
  methods: {
    onDenTrainingChange (isSet) {
      this.$store.dispatch('preferences/updateDenTraining', isSet)
    },
    onPreDepartureTrainingChange (isSet) {
      this.$store.dispatch('preferences/updatePreDepartureTraining', isSet)
    },
    onLeaveTrainingChange (isSet) {
      this.$store.dispatch('preferences/updateLeaveTraining', isSet)
    },
    onSave () {
      this.$store.dispatch('preferences/save')
      this.$router.push('/app')
    }
  },
  middleware: ['authorization']
}
</script>
