<template>
  <a :href="href" class="btn btn-white btn-sso">
    <div class="btn-inner-wrapper">
      <IconOpenmost/>
      <slot>Sign in with Openmost</slot>
    </div>
  </a>
</template>

<script setup lang="ts">
import IconOpenmost from "../Icon/IconOpenmost.vue";

const props = defineProps({
  href: {
    type: String,
    required: true,
  }
})
</script>

<style lang="scss">
.btn-sso {
  padding: 1rem 2rem;
  font-weight: 500;

  .btn-inner-wrapper {
    display: flex;
    align-items: center;
    align-content: center;
    gap: .5rem;

    svg {
      width: 1.125rem;
      height: 1.125rem;
    }
  }
}
</style>
