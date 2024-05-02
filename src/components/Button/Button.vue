<template>
  <component
      aria-label="ariaLabel"
      :class="buttonClass"
      :disabled="disabled"
      :is="buttonTag"
      :rel="buttonRel"
      :target="buttonTarget"
      :type="buttonType"
      :href="href"
      :to="to"
  >
    <div class="btn-inner-wrapper" v-if="$slots.icon">

      <slot name="icon" v-if="iconPosition === 'start'"/>

      <slot>{{ text }}</slot>

      <slot name="icon" v-if="iconPosition === 'end'"/>

    </div>

    <slot v-else>{{ text }}</slot>

  </component>
</template>

<script setup>
import {computed} from "vue";

const props = defineProps({
  ariaLabel: {
    type: String
  },
  circle: {
    type: Boolean,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  href: {
    type: [String, Object],
  },
  iconPosition: {
    type: String,
    default: 'start'
  },
  is: {
    type: [Object, String],
  },
  size: {
    type: String,
    default: ''
  },
  tag: {
    type: String,
    default: 'button',
  },
  text: {
    type: String,
  },
  to: {
    type: [String, Object],
    required: false,
  },
  type: {
    type: String,
    default: 'button',
  },
  variant: {
    type: String,
    default: 'secondary'
  },
})

const buttonClass = computed(() => {
  return [
    'btn',
    props.size ? `btn-${props.size}` : null,
    props.variant ? `btn-${props.variant}` : null,
    props.circle ? `btn-circle` : null,
  ]
})

const buttonTag = computed(() => {
 if (props.is) {
   return props.is
 }

  return props.href ? 'a' : 'button';
});

const buttonType = computed(() => {
  return props.href ? '' : props.type;
})

const buttonRel = computed(() => {
  return props.external ? 'noopener noreferrer' : null;
});

const buttonTarget = computed(() => {
  return props.external ? '_blank' : null;
})
</script>

<style lang="scss">
.btn {

  .btn-inner-wrapper {
    display: flex;
    align-items: center;
    align-content: center;
    gap: .5rem;
  }

  svg {
    width: 1.125rem;
    min-width: 1.125rem;
    height: 1.125rem;
    min-height: 1.125rem;
  }


  &[disabled]:not([disabled=false]) {
    background-color: transparent;
    color: var(--bs-secondary);

    &:not(.btn-circle),
    &:not(.btn-transparent) {
      border-color: currentColor;
    }
  }

  &.btn-danger {
    color: #fff;
  }

  &.btn-transparent:hover {
    background-color: rgba(255, 255, 255, 0.03);
    border-color: transparent;
  }

  &.btn-circle {
    justify-content: center;
    padding: 10px;
    border-radius: 50rem;
    aspect-ratio: 1;
  }
}
</style>
