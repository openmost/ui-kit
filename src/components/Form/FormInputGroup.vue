<template>
  <component :is="tag" :id="id" :class="inputGroupClass">

    <slot name="prepend">
      <FormInputGroupText v-if="prepend" v-text="prepend"/>
    </slot>

    <slot/>

    <FormInvalidFeedback v-if="invalidFeedback">{{ invalidFeedback }}</FormInvalidFeedback>
    <FormValidFeedback v-if="validFeedback">{{ validFeedback }}</FormValidFeedback>

    <slot name="append">
      <FormInputGroupText v-if="append" v-text="append"/>
    </slot>

  </component>
</template>

<script setup>
import {computed} from "vue";
import FormInputGroupText from "./FormInputGroupText.vue";
import FormInvalidFeedback from "./FormInvalidFeedback.vue";
import FormValidFeedback from "./FormValidFeedback.vue";

const props = defineProps({
  append: {
    type: String
  },
  id: {
    type: String,
  },
  invalidFeedback: {
    type: String,
  },
  prepend: {
    type: String,
  },
  size: {
    type: String,
  },
  tag: {
    type: String,
    default: 'div'
  },
  validFeedback: {
    type: String,
  },
});

const inputGroupClass = computed(() => {
  return [
    'input-group',
    props.size ? `input-group-${props.size}` : null,
  ]
})
</script>
