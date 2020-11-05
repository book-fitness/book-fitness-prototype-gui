<template>
  <div class="content">
    <h1 class="page-header-text center">LitFit.ru</h1>
    <div class="form">
      <h1 class="form-header-text center">Регистрация</h1>
      <form name="RegistrationForm" action="RegistrationPage.htm" method="POST">
        <label class="label-text">Имя</label>
        <input type="text" name="Login" class="width-full" />
        <label class="label-text">Телефон</label>
        <input type="text" name="Phone" class="width-full" />
        <label class="label-text">E-mail</label>
        <input v-model="login" type="text" name="Email" class="width-full" />
        <label class="label-text">Пароль</label>
        <input
          v-model="password"
          type="text"
          name="Password"
          class="width-full"
        />
        <label class="label-text">Повторите пароль {{ wrongPassword }}</label>
        <span id="errorMsgForPswd" style="color: red" class="label-text"></span>
        <input
          v-model="repeatPassword"
          type="text"
          name="RepeatPassword"
          class="width-full"
        />

        <input
          v-on:click="register"
          type="submit"
          value="Зарегистрироваться"
          class="form-btn width-full"
          onclick="submitForm();
                                return false;"
        />
        <p class="label-text center">Уже есть аккаунт в LitFit?</p>
        <p class="label-text center"><a class="label-text" href="">Войти</a></p>
      </form>
    </div>
    <div class="footer"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      login: "",
      password: "",
      repeatPassword: "",
      wrongPassword: "",
      email: "",
    };
  },
  watch: {
    repeatPassword: function () {
      if (this.password == this.repeatPassword) {
        this.wrongPassword = "Correct password";
      } else {
        this.wrongPassword = "Passwords do not match";
      }
    },
  },
  methods: {
    register() {
      var login = this.login;
      var password = this.password;
      var repeatPassword = this.repeatPassword;
      if (this.login == "" || this.password == "") {
        alert("No Parameters");
      } else {
        alert(this.login + " " + this.password);
      }
      this.$root.axios
        .post(
          "http://localhost:8080/BookPrototype-1.0-SNAPSHOT/webresources/registration",
          {
            login,
            password,
            repeatPassword,
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
.page-header-text {
  color: black;
  font-size: 24px;
  font-family: Sans-Serif;
}
.header {
  background-color: #777;
  height: 100px;
  width: 50%;
}
.content {
  margin-top: 20px;
  margin-left: 300px;
  width: calc(100% - 320px);
}
.center {
  text-align: center;
}
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
</style>