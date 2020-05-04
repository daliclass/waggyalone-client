<template>
  <div class="field">
    <div class="control is-size-5">
      {{ question }}
      <label v-for="option in options" :key="option.id" class="is-size-5">
        <input type="radio" :name="type" :value="option.value" :checked="isSelected(option.value)" @input="onChange">
        {{ option.name }}
      </label>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    question: String,
    options: Array,
    type: String,
    onChange: Function,
    selectedValue: [String, Boolean]
  },
  methods: {
    isSelected (value) {
      return this.selectedValue === value
    }
  }
}
</script>
