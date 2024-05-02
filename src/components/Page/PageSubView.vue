<template>
  <div class="page-sub-view">

    <div class="page-sub-view-header">

      <div class="page-sub-view-title">

        <slot name="title-prepend"/>

        <slot name="title">
          <h2 class="h4 mb-0" v-if="title">{{ title }}</h2>
        </slot>

        <slot name="title-append"/>

      </div>

      <div class="page-sub-view-actions" v-if="$slots.actions">

        <slot name="actions"/>

      </div>

    </div>

    <slot/>

  </div>
</template>

<script setup>
import EntitySelectedCounter from "@/Components/Entity/EntitySelectedCounter.vue";

const props = defineProps({
  totalItems: {
    type: Number,
    default: 0,
  },
  totalSelected: {
    type: Number,
    default: 0,
  },
  title: {
    type: String,
  }
});
</script>

<style lang="scss">

.page-sub-view {

  &:not(:last-child) {
    margin-bottom: 50px;
  }
}

.page-sub-view-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 2rem;
  min-height: 40px;

  .page-sub-view-title {
    display: flex;
    gap: 1rem;
    align-items: center;
  }

  .page-sub-view-actions {
    display: flex;
    gap: 1rem;
    align-items: center;
  }
}
</style>
