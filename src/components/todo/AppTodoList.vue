<template>
  <div class="cards_list_block">
    <h1 class="title">Перелік задач</h1>
    <ul class="list_card">
      <AppTodoCard
        v-for="list_el of todoList"
        :key="list_el.id"
        :list_el="list_el"
      />
    </ul>
  </div>
</template>

<script>
import AppTodoCard from "@/components/todo/AppTodoCard";
import { mapGetters } from "vuex";
export default {
  name: "AppTodoList",
  components: { AppTodoCard },
  computed: {
    ...mapGetters(["todoList"]),
  },
};
</script>

<style lang="scss" scoped>
.cards_list_block {
  .title {
    font-weight: 600;
    font-size: 20px;
    margin: 0 0 10px;
  }
  .list_card {
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
  }
}
</style>
