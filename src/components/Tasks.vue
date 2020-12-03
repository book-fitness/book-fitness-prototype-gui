<template>
  <div>
    <button id="button" v-on:click="getTasks">Задания</button>
    <button id="button" v-on:click="login">Залогиниться</button>
    <ul>
      <li v-for="(task, index) in taskList" :key="index">{{ task }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      taskList: [],
    };
  },
  methods: {
    getTasks() {
      var _this = this;
      this.$root.axios
        .get(
          "/webresources/book/getBooksByUserId" //how to getUserId?
          /*{
              Cookie: 'JSESSIONID=v94c6Ymt4U6Exp4uFIg-PalCyq0RdB6qSqT84PFy.desktop-154e136',
          }*/
        )
        .then(function (response) {
          _this.taskList = response.data;
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    login() {
      this.$root.axios
        .post(
          "/webresources/login",
          {
            login: "igorgmailru",
            password: "qwery123456",
          },
          {
            //withCredentials: true,
            headers: { "content-type": "application/json" },
          }
        )
        .then(function (response) {
          console.log(response.headers);
          console.log(response.headers["Set-Cookie"]);
          var cookiesHeader = response.headers["Set-Cookie"];
          var cookies =
            cookiesHeader == undefined ? [] : cookiesHeader.splite(";");
          var loginCookie = null;
          for (var cookie in cookies) {
            if (cookie.startsWith("JSESSIONID=")) {
              loginCookie = cookie;
              break;
            }
          }
          if (loginCookie != null) {
            this.$root.loginCookie = loginCookie;
            console.log("loginCookie " + loginCookie);
          }
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    loadBookData() {
      return {};
    },
  },
};
</script>

<style>
.myFont {
  color: red;
  font-size: x-large;
}
</style>