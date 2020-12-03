<template>
  <div class="app">
    <router-view />
    <!--
      <main-page v-on="checkedIfLoggedIn()"
      v-on:goToRegistration="goToLogin1"
      v-on:goToWelcomePage="goToLogin1"
      v-show="mainPageVisible"
    ></main-page>
    <div>
    <router-view />
    <welcome-page
     v-on="checkedIfLoggedIn()"
      v-show="welcomePageVisible"
      v-on:goToLogin="goToLogin1"
      v-on:goToRegistration1="gtr"
      v-on:goToMainPageFromWelcome="goToLogin1"
    ></welcome-page>
    </div>
    <registration
      v-show="registrationVisible"
      v-on:goToLoginFromRegistration="goToLogin1"
    ></registration>
    <login
      v-show="loginVisible"
      v-on:loginTemp1="goToMainPage"
      v-on:goToRegistration="gtr"
      v-on:goToMainPage="goToMainPage"
    ></login>
    -->
  </div>
</template>

<script>
/*import MainPage from "./components/MainPage.vue";
import WelcomePage from "./components/WelcomePage.vue";
import Registration from "./components/Registration.vue";
import Login from "./components/Login.vue";*/

export default {
  name: "App",
  components: {
    /*MainPage,
    WelcomePage,
    Registration,
    Login,*/
  },
  data() {
    return {
      mainPageVisible: false,
      welcomePageVisible: true,
      registrationVisible: false,
      loginVisible: false,
    };
  },
  methods: {
    goToLogin1() {
      //console.log("goToLogin2");
      this.welcomePageVisible = false;
      this.loginVisible = true;
      this.mainPageVisible = false;
      this.registrationVisible = false;
      console.log("==== " + this.$route.params);
    },
    gtr() {
      this.mainPageVisible = false;
      this.welcomePageVisible = false;
      this.registrationVisible = true;
      this.loginVisible = false;
      //console.log("gtr");
    },
    goToMainPage() {
      //console.log("goToMainPage");
      this.$router.push("/mainpage");
    },
    // goToWelcomePage() {
    //    this.mainPageVisible = false;
    //   this.welcomePageVisible = true;
    //   this.registrationVisible = false;
    //   this.loginVisible = false;
    // },
    checkedIfLoggedIn() {
     
      if(this.$root.hasLoginToken()) {
        console.log("checkedIfLoggedIn start");
        this.$router.push("/mainpage");
      } else {
        console.log("goTologin in checkedifLoggedIN")
      }
    },
  },
};
</script>

<style>
.app {
  height: 100%;
  min-height: 100%;
  position: absolute;
  width: 100%;
}
</style>
