<template>
  <div class="form_wrapper" >
    <h1 class="form_title">description</h1>
    <div v-if="isAuth" class="form">
      <h2>Ви зареєстровані як {{userData.name}}</h2>
      <div class="button_list">
        <router-link to="/todos" class="btn btn_submit">Перейти до задач</router-link>
        <AppLogout/>
      </div>
    </div>
    <form v-else class="form" @submit.prevent="login">
      <h2 class="form_sub_title">description</h2>
      <label class="form_label">
        <input
          class="form_input"
          type="text"
          v-model.trim="$v.userName.$model"
          name="user"
          placeholder="name"
        />
        <span
          v-if="$v.userName.$invalid && $v.userName.$dirty"
          class="form_error"
          >Помилка! Ім'я може мати лише літери</span
        >
      </label>
      <label class="form_label">
        <input
          class="form_input"
          type="text"
          v-model="$v.userPhone.$model"
          name="phone"
          placeholder="phone"
        />
        <span
          class="form_error"
          v-if="$v.userPhone.$invalid && $v.userPhone.$dirty"
        >
          Помилка! Може включати лише цифри та знаки
        </span>
      </label>
      <button class="form_btn btn_submit" :disabled="$v.$invalid">
        Register
      </button>
    </form>
  </div>
</template>

<script>
import { required, helpers } from "vuelidate/lib/validators";
import {localStorageToObject} from "@/services/services"
import AppLogout from "@/components/AppLogout";

const alpha = helpers.regex("alpha", /^[а-яА-іІїЇЯёЁa-zA-Z\s]+$/);
const numeric = helpers.regex("numeric", /^[^а-яА-іІїЇЯёЁa-zA-Z]+$/);

export default {
  name: "AppUserForm",
  components: { AppLogout },
  data() {
    return {
      userName: "",
      userPhone: "",
    };
  },
  computed: {
    userData() {
      return localStorageToObject('userData');
    },
    isAuth() {
      const userData = localStorageToObject('userData');
      return !!(userData && userData.isAuth);

    }
  },
  validations: {
    userName: {
      required,
      alpha,
    },
    userPhone: {
      required,
      numeric,
    },
  },
  methods: {
    async login() {
      if (this.$v.$invalid) {
        return;
      }
      const userData = {
        userName: this.userName,
        userPhone: this.userPhone,
      };
      await this.$store.dispatch("checkUsersAction", userData);
      this.$router.push("/todos");
    },
  },
};
</script>

<style scoped lang="scss">
.form_wrapper {
  border-radius: 5px;
  overflow: hidden;
  .form_title {
    padding: 15px;
    background: var(--color-form-title-gray);
    font-weight: 400;
    font-size: 17px;
    line-height: 21px;
    letter-spacing: -0.025em;
    color: var(--color-text-gray);
    text-align: center;
  }
  .form {
    display: flex;
    flex-direction: column;
    padding: 15px 25px 30px;
    background: var(--color-form-gray);
    .button_list{
      display: flex;
      align-items: center;justify-content: space-between;
      margin: 20px 0 0;
    }
    .form_sub_title {
      margin: 0 0 14px;
      font-weight: 400;
      font-size: 15px;
      line-height: 21px;
      letter-spacing: -0.025em;
      color: var(--color-text-gray);
    }
    .form_label {
      display: flex;
      flex-direction: column;
      margin: 0 0 20px;
      &:last-of-type {
        margin: 0 0 25px;
      }
      .form_input {
        width: 397px;
        height: 41px;
      }
      .form_error {
        font-weight: 400;
        font-size: 10px;
        line-height: 14px;
        letter-spacing: -0.025em;
        color: var(--color-red);
      }
    }
    .form_btn {
      width: 100%;
    }
  }
}
</style>
