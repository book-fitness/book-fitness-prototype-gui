<template>
  <div class="main-content">
    <top-menu v-on:goToMainPage="goToRegistration"></top-menu>
    <left-menu
      class="left-menu"
      v-on:menu-item-clicked="menuItemClickHandler"
    ></left-menu>
    <tasks v-show="activePanel === $root.mainMenuItems.TASKS">Задания</tasks>
    <my-books v-show="activePanel === $root.mainMenuItems.MY_BOOKS">
      Мои книженции :)
    </my-books>
    <div v-show="activePanel === $root.mainMenuItems.INTERESTING">
      Интересное
    </div>
    <div v-show="activePanel === $root.mainMenuItems.MY_TEAM">Моя команда</div>
    <rate v-show="activePanel === $root.mainMenuItems.RATE"></rate>
    <div v-show="activePanel === $root.mainMenuItems.ABOUT">О проекте</div>
    <div v-show="activePanel === $root.mainMenuItems.MY_PROFILE">
      Мой профиль
    </div>
    <write-article
      class=""
      id="newId"
      v-show="activePanel === $root.mainMenuItems.WRITE_ARTICLE"
      v-on:articleCreated="isCreated"
      v-on:articleIsNotCreated="articleIsNotCreated"
      >Написать статью</write-article    >
    <article-created v-on:goToArticles="goToArticles" v-show="activePanel === $root.mainMenuItems.ARTICLE_CREATED"> </article-created>
    <article-not-created v-on:goToArticles="goToArticles" v-show="activePanel === $root.mainMenuItems.ARTICLE_NOT_CREATED"> </article-not-created>
  </div>
</template>

<script>
import TopMenu from "./TopMenu.vue";
import LeftMenu from "./LeftMenu.vue";
import MyBooks from "./MyBooks.vue";
import Tasks from "./Tasks.vue";
import WriteArticle from "./WriteArticle.vue";
import Rate from "./Rate.vue";
import ArticleCreated from "./ArticleCreated.vue";
import ArticleNotCreated from "./ArticleNotCreated.vue";
//import Store from "./store.js"

export default {
  components: {
    TopMenu,
    LeftMenu,
    MyBooks,
    Tasks,
    WriteArticle,
    Rate,
    ArticleCreated,
    ArticleNotCreated,
  },
  data() {
    return {
      activePanel: this.$root.mainMenuItems.TASKS,
    };
  },
  methods: {
    menuItemClickHandler(itemKey) {
      this.activePanel = itemKey;
      //thi.$roouter.push("/" + itemKey);
    },
    goToRegistration() {
      this.$emit("goToRegistration", 0);
    },
    isCreated() {
      this.activePanel = this.$root.mainMenuItems.ARTICLE_CREATED;
      console.log("this.activePanel === this.$root.mainMenuItems.ARTICLE_CREATED;");
    },
    goToArticles() {
      this.activePanel = this.$root.mainMenuItems.WRITE_ARTICLE;
    },
    articleIsNotCreated() {
      this.activePanel = this.$root.mainMenuItems.ARTICLE_NOT_CREATED;
    }
  },
};
</script>

<style>
.main-content .left-menu {
  width: 260px;
  min-height: 20%;
  background-color: rgb(245, 245, 245);
  float: left;
  height: 100%;
  font-family: sans-serif;
  font-size: 14px;
  font-weight: bold;
}
.main-content .center_menu {
  min-width: 10%;
  width: 80%;
  margin: 5px 5px 5px 212px;
  min-height: 80%;
  height: 100%;
  background-color: grey;
}
.main-content {
}
</style>