<template>
  <div class="article-not-created">
    <h1 class="article-not-created-header">
      Статья, к сожалению, не создана ( ´•︵•` )
    </h1>
    <a class="article-not-created-button" v-on:click="goToArticles"
      >Вернуться к списку статей</a
    >
  </div>
</template>

<script>
export default {
  methods: {
    goToArticles() {
      this.$emit("goToArticles", 0);
    },
  },
};
</script>

<style>
.article-not-created {
  text-align: center;
  margin-top: 100;
}
.article-not-created-header {
  color: red;
}
.article-not-created .article-not-created-button {
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
.article-not-created .article-not-created-button:hover {
  background-color: #fff;
  color: #42b983;
  cursor: pointer;
}
</style>