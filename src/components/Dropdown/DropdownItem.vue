<template>
  <li>
    <component
        :is="is"
        :class="dropdownItemClass"
        :href="href"
        :to="to"

        :aria-disabled="disabled ? 'true' : 'false'"
        :target="target"
    >
      <slot/>
    </component>
  </li>
</template>

<script setup>
import {computed} from "vue";

const props = defineProps({
  active: {
    type: Boolean,
    default: false,
  },
  activeClass: {
    type: String, Array, Object,
    default: 'active',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  href: {
    type: String,
  },
  linkClass: {
    type: String, Array, Object,
  },
  to: {
    type: [String, Object],
  },
  is: {
    type: [Object, String],
    default: 'a',
  },
  target: {
    type: String,
    default: '_self',
  },
  variant: {
    type: String,
  }
})

const dropdownItemClass = computed(() => {
  return [
    'dropdown-item',
    props.linkClass,
    props.active ? props.activeClass : '',
    props.disabled ? 'disabled' : '',
  ]
})
</script>

<style lang="scss">
.dropdown-item {
  font-weight: 300;
  display: flex;
  gap: .75rem;
  align-items: center;
  justify-content: space-between;

  &.active {
    background-color: var(--bs-surface-light);
  }
}
</style>
