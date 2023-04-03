<template>
  <div class="content">
    <AppUserData/>
    <AppNewTaskForm/>
    <AppTodoList/>
  </div>
</template>

<script>

import AppNewTaskForm from "@/components/todo/AppNewTaskForm";
import AppUserData from "@/components/todo/AppUserData";
import AppTodoList from "@/components/todo/AppTodoList";

export default {
  name: "AppTodoContent",
  components: { AppTodoList, AppUserData, AppNewTaskForm },
};
</script>

<style lang="scss" scoped>
.content {
  display: flex;
  flex-direction: column;
  row-gap: 30px;
  padding: 30px 10px;
  width: calc(100% - 250px - 20px);
}
</style>
