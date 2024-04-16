<template>
  <div class="page-view">

    <div class="container">

      <div class="page-view-header">

        <div class="page-view-header-start">

          <a v-if="previousUrl" :href="previousUrl" class="btn btn-transparent">
            <div class="btn-inner-wrapper">
              <IconAngleLeft/>
              Back
            </div>
          </a>

          <slot name="title">
            <h1 class="page-view-title h2" v-if="title">{{ title }}</h1>
          </slot>

        </div>

        <div class="page-view-header-end" v-if="$slots.actions">
          <slot name="actions"/>
        </div>

      </div>

    </div>

    <div class="container">

      <slot/>

    </div>

  </div>
</template>

<script setup>
import IconAngleLeft from "../Icon/IconAngleLeft.vue";

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
  title: {
    type: String,
  }
});
</script>

<style lang="scss">
.page-view {
  padding-top: 80px;
}

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
