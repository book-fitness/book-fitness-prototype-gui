<template>
  <div>
    <button id="button" v-on:click="getAllBooks">Получить все книги</button>
    <ul>
      <li v-for="(book, index) in bookList" :key="index">{{book}}<br/></li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bookList: [],
      likes:[],
    };
  },
  methods: {
    getAllBooks() {
      var _this = this;
      this.$root.axios
        .get(
          "http://localhost:8080/BookPrototype-1.0-SNAPSHOT/webresources/book/getAllBooks"
        )
        .then(function (response) {
          _this.bookList = response.data;
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
};
</script>
  

<style>
</style>