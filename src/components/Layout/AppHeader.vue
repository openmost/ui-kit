<template>
  <div id="app-header">

    <header class="app-header-logo">
      <slot name="header-brand-prepend"/>
      <slot name="header-brand"/>
      <slot name="header-brand-append"/>
    </header>

    <div class="app-header-actions-wrapper">
      <slot name="header-actions-prepend"/>
      <slot name="header-actions"/>
      <slot name="header-actions-append"/>
    </div>

  </div>
</template>

<style lang="scss">
#app-header {
  padding: 1rem 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;

  .app-header-logo {
    min-height: 60px;
    display: flex;
    align-items: center;
  }

  .app-header-actions-wrapper {
    display: flex;
    justify-content: flex-end;
    gap: 1.5rem;
    flex-grow: 1;
    flex-wrap: nowrap;
  }
}
</style>
