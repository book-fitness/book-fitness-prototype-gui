<template>
  <div class="login-content">
    <h1 class="page-header-text center">LitFit.ru</h1>
    <div class="login-form">
      <h1 class="form-header-text center">Войти в систему</h1>
      <form method="POST" action="">
        <label class="label-text">Логин</label><span class="error-msg"></span>
          <input
            v-model="login"
            type="text"
            class="text-field-input"
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
            class="text-field-input"
            placeholder="Ваш пароль"
          />
          <a
            v-on:click="loginMain"
            value="Войти"
            class="welcome-button-login2 welcome-button3"
            >Войти</a
          >
      </form>

      <p class="label-text center">Или войти через социальные сети</p>

      <hr style="width: 180px" />
      <p class="label-text center">Еще не зарегистрировались в LitFit?</p>
      <p class="label-text center">
        <a v-on:click="goToRegistration" class="registration-text">Регистрация</a>
      </p>
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
    goToRegistration() {
      this.$router.push("/registration");
    },
    loginTemp() {
        console.log("tempLogin");
        this.$emit("loginTemp1", 0);  
    },
    goToMainPage() {
      if(this.$root.hasLoginToken != null) {
        //this.$emit("goToMainPage", 0);
        this.$router.push("/mainpage");
      }
    },

    loginMain() {
      console.log("start login2");
      var login = this.login;
      var password = this.password;
      var _this = this;
      if (this.login == "" || this.password == "") alert("No Parameters");
      this.$root.axios
        .post(
          "/webresources/login",
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
          var token = response.data.token;
          console.log("Logged in with token: " + token);
          _this.$root.setLoginToken(token);
          _this.$router.push("/mainpage");
        })
        .catch(function (error) {
          if(error == null) {
          console.log(error);
          _this.goToRegistration();
          }
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

.login-content .login-form {
  background: white;
  width: 15%;
  padding: 25px 50px;
  margin: auto;
}
.page-header-text {
  color: black(199, 39, 39);
  font-size: 32px;
  font-family: Sans-Serif;
  color: white;
}
.center {
  text-align: center;
}
.login-content {
  background: grey;
  border: 1px solid green;
  width: 100%;
  min-height: 100%;
}
.form-header-text {
  color: black;
  font-size: 18px;
  font-family: Sans-Serif;
  text-transform: uppercase;
}
.welcome-button-login2 {
  position: relative;
  left: 50%;
  transform: translate(-50%, 0);
  display: inline-block;
  margin-top: 10px;
  color: black;
  padding: 10px 10px 10px 10px;
  font-family: Sans-Serif;
  font-weight: bold;
  text-transform: uppercase;
  font-size: 12px;
  width: 100%;
  box-sizing: border-box;
  text-align: center;
}
welcome-button-login2 a:hover {
  text-decoration: underline;
  color: green;
  cursor: pointer;
}
.welcome-button3 {
  padding: 0.75em 2em;
  border-radius: 2em;
  color: #fff;
  background-color: #4fc08d;
  transition: all 0.15s ease;
  display: inline-block;
  position: relative;
  left: 50%;
  transform: translate(-50%, 0);
  margin-top: 10px;
  cursor: pointer;
}
.text-field-input {
    height: 24px;
    border: 1px solid lightgray;
    border-radius: 4px;
    padding-left: 10px;
    padding-right: 10px;
    box-sizing: border-box;
    width: 100%;
}
.registration-text {
    text-decoration: underline;
}
.registration-text:hover {
  cursor: pointer;
  color:#4fc08d; 
}
</style>