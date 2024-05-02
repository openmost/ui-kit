<template>
  <div class="page-view">

    <div :class="containerClass">

      <div class="page-view-header">

        <div class="page-view-header-start">

          <component :is="previousComponent" v-if="previousUrl" :href="previousUrl" class="btn btn-transparent">
            <div class="btn-inner-wrapper">
              <IconAngleLeft/>
              Back
            </div>
          </component>

          <slot name="title-prepend"/>

          <slot name="title">
            <h1 class="page-view-title h2" v-if="title">{{ title }}</h1>
          </slot>

          <slot name="title-append"/>

        </div>

        <div class="page-view-header-end" v-if="$slots.actions">
          <slot name="actions"/>
        </div>

      </div>

    </div>

    <div :class="containerClass">

      <slot/>

    </div>

  </div>
</template>

<script setup>
import IconAngleLeft from "../Icon/IconAngleLeft.vue";
import {computed} from "vue";

const props = defineProps({
  totalItems: {
    type: Number,
    default: 0,
  },
  totalSelected: {
    type: Number,
    default: 0,
  },
  previousUrl: {
    type: String,
  },
  previousComponent: {
    type: [Object, String],
    default: 'a',
  },
  title: {
    type: String,
  },
  fluid: {
    type: Boolean,
    default: false,
  }
});

const containerClass = computed(() => {
  props.fluid ? 'container-fluid' : 'container';
})
</script>

<style lang="scss">
.page-view-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin-bottom: 2rem;
  min-height: 40px;

  .page-view-header-start,
  .page-view-header-end {
    display: flex;
    gap: 1.5rem;
    align-items: center;
  }

  .page-view-title {
    margin-bottom: 0;
  }
}
</style>
