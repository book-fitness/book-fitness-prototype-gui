<template>
  <div class="welcome-content">
    <div class="welcome-text">{{ mainText }}</div>
    <br />
    <!-- <a class="welcome-button" v-on:click="goToRegistration">Зарегистрироваться</a> -->
    <router-link to="/registration" class="welcome-button"
      >Зарегистрироваться</router-link
    >
    <br />
    <div class="welcome-button-login">
      <span>или </span><a v-on:click="goToLogin1">войти в аккаунт</a>
      <!-- <span>или </span><router-link to="/login">войти в аккаунт</router-link> -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mainText: "LitFit.ru",
    };
  },
  methods: {
    goToRegistration() {
      this.$router.push("/registration");
    },
    goToLogin1() {
      this.$router.push("/login");
    },
  },
};
</script>

<style>
.welcome-button-login {
  position: relative;
  left: 50%;
  transform: translate(-50%, 0);
  display: inline-block;
  margin-top: 10px;
  color: white;
}
.welcome-button-login a {
  text-decoration: underline;
}
.welcome-button-login a:hover {
  text-decoration: underline;
  color: black;
  cursor: pointer;
}
.welcome-text {
  border: 2px solid white;
  font-size: 48px;
  font-weight: bold;
  font-family: Sans-Serif;
  color: white;
  padding: 100px 0px 100px 0px;
  text-align: center;
  margin-top: 200px;
  position: relative;
  left: 50%;
  transform: translate(-50%, 0);
  display: inline-block;
  width: 700px;
}

.welcome-content {
  background-color: #777;
  height: 100%;
  min-width: 100%;
  position: absolute;
}

.welcome-button {
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
  text-decoration: none;
}
.welcome-button:hover {
  background-color: #fff;
  color: #42b983;
}
.wb-button-place {
  margin: auto;
  border: 2px solid white;
}
</style>