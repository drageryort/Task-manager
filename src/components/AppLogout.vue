<template>
  <button class="btn btn_logout" @click="logout">Вихід</button>
</template>

<script>
export default {
  name: "AppLogout",
  methods:{
    logout() {
      localStorage.removeItem("userData");
      this.$router.go();
    },
  },
};
</script>

<style lang="scss" scoped></style>