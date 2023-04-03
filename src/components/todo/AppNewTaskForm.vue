<template>
  <form class="new_task_form" ref="addTaskForm" @submit.prevent="addTask">
    <input type="hidden" name="id" :value="todoListLength + 1" />
    <label class="form_label">
      <span class="form_label_name">ID користувача</span>
      <input
        class="form_label_input"
        v-model.trim="$v.userId.$model"
        type="text"
        name="userId"
        placeholder=""
      />
      <span class="form_error" v-if="$v.userId.$invalid && $v.userId.$dirty">
        Помилка! Може включати лише цифри
      </span>
    </label>
    <label class="form_label checkbox">
      <span class="form_label_name">Статус виконання</span>
      <input type="checkbox" name="completed" value="true" />
    </label>
    <button class="btn btn_submit" :disabled="$v.$invalid">Додати</button>
    <label class="form_label textarea">
      <span class="form_label_name">Назва задачі</span>
      <textarea
        v-model.trim="$v.title.$model"
        class="form_label_textarea input"
        name="title"
      ></textarea>
      <span class="form_error" v-if="$v.title.$invalid && $v.title.$dirty">
        Помилка! Не може бути порожнім
      </span>
    </label>
  </form>
</template>

<script>
import { mapGetters } from "vuex";
import { formDataToObject } from "@/services/services";
import { required, numeric } from "vuelidate/lib/validators";

export default {
  name: "AppNewTaskForm",
  data() {
    return {
      userId: "",
      title: "",
    };
  },
  computed: {
    ...mapGetters(["todoListLength"]),
  },
  validations: {
    userId: {
      required,
      numeric,
    },
    title: {
      required,
    },
  },
  methods: {
    addTask() {
      const formData = new FormData(this.$refs.addTaskForm);
      const formDataObject = formDataToObject(formData);
      formDataObject.completed = formDataObject.completed ? true : false;
      this.$store.dispatch("addNewTaskAction", formDataObject);
    },
  },
};
</script>

<style lang="scss" scoped>
.new_task_form {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;
  padding: 15px;
  background: var(--color-white);
  border-radius: 15px;

  .form_label {
    display: flex;
    flex-direction: column;
    gap: 5px 10px;

    &.checkbox {
      flex-direction: row;
    }
    .form_label_name {
    }
    .form_label_input {
    }
    &.textarea,
    .form_label_textarea {
      width: 100%;
    }
    .form_error {
      font-weight: 400;
      font-size: 10px;
      line-height: 14px;
      letter-spacing: -0.025em;
      color: var(--color-red);
    }
  }

  .btn {
    margin: 0 0 0 auto;
  }
}
</style>
