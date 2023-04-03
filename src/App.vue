<template>
  <div id="app">
    <AppHeader />
    <div class="layout">
      <router-view />
    </div>
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from "@/components/AppHeader";
import AppFooter from "@/components/AppFooter";
export default {
  components: { AppFooter, AppHeader },
};
</script>

<style lang="scss" scoped>
.layout {
  height: calc(100vh - 60px - 270px);
  background: var(--color-layout-gray);
  overflow-y: auto;
}
</style>
