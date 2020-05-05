<template>
  <section>
    <SelectOption
      type="den"
      :question="denQuestion"
      :options="options"
      :on-change="onDenTrainingChanged"
      :selected-value="denTraining"
    />
    <SelectOption
      type="preDeparture"
      :question="preDepartureTrainingQuestion"
      :options="options"
      :on-change="onPreDepartureTrainingChanged"
      :selected-value="preDepartureTraining"
    />
    <SelectOption
      type="gender"
      :question="leaveTrainingQuestion"
      :options="options"
      :on-change="onLeaveTrainingChanged"
      :selected-value="leaveTraining"
    />
    <button class="button is-primary is-large is-outlined" @click="onSave">
      Save course preferences
    </button>
  </section>
</template>

<script>
import SelectOption from '../components/SelectOption.vue'

export default {
  components: { SelectOption },
  props: {
    dogName: String,
    onSave: Function,
    denTraining: Boolean,
    preDepartureTraining: Boolean,
    leaveTraining: Boolean,
    onDenTrainingChange: Function,
    onPreDepartureTrainingChange: Function,
    onLeaveTrainingChange: Function
  },
  data () {
    return {
      options: [{ id: 1, name: 'yes', value: true }, { id: 2, name: 'no', value: false }]
    }
  },
  computed: {
    denQuestion () {
      return 'Does ' + this.dogName + ' have a safe space such as a comfy bed, pen, crate that they got to relax in?'
    },
    preDepartureTrainingQuestion () {
      return 'Does ' + this.dogName + ' find it stressful before you have left the house i.e. finding keys putting shoes on etc?'
    },
    leaveTrainingQuestion () {
      return 'Does ' + this.dogName + ' stay relaxed while you are out the house of long periods of time?'
    }
  },
  methods: {
    onDenTrainingChanged (value) {
      this.convertToBooleanAndSend(this.onDenTrainingChange, value)
    },
    onPreDepartureTrainingChanged (value) {
      this.convertToBooleanAndSend(this.onPreDepartureTrainingChange, value)
    },
    onLeaveTrainingChanged (value) {
      this.convertToBooleanAndSend(this.onLeaveTrainingChange, value)
    },
    convertToBooleanAndSend (onChange, value) {
      const isSet = value.target.value
      if (isSet === 'true') {
        onChange(true)
      } else {
        onChange(false)
      }
    }
  }
}
</script>
