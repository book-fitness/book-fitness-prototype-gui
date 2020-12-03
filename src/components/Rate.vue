<template>
  <div class="rate">
    <p>Рейтинг</p>
    <ul>
      <li>
        <span>Я относитель команды</span>
        <div class="stack-chart">
          <div class="grid">
            <div></div>
            <div></div>
          </div>
          <div class="charts">
            <div
              class="stack-chart"
              style="border-bottom: 20px solid grey"
            ></div>
            <div
              class="stack-chart"
              style="border-bottom: 40px solid grey"
            ></div>
            <div
              class="stack-chart"
              style="border-bottom: 60px solid orange"
            ></div>
            <div
              class="stack-chart"
              style="border-bottom: 20px solid grey"
            ></div>
            <div
              class="stack-chart"
              style="border-bottom: 40px solid grey"
            ></div>
            <div
              class="stack-chart"
              style="border-bottom: 60px solid orange"
            ></div>
            <div
              class="stack-chart"
              style="border-bottom: 20px solid grey"
            ></div>
            <div
              class="stack-chart"
              style="border-bottom: 40px solid grey"
            ></div>
            <div
              class="stack-chart"
              style="border-bottom: 60px solid orange"
            ></div>
            <div
              class="stack-chart"
              style="border-bottom: 20px solid grey"
            ></div>
            <div
              class="stack-chart"
              style="border-bottom: 40px solid grey"
            ></div>
            <div
              class="stack-chart"
              style="border-bottom: 60px solid orange"
            ></div>
          </div>
        </div>
      </li>
      <li>
        <span>Я относительно других участников</span>
        <div class="stack-chart">
          <div class="grid">
            <div></div>
            <div></div>
          </div>
          <div class="charts">
            <div
              class="stack-chart"
              style="border-bottom: 20px solid grey"
            ></div>
            <div
              class="stack-chart"
              style="border-bottom: 40px solid grey"
            ></div>
            <div
              class="stack-chart"
              style="border-bottom: 60px solid orange"
            ></div>
            <div
              class="stack-chart"
              style="border-bottom: 20px solid grey"
            ></div>
            <div
              class="stack-chart"
              style="border-bottom: 40px solid grey"
            ></div>
            <div
              class="stack-chart"
              style="border-bottom: 60px solid orange"
            ></div>
            <div
              class="stack-chart"
              style="border-bottom: 20px solid grey"
            ></div>
            <div
              class="stack-chart"
              style="border-bottom: 40px solid grey"
            ></div>
            <div
              class="stack-chart"
              style="border-bottom: 60px solid orange"
            ></div>
            <div
              class="stack-chart"
              style="border-bottom: 20px solid grey"
            ></div>
            <div
              class="stack-chart"
              style="border-bottom: 40px solid grey"
            ></div>
            <div
              class="stack-chart"
              style="border-bottom: 60px solid orange"
            ></div>
          </div>
        </div>
      </li>
      <li>
        <span>Список по баллам</span>
        <ul>
          <li></li>
          <li></li>
        </ul>
      </li>
      <li>
        <span>Моя команда относительно других участников</span>
        <div class="stack-chart">
          <div class="grid">
            <div></div>
            <div></div>
          </div>
          <div class="charts">
            <div
              class="stack-chart"
              style="border-bottom: 20px solid grey"
            ></div>
            <div
              class="stack-chart"
              style="border-bottom: 40px solid grey"
            ></div>
            <div
              class="stack-chart"
              style="border-bottom: 60px solid orange"
            ></div>
            <div
              class="stack-chart"
              style="border-bottom: 20px solid grey"
            ></div>
            <div
              class="stack-chart"
              style="border-bottom: 40px solid grey"
            ></div>
            <div
              class="stack-chart"
              style="border-bottom: 60px solid orange"
            ></div>
            <div
              class="stack-chart"
              style="border-bottom: 20px solid grey"
            ></div>
            <div
              class="stack-chart"
              style="border-bottom: 40px solid grey"
            ></div>
            <div
              class="stack-chart"
              style="border-bottom: 60px solid orange"
            ></div>
            <div
              class="stack-chart"
              style="border-bottom: 20px solid grey"
            ></div>
            <div
              class="stack-chart"
              style="border-bottom: 40px solid grey"
            ></div>
            <div
              class="stack-chart"
              style="border-bottom: 60px solid orange"
            ></div>
          </div>
        </div>
      </li>
      <li>
        <span>Лучшие команды</span>
        <ul>
          <li></li>
          <li></li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style>

.rate {
  margin-left: 260px;
}
.stack-chart {
  height: 100px;
  margin: 20px 0 20px 0;
}
.stack-chart > .grid {
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100px;
}
.stack-chart > .charts {
  position: relative;
  top: -166px;
  left: 0;
  width: 100%;
  height: 100px;
}
#rating li {
    color: green;
}
.stack-chart > .grid > div:first-child {
    border-top: 1px solid lightgray;
    border-bottom: 1px solid lightgray;
    height: 30px;
    margin: 10px 0 30px 0;
}
.stack-chart > .grid > div:last-child {
    border-top: 1px solid lightgray;
    border-bottom: 1px solid lightgray;
    height: 30px;
    margin: 30px 0 0 0;
}
.stack-chart > .charts {
    position: relative;
    top: -166px;
    left: 0;
    width: 100%;
    height: 100px;
}
.stack-chart > .charts > div {
    width: 25px;
    margin: 0 20px 0 0;
    display: inline-block;
}


</style>