<template>
  <li :class="navItemClass">

    <NavLink
        v-if="to || href"
        :href="href"
        :to="to"
        :is="is"
        :external="external"
        :active="active"
        :activeClass="activeClass"
        :exactActive="exactActive"
        :exactActiveClass="exactActiveClass"
        :disabled="disabled"
        :neverActive="neverActive"
    >

      <template #icon v-if="$slots.icon">
        <slot name="icon"/>
      </template>

      <slot/>

    </NavLink>

    <slot v-else/>

  </li>
</template>

<script setup>
import {computed} from "vue";
import NavLink from "./NavLink.vue";

const props = defineProps({
  active: {
    type: Boolean
  },
  activeClass: {
    type: String,
    default: 'active'
  },
  exactActive: {
    type: Boolean
  },
  exactActiveClass: {
    type: String,
    default: 'active-exact'
  },
  disabled: {
    type: Boolean
  },
  href: {
    type: [String, Object],
  },
  to: {
    type: [String, Object],
  },
  external: {
    type: Boolean,
    default: false
  },
  is: {
    type: [Object, String],
  },
  neverActive: {
    type: Boolean,
  }
})

const navItemClass = computed(() => {
  return [
    'nav-item',
    !props.neverActive && props.active ? props.activeClass : null,
    !props.neverActive && props.exactActive ? props.exactActiveClass : null,
    props.neverActive ? 'never-active' : null,
  ]
})
</script>

<style lang="scss">
.nav-item {

  &.active {

    .nav-link {
      background-color: var(--component-bg);

      svg {
        color: var(--bs-accent);
      }
    }
  }

}
</style>
