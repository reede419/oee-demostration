<template>
  <div class="popular-loses-block shadow-block">
    <h2>{{ $t("commonTypesLosses") }}</h2>
    <div class="popular-loses">
      <p>{{ $t("lackMaterialRawMaterial") }}</p>
      <p>{{ $t("qualityControl") }}</p>
      <p>{{ $t("equipmentFailures") }}</p>
      <p>{{ $t("lackWorkforce") }}</p>
      <p>{{ $t("emergencyRepair") }}</p>
      <p>{{ $t("changeovers") }}</p>
      <p>{{ $t("toolEquipmentBrackdown") }}</p>
      <p>{{ $t("meetings") }}</p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
$text-color: #979ba7;
.popular-loses-block ::v-deep {
  min-height: 100%;
  h2 {
    margin-top: 5px;
  }
  .popular-loses {
    p {
      font-family: Manrop;
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
