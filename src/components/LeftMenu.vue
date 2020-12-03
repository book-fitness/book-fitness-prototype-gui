<template>
  <div id="left-menu">
    <!--<tasks></tasks>
    <my-books></my-books>
    <interesting></interesting>
    <my-team></my-team>
    <rate></rate>
    <about></about>
    <my-profile></my-profile> -->
    <user-info></user-info>
    <ul>
      <li
        v-for="(item, index) in itemList"
        :key="index"
        @click="clickItem(item.itemKey)"
      >
        <div>{{ item.title }}</div>
      </li> 
    </ul>
  </div>
</template>

<script>
 import UserInfo from "./UserInfo.vue";
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
    UserInfo,
  },
  data() {
    return {
      itemList: [
        { title: "Задания", itemKey: this.$root.mainMenuItems.TASKS },
        { title: "Мои книги", itemKey: this.$root.mainMenuItems.MY_BOOKS },
        { title: "Интересное", itemKey: this.$root.mainMenuItems.INTERESTING },
        { title: "Моя команда", itemKey: this.$root.mainMenuItems.MY_TEAM },
        { title: "Рейтинг", itemKey: this.$root.mainMenuItems.RATE },
        { title: "О проекте", itemKey: this.$root.mainMenuItems.ABOUT },
        { title: "Мой профиль", itemKey: this.$root.mainMenuItems.MY_PROFILE },
        {
          title: "Написать статью",
          itemKey: this.$root.mainMenuItems.WRITE_ARTICLE,
        },
      ],
    };
  },
  methods: {
    clickItem(itemKey) {
      /*if(itemKey === this.$root.mainMenuItems.TASKS) {
          // some logic here...
      }*/
      this.$emit("menu-item-clicked", itemKey);
    },
  },
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
#left-menu ul {
  list-style: none;
  padding: 0 30px 0 30px;
}
#left-menu li {
  padding: 10px;
  border-bottom: 1px solid lightgray;
}
#left-menu li:hover {
  background-color: rgba(200, 200, 200, 0.3);
  border-radius: 4px;
  cursor: pointer;
}
#left-menu li:last-child {
    border-bottom: none;
}
</style>