<template>
  <div class="popular-loses-block shadow-block">
    <h2>Види популярних втрат</h2>
    <div class="popular-loses">
      <p>Нестача матеріалів / сировини</p>
      <p>Контроль якості</p>
      <p>Несправності обладнання</p>
      <p>Нестача робітників</p>
      <p>Позапланове обслуговування</p>
      <p>Переналаштування</p>
      <p>Поломка інструментів та обладнання</p>
      <p>Наради</p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
$text-color: #979ba7;
.popular-loses-block {
  min-height: 100%;
  h2 {
    margin-top: 5px;
  }
  .popular-loses {
    p {
      font-family: Manrope;
      font-size: 18px;
      color: $text-color;
      margin: 26px 0;
    }
  }
}
@media (min-width: 2000px) {
  .popular-loses-block {
    .popular-loses {
      p {
        font-size: 26px;
      }
    }
  }
}
</style>
