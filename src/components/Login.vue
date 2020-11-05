<template>
  <div class="content">
    <h1 class="page-header-text center">LitFit.ru</h1>
    <div class="form">
      <h1 class="form-header-text center">Войти в систему</h1>
      <form method="POST" action="" class="width-full">
        <label class="label-text">Логин</label><span class="error-msg"></span>
        <div class="">
          <input
            v-model="login"
            type="text"
            class="width-full"
            placeholder="Ваше Имя"
            autofocus="true"
          />
          <span style="float: right" class="label-text"
            ><a href="">Забыли пароль?</a></span
          >
          <label class="label-text">Пароль</label>
          <input
            v-model="password"
            type="text"
            class="width-full"
            placeholder="Ваш пароль"
          />
          <input v-on:click="login1" type="submit" value="Войти" class="form-btn width-full" />
          <input v-bind:class="isHidden"/>
        </div>
      </form>

      <p class="label-text center">Или войти через социальные сети</p>

      <hr style="width: 180px" />
      <p class="label-text center">Еще не зарегистрировались в LitFit?</p>
      <p class="label-text center"><a href="/registration">Регистрация</a></p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      login: "",
      password: "",
      isHidden: false,
    };
  },
  methods: {
    login1() {
        var login = this.login;
        var password = this.password;
        if(this.login == '' || this.password == '') alert("No Parameters");
        
      alert("LOGIN" + password + login);
      this.$root.axios
        .post(
          "http://localhost:8080/BookPrototype-1.0-SNAPSHOT/webresources/login",
          {
            login,
            password,
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
  },
};
</script>

<style>
.label-text {
  color: black;
  font-size: 12px;
  font-family: Sans-Serif;
}
.width-full {
  width: 100%;
}
.form-btn {
  color: white;
  background: black;
  border: 2px solid black;
  text-transform: uppercase;
}
.form {
  background: grey;
  width: 40%;
  padding: 25px 50px;
  margin: auto;
}
.page-header-text {
  color: white;
  font-size: 24px;
  font-family: Sans-Serif;
}
.center {
  text-align: center;
}
</style>