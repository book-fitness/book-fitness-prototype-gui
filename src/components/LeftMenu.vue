<template>
  <div id="leftMenu">
    <!--<tasks></tasks>
    <my-books></my-books>
    <interesting></interesting>
    <my-team></my-team>
    <rate></rate>
    <about></about>
    <my-profile></my-profile> -->

    <ul>
      <li v-for="(item, index) in itemList" :key="index" @click="clickItem(item.itemKey)">{{ item.title }}</li>
    </ul>
  </div>
</template>

<script>
// import Tasks from "./Tasks.vue";
// import MyBooks from "./MyBooks.vue";
// import Interesting from "./Interesting.vue";
// import MyTeam from "./MyTeam.vue";
// import Rate from "./Rate.vue";
// import About from "./About.vue";
// import MyProfile from "./MyProfile.vue";
//import Store from "./../store.js"

export default {
  components: {
    // Tasks,
    // MyBooks,
    // Interesting,
    // MyTeam,
    // Rate,
    // About,
    // MyProfile,
  },
  data() {
    return {
      itemList: [
        {title: 'Задания', itemKey: this.$root.mainMenuItems.TASKS},
        {title: 'Мои книги', itemKey: this.$root.mainMenuItems.MY_BOOKS},
        {title: 'Интересное', itemKey: this.$root.mainMenuItems.INTERESTING},
        {title: 'Моя команда', itemKey: this.$root.mainMenuItems.MY_TEAM},
        {title: 'Рейтинг', itemKey: this.$root.mainMenuItems.RATE},
        {title: 'О проекте', itemKey: this.$root.mainMenuItems.ABOUT},
        {title: 'Мой профиль', itemKey: this.$root.mainMenuItems.MY_PROFILE},
        {title: 'Логин', itemKey: this.$root.mainMenuItems.LOGIN},
        {title: 'Регистрация', itemKey: this.$root.mainMenuItems.REGISTRATION},
        {title: 'Написать статью', itemKey: this.$root.mainMenuItems.WRITE_ARTICLE},
      ]
    }
  },
  methods: {
    clickItem(itemKey) {
      /*if(itemKey === this.$root.mainMenuItems.TASKS) {
          // some logic here...
      }*/
      this.$emit("menu-item-clicked", itemKey);
    },
  }
};
</script>

<style>

a.button {
  padding: 0.55em 2em;
  border-radius: 2em;
  display: inline-block;
  color: #fff;
  background-color: #4fc08d;
  transition: all 0.15s ease;
  box-sizing: border-box;
  border: 1px solid #4fc08d;
  margin: 5px;
}
</style>