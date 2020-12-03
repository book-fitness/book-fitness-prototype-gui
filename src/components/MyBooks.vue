<template>
  <div class="my-books">
    <button id="button" v-on:click="getAllBooks">Книги</button><button id="button" v-on:click="createBook">Создать книгу</button>
    <ul>
      <li v-for="(book, index) in bookList" :key="index">
        <div class="book">
          <div class="poster"><img src="404.jpg" width="80px" height="120px"></div>
          <div class="info">
            <h3 class="title">"{{book.name}}"</h3>
            <p class="author">автор: {{book.coverPath}}</p>
            <table>
              <tr>
                <td>Статей: <span>{{articleCount}}</span></td>
                <td>Баллы: <span>{{score}}</span></td>
              </tr>
            </table>
            <div class="chart" style="color:lightgreen">|1----------25--------50---------75--------100(в разработке)|</div>
            <a>Скачать</a>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bookList: [],
      likes: [],
      name: "",
      publisher: "",
      annotation: "",
      coverPath: "",
      score: 265,
      articleCount: 6,
    };
  },
  methods: {
    getAllBooks() {
      var _this = this;
      var token = _this.$root.getLoginToken();
      this.$root.axios
        .get(
          "/webresources/book/getUserBooks",
          {
            headers: { Authorization: "Basic " + token },
          }
        )
        .then(function (response) {
          _this.bookList = response.data;
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    createBook() {
      var _this = this;
      var name = "Hello";
      var publisher = "publischer";
      var annotation = "annotation";
      var coverPath = "coverpath";
      var token = _this.$root.getLoginToken();
      console.log("token before create book " + token)
      this.$root.axios
        .post(
          "/webresources/book/create",
          {
            name,
            publisher,
            annotation,
            coverPath,
          },
          {
            headers: { "content-type": "application/json", Authorization: "Basic " + token},
          }
        )
        .then(function (response) {
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
.book {

}
.poster {
  float: left;
}
.my-books {
  margin-left: 240px;
}
.book .info td:first-child {
  width: 90px;
}
.book a:hover {
  cursor: pointer;
  text-decoration: underline;
}
.book .info {
  margin-left: 100px;
}
.my-books ul {
  list-style: none;
  padding: 0 30px 0 30px;
}
.my-books li {
  padding: 20px 0px 20px 10px;
  border-bottom: 1px solid lightgray;
}
.my-books li:hover {
  background-color: rgb(209, 204, 204);
  border-radius: 4px;
  cursor: pointer;
}
.my-books li:last-child {
    border-bottom: none;
}
.book .title {
  margin: 0;
}
.book .info table {
  border-spacing: 0;
}
</style>