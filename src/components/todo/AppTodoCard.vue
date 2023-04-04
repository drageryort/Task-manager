<template>
  <li class="list_card_el" :class="{ completed: list_el.completed }">
    <span class="bold"># {{ list_el.id }}</span>
    <span><span class="bold">ID користувача:</span> {{ list_el.userId }},</span>
    <span><span class="bold">Задача:</span> {{ list_el.title }}</span>
    <button class="add_to_favorite btn" @click="addToFavorite(list_el)">
      <svg
        :class="{ favorite: list_el.favorite }"
        xmlns="http://www.w3.org/2000/svg"
        xml:space="preserve"
        viewBox="0 0 512 512"
      >
        <path
          d="M476.6 63.8C454.5 37 423 23.6 382.8 21.3c-41.7 0-72.5 18.1-93.7 42.5-22.1 24.4-33.1 39.4-33.9 42.5-.8-3.2-11.8-18.1-33.9-42.5s-49.6-42.5-93.7-42.5c-40.2 2.4-72.5 16.5-93.7 42.5C11.8 89.8.8 118.2 0 148.9c0 22.1 3.9 64.6 28.4 114.2 24.4 48.8 100 125.2 227.6 227.6 126.8-101.6 203.2-178 227.6-227.6C508 213.5 512 170.2 512 148.9c-.8-30.7-11.8-59.1-33.9-85.9v.8h-1.5z"
        />
      </svg>
    </button>
  </li>
</template>

<script>
export default {
  name: "AppTodoCard",
  props: {
    list_el: Object,
  },
  methods: {
    addToFavorite(list_el) {
      window.localStorage.setItem("favorite", JSON.stringify(list_el));
      window.confirm(`Задача ${list_el.title} додана до обраного`);
      this.$store.commit("updateFavorite", list_el.id);
    },
  },
};
</script>

<style lang="scss" scoped>
.list_card_el {
  display: flex;
  flex-direction: column;
  min-width: calc((100% - 30px * 3) / 4);
  width: calc((100% - 30px * 3) / 4);
  padding: 20px;
  border: 2px solid var(--color-common-gray);
  border-radius: 15px;
  background: rgb(153, 69, 91);
  &.completed {
    background: rgba(47, 220, 19, 0.3);
  }
  .add_to_favorite {
    width: 20px;
    height: 20px;
    position: absolute;
    top: 10px;
    right: 10px;
    svg{
      path {
        fill: var(--color-common-gray);
      }
      &.favorite {
        path {
          fill: var(--color-red);
        }
      }
    }
  }
}
</style>
