<template>
  <th role="columnheader"
      :style="thStyle"
      :class="thClasses"
      :title="headerTitle"
      :abbr="headerAbbr"
      :colspan="colspan"
      :rowspan="rowspan"
  >
    <slot/>
  </th>
</template>

<script setup>
import {computed} from "vue";

const props = defineProps({
  headerTitle: {
    type: String,
  },
  headerAbbr: {
    type: String,
  },
  class: {
    type: [String, Array],
  },
  thClass: {
    type: [String, Array],
  },
  thStyle: {
    type: Object,
  },
  variant: {
    type: String,
  },
  colspan: {
    type: [Number, String],
    default: null,
  },
  rowspan: {
    type: [Number, String],
    default: null,
  },
})

const thClasses = computed(() => {
  return [
    props.class,
    props.variant ? `bg-${props.variant}` : null,
    props.thClass ? props.thClass : null,
  ]
})
</script>
