<template>
  <option :value="value.toString()" :disabled="disabled">
    <slot/>
  </option>
</template>

<script setup>
const props = defineProps({
  disabled: {
    type: Boolean,
    default: false
  },
  value: {
    type: [String, Number, Array, Object, Boolean],
    required: true,
  }
})
</script>
