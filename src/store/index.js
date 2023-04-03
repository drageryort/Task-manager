import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todoList: [],
    filterParams: {
      userId: "",
      completed: "",
      title: "",
    },
  },
  getters: {
    userData(state) {
      return state.userData;
    },
    userAuth(state) {
      return state.userAuth;
    },
    todoList(state) {
      const stringToBoolean = (string) => string !== "false";
      return state.todoList
        .filter(
          (el) =>
            el.title.includes(state.filterParams.title) &&
            (state.filterParams.userId.length
              ? Number(el.userId) === Number(state.filterParams.userId)
              : true) &&
            (state.filterParams.completed.length
              ? el.completed === stringToBoolean(state.filterParams.completed)
              : true)
        )
        .reverse();
    },
    filterList(state) {
      const filterList = [];
      filterList.push({
        id: "userId",
        name: "За id користувача",
        value: Array.from(
          new Set(state.todoList.map((el) => Number(el.userId)))
        ),
      });
      filterList.push({
        id: "completed",
        name: "За станом виконання",
        value: Array.from(new Set(state.todoList.map((el) => el.completed))),
      });
      return filterList;
    },
  },
  mutations: {
    todoList(state, todoList) {
      state.todoList = todoList;
    },
    filterTodos(state, filterParams) {
      state.filterParams = filterParams;
    },
    addNewTask(state, taskData) {
      state.todoList.push(taskData);
    },
  },
  actions: {
    async checkUsersAction(context, { userName, userPhone }) {
      try {
        const usersList = await (
          await fetch("https://jsonplaceholder.typicode.com/users")
        ).json();
        const userData = usersList.find(
          (el) => el.name === userName && el.phone === userPhone
        );
        if (userData) {
          userData.isAuth = true;
          localStorage.setItem("userData", JSON.stringify(userData));
        } else {
          alert("Користувач відсутній у базі даних");
        }
      } catch (e) {
        console.error(e);
      }
    },
    async getTodoListAction({ commit }) {
      try {
        const todoList = await (
          await fetch("https://jsonplaceholder.typicode.com/todos")
        ).json();
        commit("todoList", todoList);
      } catch (e) {
        console.error(e);
      }
    },
    async addNewTaskAction({ commit }, taskData) {
      try {
        const addTodo = await fetch(
          "https://jsonplaceholder.typicode.com/todos",
          {
            headers: { "Content-Type": "application/json" },
            method: "POST",
          }
        );
        if (addTodo.status === 201 && addTodo.ok === true) {
          commit("addNewTask", taskData);
        } else {
          alert(`Error is: ${addTodo.status}`);
        }
      } catch (e) {
        console.error(e);
      }
    },
  },
});
