<template>
  <div class="page_layout container">
    <AppFilterBar />
    <AppTodoContent />
  </div>
</template>

<script>
import AppFilterBar from "@/components/todo/AppFilterBar";
import AppTodoContent from "@/components/todo/AppTodoContent";
export default {
  components: { AppTodoContent, AppFilterBar },
  created() {
    this.$store.dispatch("getTodoListAction");
  },
};
</script>

<style scoped lang="scss">
.page_layout {
  display: flex;
  column-gap: 20px;
}
</style>
