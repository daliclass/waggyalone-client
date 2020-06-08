<template>
  <section>
    <Hero
      :title="heroTitle"
      :subtitle="heroSubtitle"
    />
    </br>
    <div class="container is-centered has-text-centered">
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
  </section>
</template>

<script>
import Hero from '../../components/common/Hero'
import CoursePreferences from '../../components/dog/CoursePreferences'

export default {
  components: { CoursePreferences, Hero },
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
    }
  },
  middleware: ['authorization']
}
</script>
