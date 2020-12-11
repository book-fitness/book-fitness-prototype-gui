<template>
  <div class="header">
    <div id="project-logo">
      <h1>
        LitFit.ru
        <div class="log-out" v-on:click="logOut">Выйти</div>
      </h1>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goToMainPage() {
      this.$router.push("/login");
    },
    logOut() {
      var _this = this;
      var token = this.$root.getLoginToken();
      console.log("Logut before sent" + token);
      this.$root.axios
        .post(
          "/webresources/logout/logoutToken",
          {},
          {
            headers: { Authorization: "Bearer " + token },
          }
        )
        .then(function (response) {
          _this.token = response.data.token;
          if (_this.token == null) {
            _this.$root.removeLoginToken();
            _this.goToMainPage();
          }
          console.log("returned token" + _this.token);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
};
</script>

<style>
#project-logo {
  background-color: grey;
}
h1 {
  color: aliceblue;
  padding: 0px 0px 0px 30px ;
}
.header .log-out {
  position: absolute;
  top: 10px;
  right: 18px;
  font-size: medium;
  color: aliceblue;
}
.header .log-out:hover {
  color: red;
  cursor: pointer;
}
.header {
  width:100%;
}
.header h1 {
  margin: 0;
}

</style>