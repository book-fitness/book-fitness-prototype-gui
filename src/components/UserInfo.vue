<template>
  <div class="user-info">
    <img class="user-avatar" src="" width="50" height="50" alt="Нет фото" />
    <span class="user-name">{{userName}}</span>
    <span class="user-status">{{userStatus}}</span>
    <hr />
    <table>
      <tbody>
        <tr>
          <td>Статей</td>
          <td>Постов</td>
        </tr>
        <tr>
          <td>{{articleCount}}</td>
          <td>{{postCount}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
    data() {
        return {
            userName: "Александр Иванов",
            userStatus: "Новичек",
            articleCount: 260,
            postCount: 1565,
        }
    }
};
</script>

<style>
.user-info {
    margin: 20px;
    width: 220px;
    border: 1px solid black;
    font-weight: normal;
    background-color: white;
}
.user-status {
    font-style: italic;
    color: #888;
    font-size: 14px;
}
.user-info td {
    width: 130px;
}
.user-info tr:first-child {
    color: #888;
    font-size: 14px;
    text-transform: uppercase;
}
</style>