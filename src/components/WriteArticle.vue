<template>
  <div class="write-article center-menu">
    <input class="header" type="text" v-model="headerdata" />
    <ckeditor
      :editor="editor"
      v-model="editorData"
      :config="editorConfig"
    ></ckeditor>
    <a class="my-button" v-on:click="createArticle">Отправить</a>
    <a class="my-button" v-on:click="getArticlesByUser"
      >Получить все статьи пользователя</a
    >
    <ul class="main-articles-content">
      <li v-for="(article, index) in listOfArticles" :key="index">
        <h3 class="title">Заголовок статьи: "{{ article.header }}"</h3>
        <!--<p class="content">Содержание: {{ article.content }}</p> -->
        <div class="content">
          <span>Содержание: </span>
          <div v-html="article.content"></div>
        </div>
        <hr />
      </li>
    </ul>
  </div>
</template>

<script>
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
export default {
  data() {
    return {
      editor: ClassicEditor,
      editorData:
        "Создавать одностраничные приложения (SPA) используя Vue + Vue Router очень просто. С помощью Vue.js, мы уже компонуем своё приложение из компонентов. Добавляя Vue Router, мы просто сопоставляем наши компоненты с маршрутами и объясняем Vue Router где их отображать.",
      editorConfig: {},
      listOfArticles: [],
      headerdata: "Заголовок",
    };
  },
  watch: {
    editorData: function () {
      console.log("Observer");
    },
  },
  methods: {
    createArticle() {
      var content = this.editorData;
      var _this = this;
      var token = _this.$root.getLoginToken();
      var header = this.headerdata;
      console.log(
        "headerdata " + this.headerdata + " editorData" + this.editorData
      );
      if (this.editorData != "") {
        this.$root.axios
          .post(
            "/webresources/article/create",
            {
              header,
              content,
            },
            {
              //withCredentials: true,
              headers: {
                "content-type": "application/json",
                Authorization: "Basic " + token,
              },
            }
          )
          .then(function (response) {
            _this.listOfArticles = response.data;

            if (response.status == 201) {
              console.log("response.status == 201 " + response.status);
              _this.$emit("articleCreated", 0);
            }
            if (response.status == 500) {
              console.log("response.status == 500 " + response.status);
              _this.$emit("articleIsNotCreated", 0);
            }
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    },
    getArticlesByUser() {
      var _this = this;
      var token = _this.$root.getLoginToken();
      this.$root.axios
        .get(
          "/webresources/article/getAllArticles",
          {
            headers: { Authorization: "Basic " + token },
          }
        )
        .then(function (response) {
          _this.listOfArticles = response.data;
          console.log(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    send() {
      console.log("send() start");
      var text = this.editorData;
      console.log(text);
    },
  },
};
</script>

<style>
.ck-editor__editable_inline {
  min-height: 300px;
}
.write-article .header {
  width: 99.5%;
  height: 30px;
}
.write-article .my-button {
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
.write-article .my-button:hover {
  background-color: #fff;
  color: #42b983;
  cursor: pointer;
}
.center-menu {
  min-width: 10%;
  width: 80%;
  margin: 20px 5px 5px 260px;
  min-height: 80%;
  height: 100%;
  background-color: #fff;
}
.write-article ul {
  list-style: none;
  padding-left: 10px;
}
.write-article li {
  padding-left: 0px;
}
.write-article li:hover {
  background-color: rgba(200, 200, 200, 0.3);
  cursor: pointer;
}
.write-article {
  margin-left: 280px;
}
</style>