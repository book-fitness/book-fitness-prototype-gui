<template>
  <div class="registration-content">
    <h1 class="page-header-text center">LitFit.ru</h1>
    <div class="registration-form">
      <h1 class="form-header-text center">Регистрация</h1>
      <form name="RegistrationForm">
        <label class="label-text">Имя</label>
        <input type="text" name="Login" class="text-field-input" />
        <label class="label-text">Телефон</label>
        <input type="text" name="Phone" class="text-field-input" />
        <label class="label-text">E-mail <span class="wrong-login">{{wrongLogin}}</span></label>
        <input
          v-model="login"
          type="text"
          name="Email"
          class="text-field-input"
        />
        <label class="label-text">Пароль</label>
        <input
          v-model="password"
          type="text"
          name="Password"
          class="text-field-input"
        />
        <label class="label-text"
          >Повторите пароль
          <span class="correct-password">{{ correctPassword }}</span
          ><span class="wrong-password">{{ wrongPassword }}</span></label
        >
        <span id="errorMsgForPswd" style="color: red" class="label-text"></span>
        <input
          v-model="repeatPassword"
          type="text"
          name="RepeatPassword"
          class="text-field-input"
        />

        <a v-on:click="register" class="form-btn width-full"
          >Зарегистрироваться</a
        >
        <p class="label-text center">Уже есть аккаунт в LitFit?</p>
        <p class="label-text center">
          <a v-on:click="goToLogin" class="login-text">Войти</a>
        </p>
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
      correctPassword: "",
      wrongPassword: "",
      email: "",
      wrongLogin: "",
    };
  },
  watch: {
    repeatPassword: function () {
      if (this.password == this.repeatPassword) {
        this.correctPassword = "Correct password";
        this.wrongPassword = "";
      } else {
        this.correctPassword = "";
        this.wrongPassword = "Passwords do not match";
      }
    },
    login: function() {
      var pattern = "^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$";
      var regExp = new RegExp(pattern);
      if (!regExp.test(this.login)) {
        this.wrongLogin = "Логин должен быть электронной почтой";
      } else {
        this.wrongLogin = "";
      }
    },
  },
  methods: {
    goToLogin() {
      this.$router.push("/login");
    },
    register() {
      var _this = this;
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
          "/webresources/registration/register",
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
          if(response.status == 201) {
          _this.$router.push("/registrationSuccess");
          console.log("registration Success")
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
};
</script>

<style>
.registration-form {
  background: white;
  width: 15%;
  padding: 25px 50px;
  margin: auto;
}
.page-header-text {
  color: black;
  font-size: 24px;
  font-family: Sans-Serif;
}
.registration-content .header {
  background-color: #777;
  height: 100px;
  width: 50%;
}
.registration-content {
  background: grey;
  border: 1px solid green;
  width: 100%;
  min-height: 100%;
}
.center {
  text-align: center;
}
.registration-content .label-text {
  color: black;
  font-size: 12px;
  font-family: Sans-Serif;
}

.registration-content .form-btn {
  padding: 10px 10px 10px 10px;
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
  text-align: center;
  box-sizing: border-box;
  text-transform: uppercase;
  font-size: 12px;
  font-family: Sans-Serif;
}

.registration-content .text-field-input {
  height: 24px;
  border: 1px solid lightgray;
  border-radius: 4px;
  padding-left: 10px;
  padding-right: 10px;
  box-sizing: border-box;
  width: 100%;
}
.correct-password {
  color: green;
}
.wrong-password {
  color: red;
}
.wrong-login {
  color: red;
}
.login-text {
  text-decoration: underline;
}
.login-text:hover {
  cursor: pointer;
  color: #4fc08d;
}
</style>