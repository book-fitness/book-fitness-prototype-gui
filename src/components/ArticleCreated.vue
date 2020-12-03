<template>
  <div class="article-created">
    <h1 class="article-created-header">Статья успешно создана ✔</h1>
    <a class="article-created-button" v-on:click="goToArticles">Вернуться к списку статей</a>
  </div>
</template>

<script>
export default {
    methods: {
        goToArticles() {
            this.$emit("goToArticles", 0);
        },
    }
};
</script>

<style>
.article-created {
  text-align: center;
  margin-top: 100;
}
.article-created-header {
  color: green;
}
.article-created .article-created-button {
  padding: 0.75em 2em;
  border-radius: 2em;
  display: inline-block;
  color: #fff;
  background-color: #4fc08d;
  transition: all 0.15s ease;
  box-sizing: border-box;
  border: 1px solid #4fc08d;
  margin: 10px 0px 10px 10px;
}
.article-created .article-created-button:hover {
  background-color: #fff;
  color: #42b983;
  cursor: pointer;
}
</style>