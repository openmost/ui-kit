<template>
  <div :class="formGroupClass">
    <label v-if="label && !floating" class="form-label" :for="labelFor" v-text="label"></label>
    <slot/>
    <label v-if="label && floating" :for="labelFor" v-text="label"></label>
    <FormInvalidFeedback v-if="invalidFeedback">{{ invalidFeedback }}</FormInvalidFeedback>
    <FormValidFeedback v-if="validFeedback">{{ validFeedback }}</FormValidFeedback>
    <div class="form-text" v-if="description" v-text="description"></div>
  </div>
</template>

<script setup>
import {computed} from "vue";
import FormValidFeedback from "./FormValidFeedback.vue";
import FormInvalidFeedback from "./FormInvalidFeedback.vue";

const props = defineProps({
  label: {
    type: String,
    default: '',
  },
  labelFor: {
    type: String,
    default: '',
  },
  class: {
    type: String,
    default: '',
  },
  description: {
    type: String,
    default: '',
  },
  floating: {
    type: Boolean,
    default: false,
  },
  invalidFeedback: {
    type: String,
  },
  state: {
    type: Boolean,
    default: null,
  },
  validFeedback: {
    type: String,
  },
})

const formGroupClass = computed(() => {
  return [
    props.class,
    props.floating ? 'form-floating' : 'form-group',
  ]
})
</script>
