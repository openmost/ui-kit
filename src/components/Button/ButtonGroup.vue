<template>
  <component :is="tag" :class="buttonGroupClass" :role="ariaRole" :aria-label="ariaLabel">
    <slot/>
  </component>
</template>

<script setup>
import {computed} from "vue";

const props = defineProps({
  ariaLabel: {
    type: String,
  },
  ariaRole: {
    type: String,
    default: 'group'
  },
  class: {
    type: [String, Array, Object]
  },
  size: {
    type: String,
  },
  tag: {
    type: String,
    default: 'div',
  },
  vertical: {
    type: Boolean,
    default: false,
  }
})

const buttonGroupClass = computed(() => {
  return [
    props.vertical ? 'btn-group-vertical' : 'btn-group',
    props.class,
    props.size ? `btn-${props.size}` : null,
  ]
})
</script>
