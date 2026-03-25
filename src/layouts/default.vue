<template>
  <div class="app-wrapper">
    <AppHeader />
    <slot />
    <AppFooter />
  </div>
</template>

<style>
/* App specific styles */
.app-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>
