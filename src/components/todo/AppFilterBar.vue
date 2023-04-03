<template>
  <form @input="filterTodos" class="filter_form" ref="filterForm">
    <label class="search_field">
      <span class="field_title">Пошук за назвою</span>
      <input class="input field_input" type="text" name="title" />
    </label>
    <span class="form_filter_title">Фільтра</span>
    <div
      class="form_filter_section"
      v-for="filterListBlock of filterList"
      :key="filterListBlock.id"
    >
      <select class="select" :name="filterListBlock.id">
        <option class="select_option" value="" selected>Усі</option>
        <option
          v-for="option of filterListBlock.value"
          :value="option"
          :key="option"
        >
          {{ option }}
        </option>
      </select>
    </div>
  </form>
</template>

<script>
import { mapGetters } from "vuex";
import { formDataToObject } from "@/services/services";

export default {
  name: "AppFilterBar",
  components: {},
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["filterList"]),
  },
  methods: {
    filterTodos() {
      const formData = new FormData(this.$refs.filterForm);
      const formDataObject = formDataToObject(formData);
      this.$store.commit("filterTodos", formDataObject);
    },
  },
};
</script>

<style lang="scss" scoped>
.filter_form {
  padding: 30px 10px;
  width: 250px;
  .search_field{
    display: block;
    margin: 0 0 20px;
    .field_title{
      margin: 0 0 5px;
      font-size: 24px;
      font-weight: 600;
    }
    .field_input{
      width: 100%;
      font-size: 18px;
    }
  }
  .form_filter_title {
    margin: 0 0 5px;
    font-size: 24px;
    font-weight: 600;
  }
  .form_filter_section {
    margin: 0 0 10px;
    &:nth-of-type{
      margin: 0;
    }
    .select {
      width: 100%;
      padding: 10px;
      font-size: 18px;
      outline: none;
      cursor: pointer;
      &:focus{
        outline: none;
      }
      .select_option {
        outline: none;
        &:focus{
          outline: none;
        }
      }
    }
  }
}
</style>
