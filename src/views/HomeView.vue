<template>
  <div class="page_layout">
    <AppUserForm />
  </div>
</template>

<script>
import AppUserForm from "@/components/home/AppUserForm";
export default {
  name: "HomeView",
  components: { AppUserForm },
};
</script>
<style lang="scss" scoped>
.page_layout {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100%;
}
</style>
