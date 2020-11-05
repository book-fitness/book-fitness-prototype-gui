<template>
  <div>
    <top-menu></top-menu> 
    <left-menu
      class="left_menu"
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
    <div v-show="activePanel === $root.mainMenuItems.RATE">Рейтинг</div>
    <div v-show="activePanel === $root.mainMenuItems.ABOUT">О проекте</div>
    <div v-show="activePanel === $root.mainMenuItems.MY_PROFILE"> Мой профиль</div>
    <login class="content" v-show="activePanel === $root.mainMenuItems.LOGIN">Login</login>
    <registration v-show="activePanel === $root.mainMenuItems.REGISTRATION">Регистрация</registration>
    <write-article id="newId" v-show="activePanel === $root.mainMenuItems.WRITE_ARTICLE">Написать статью</write-article>
     
  </div>
</template>

<script>
import TopMenu from "./components/TopMenu.vue";
import LeftMenu from "./components/LeftMenu.vue";
import MyBooks from "./components/MyBooks.vue";
import Tasks from "./components/Tasks.vue";
import Login from "./components/Login.vue";
import Registration from "./components/Registration.vue";
import WriteArticle from "./components/WriteArticle.vue";
//import Store from "./store.js"

export default {
  name: "App",
  components: {
    TopMenu,
    LeftMenu,
    MyBooks,
    Tasks,
    Login,
    Registration,
    WriteArticle,
  },
  data() {
    return {
      activePanel: this.$root.mainMenuItems.TASKS,
    };
  },
  methods: {
    menuItemClickHandler(itemKey) {
      this.activePanel = itemKey;
    },
  },
};
</script>

<style>
.left_menu {
  width: 200px;
  min-height: 20%;
  margin: 0 5px 0 5px;
  background-color: grey;
  float: left;
  height: 100%;
}
.center_menu {
  min-width: 10%;
  width: 80%;
  margin: 5px 5px 5px 212px;
  min-height: 80%;
  height: 100%;
  background-color: blue;
}
.content {
    margin-top: 20px;
    margin-left: 300px;
    width: calc(100% - 320px);
}
</style>
