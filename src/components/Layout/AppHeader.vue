<template>
  <div id="app-header">

    <header class="app-header-logo">
      <slot name="header-brand"/>
    </header>

    <div class="app-header-actions-wrapper">
      <slot name="header-actions"/>
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
