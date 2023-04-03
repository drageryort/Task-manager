<template>
  <div class="user_data">
    <ul class="user_data_list">
      <li class="user_data_el">
        <span>Ім'я:</span>
        <span class="bold">{{ userData.name }}</span>
      </li>
      <li class="user_data_el">
        <span>Ел. пошта:</span>
        <span class="bold">{{ userData.email }}</span>
      </li>
      <li class="user_data_el">
        <span>Адреса:</span>
        <span class="bold">
          {{ userData.address.zipcode }},{{ userData.address.city }}
          {{ userData.address.street }},{{ userData.address.suite }}
        </span>
      </li>
      <li class="user_data_el">
        <span>Телефон:</span>
        <span class="bold">{{ userData.phone }}</span>
      </li>
      <li class="user_data_el">
        <span>Сайт:</span>
        <span class="bold">{{ userData.website }}</span>
      </li>
      <li class="user_data_el">
        <span class="bold">Робота:</span>
        <ul class="user_data_sub_list">
          <li class="user_data_el">
            <span>компанія:</span>
            <span class="bold">{{ userData.company.name }}</span>
          </li>
          <li class="user_data_el">
            <span>посада:</span>
            <span class="bold">{{ userData.company.bs }}</span>
          </li>
        </ul>
      </li>
    </ul>
    <AppLogout />
  </div>
</template>

<script>
import { localStorageToObject } from "@/services/services";
import AppLogout from "@/components/AppLogout";

export default {
  name: "AppUserData",
  components: { AppLogout },
  computed: {
    userData() {
      return localStorageToObject("userData");
    },
  },
};
</script>

<style lang="scss" scoped>
.user_data {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 15px;
  background: var(--color-white);
  border-radius: 15px;
  .user_data_list {
    .user_data_el {
      display: flex;
      column-gap: 5px;
      font-size: 18px;
    }
    .user_data_sub_list {
    }
  }
  .user_logout {
  }
}
</style>
