<template>
  <div class="registration-sucess">
    <h1 class="registration-sucess-header">Регистрация прошла успешна ✔</h1>
    <a class="registration-sucess-button" v-on:click="goToLogin"
      >Залогиниться</a
    >
  </div>
</template>

<script>
export default {
    methods: {
        goToLogin() {
            this.$router.push("/login");
        }
    }
};
</script>

<style>
.registration-sucess {
  text-align: center;
  margin-top: 100;
}
.registration-sucess-header {
  color: green;
}
.registration-sucess .registration-sucess-button {
  padding: 0.75em 2em;
  border-radius: 2em;
  display: inline-block;
  color: #fff;
  background-color: #4fc08d;
  transition: all 0.15s ease;
  box-sizing: border-box;
  border: 1px solid #4fc08d;
  margin: 10px 0px 10px 10px;
}
.registration-sucess .registration-sucess-button:hover {
  background-color: #fff;
  color: #42b983;
  cursor: pointer;
}
</style>