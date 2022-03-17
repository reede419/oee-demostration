<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12">
        <v-row>
          <v-col lg="8" xl="8" md="8" sm="12">
            <div class="shadow-block factory-and-input-block">
              <v-row class="factory-block">
                <v-col cols="12">
                  <h2>{{ $t("hiddenFactoryPotential") }}</h2>
                  <div class="factory-potential">
                    <div class="current-factory">
                      <svg
                        width="156"
                        height="156"
                        viewBox="0 0 156 156"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M144.949 144.832H138.232V116.644C139.575 115.464 140.424 113.736 140.424 111.812C140.424 108.264 137.538 105.378 133.99 105.378H120.573L118.501 72.23C118.434 71.1491 117.537 70.3072 116.455 70.3072H107.687C106.604 70.3072 105.708 71.1491 105.64 72.23L103.568 105.378H98.6538L96.582 72.23C96.5144 71.1491 95.6181 70.3072 94.5353 70.3072H85.7678C84.685 70.3072 83.7886 71.1491 83.7211 72.23L81.6493 105.378H76.7348L74.6629 72.23C74.5954 71.1491 73.6991 70.3072 72.6162 70.3072H63.8488C62.7659 70.3072 61.8696 71.1491 61.8021 72.23L59.7302 105.378H54.0181L52.7477 48.2014C52.7231 47.0869 51.8123 46.1963 50.6975 46.1963H37.546C36.4312 46.1963 35.5203 47.0869 35.4957 48.2014L34.0304 114.146H17.8183C14.2702 114.146 11.3837 117.032 11.3837 120.58C11.3837 122.504 12.2333 124.232 13.5756 125.412V144.832H9.05078C7.9182 144.832 7 145.75 7 146.883C7 148.015 7.9182 148.934 9.05078 148.934H144.949C146.082 148.934 147 148.015 147 146.883C147 145.75 146.082 144.832 144.949 144.832ZM33.8349 122.913L28 122.913C26.8674 122.913 26 123.831 26 124.964C26 126.096 26.8674 127.015 28 127.015H33.7438L33.3479 144.832H17.6772V127.011C17.7242 127.012 17.771 127.015 17.8183 127.015C18.9509 127.015 19.8691 126.096 19.8691 124.964C19.8691 123.831 18.9509 122.913 17.8183 122.913C16.5318 122.913 15.4853 121.866 15.4853 120.58C15.4853 119.294 16.532 118.247 17.8183 118.247H33.9385L33.8349 122.913ZM109.613 74.4088H114.528L116.463 105.378H107.678L109.613 74.4088ZM87.6941 74.4088H92.6086L94.5443 105.378H85.7588L87.6941 74.4088ZM65.7751 74.4088H70.6896L72.625 105.378H63.8395L65.7751 74.4088ZM42.0708 144.832H37.4508L39.5511 50.2976H48.6913L49.9155 105.378H46.3135C42.7654 105.378 39.8787 108.264 39.8787 111.812C39.8787 113.736 40.7282 115.464 42.0708 116.644V144.832ZM133.99 114.145H129.606C128.474 114.145 127.555 115.063 127.555 116.196C127.555 117.329 128.474 118.247 129.606 118.247H133.99C134.037 118.247 134.084 118.244 134.131 118.243V144.832H46.1721V118.243C46.2191 118.244 46.2659 118.247 46.3132 118.247L99 118.243C100.133 118.243 101 117.329 101 116.196C101 115.063 100.133 114.145 99 114.145H46.3132C45.0267 114.145 43.98 113.099 43.98 111.812C43.98 110.526 45.0267 109.479 46.3132 109.479H133.99C135.276 109.479 136.323 110.526 136.323 111.812C136.323 113.099 135.276 114.145 133.99 114.145Z"
                          fill="#FF6D0B"
                        />
                        <path
                          d="M60.0508 128.196C58.9182 128.196 58 129.114 58 130.247V134.631C58 135.763 58.9182 136.682 60.0508 136.682C61.1834 136.682 62.1016 135.763 62.1016 134.631V130.247C62.1016 129.114 61.1834 128.196 60.0508 128.196Z"
                          fill="#FF6D0B"
                        />
                        <path
                          d="M72.6367 128.196C71.5041 128.196 70.5859 129.114 70.5859 130.247V134.631C70.5859 135.763 71.5041 136.682 72.6367 136.682C73.7693 136.682 74.6875 135.763 74.6875 134.631V130.247C74.6875 129.114 73.7693 128.196 72.6367 128.196Z"
                          fill="#FF6D0B"
                        />
                        <path
                          d="M84.6367 128.196C83.5041 128.196 82.5859 129.114 82.5859 130.247V134.631C82.5859 135.763 83.5041 136.682 84.6367 136.682C85.7693 136.682 86.6875 135.763 86.6875 134.631V130.247C86.6875 129.114 85.7693 128.196 84.6367 128.196Z"
                          fill="#FF6D0B"
                        />
                        <path
                          d="M96.6367 128.196C95.5041 128.196 94.5859 129.114 94.5859 130.247V134.631C94.5859 135.763 95.5041 136.682 96.6367 136.682C97.7693 136.682 98.6875 135.763 98.6875 134.631V130.247C98.6875 129.114 97.7693 128.196 96.6367 128.196Z"
                          fill="#FF6D0B"
                        />
                        <path
                          d="M108.637 128.196C107.504 128.196 106.586 129.114 106.586 130.247V134.631C106.586 135.763 107.504 136.682 108.637 136.682C109.769 136.682 110.688 135.763 110.688 134.631V130.247C110.688 129.114 109.769 128.196 108.637 128.196Z"
                          fill="#FF6D0B"
                        />
                        <path
                          d="M120.637 128.196C119.504 128.196 118.586 129.114 118.586 130.247V134.631C118.586 135.763 119.504 136.682 120.637 136.682C121.769 136.682 122.688 135.763 122.688 134.631V130.247C122.688 129.114 121.769 128.196 120.637 128.196Z"
                          fill="#FF6D0B"
                        />
                        <path
                          d="M125.96 6C119.782 6 113.892 8.15605 109.184 12.107C105.803 9.57055 101.707 8.19187 97.465 8.19187C92.3156 8.19187 87.3998 10.2249 83.7458 13.8192C81.8517 13.0025 79.8029 12.5756 77.7379 12.5756C71.6407 12.5756 66.2056 16.2263 63.8202 21.6898C62.9971 21.4593 62.1544 21.3431 61.2985 21.3431C57.0622 21.3431 53.4191 24.098 52.1179 27.957C51.8912 27.9319 51.6631 27.919 51.4348 27.919C47.8867 27.919 45 30.8057 45 34.3536C45.0003 35.4864 45.9185 36.4046 47.0511 36.4046C48.1836 36.4046 49.1018 35.4864 49.1018 34.3538C49.1018 33.0673 50.1486 32.0209 51.4351 32.0209C51.842 32.0209 52.2409 32.136 52.6204 32.3632C53.2351 32.731 53.9969 32.7512 54.6305 32.4173C55.2638 32.0832 55.6772 31.4428 55.7204 30.7278C55.9 27.7656 58.3503 25.4452 61.2982 25.4452C62.2304 25.4452 63.1505 25.6971 64.0326 26.1939C64.5852 26.5054 65.2516 26.5431 65.8365 26.2962C66.4214 26.0493 66.8586 25.5456 67.0213 24.932C68.3089 20.0719 72.7156 16.6775 77.7376 16.6775C79.6407 16.6775 81.5261 17.1751 83.1897 18.1163C84.0401 18.5975 85.1127 18.4119 85.7515 17.672C88.7035 14.254 92.973 12.2937 97.4647 12.2937C101.305 12.2937 104.998 13.7273 107.862 16.3302C108.661 17.0564 109.886 17.0387 110.664 16.2892C114.804 12.2989 120.236 10.1016 125.96 10.1016C138.124 10.1016 148.02 19.9978 148.02 32.1617C148.02 44.3255 138.124 54.2218 125.96 54.2218C117.884 54.2218 110.46 49.8123 106.585 42.7142C106.068 41.7675 104.906 41.3831 103.927 41.8343C101.87 42.7817 99.696 43.2621 97.465 43.2621C92.9733 43.2621 88.7038 41.3019 85.7518 37.8839C85.113 37.1443 84.0406 36.9583 83.1899 37.4396C81.5263 38.3807 79.641 38.8784 77.7379 38.8784C74.2723 38.8784 71.0654 37.2916 68.94 34.525C68.5539 34.0227 67.9575 33.7268 67.324 33.7236C67.3204 33.7236 67.3172 33.7236 67.3139 33.7236C66.6841 33.7236 66.0889 34.0131 65.7 34.5089C64.615 35.8927 63.0108 36.6862 61.2985 36.6862C60.1659 36.6862 59.2477 37.6045 59.2477 38.737C59.2477 39.8696 60.1659 40.7878 61.2985 40.7878C63.4721 40.7878 65.5393 40.0616 67.2236 38.7441C70.0376 41.4588 73.7624 42.9797 77.7379 42.9797C79.8029 42.9797 81.8517 42.5528 83.7458 41.7364C87.3998 45.3307 92.3159 47.3637 97.465 47.3637C99.6752 47.3637 101.839 46.9927 103.92 46.259C108.712 53.7444 116.997 58.3234 125.96 58.3234C140.386 58.3234 152.122 46.5872 152.122 32.1617C152.122 17.7362 140.386 6 125.96 6Z"
                          fill="#FF6D0B"
                        />
                      </svg>
                      <div class="profit-value">
                        <span class="profit">{{ $t("profit") }}</span>
                        <p class="current-factory-value">
                          {{ currentFactoryValue.toLocaleString() }}
                          <span>&#8364;</span>
                        </p>
                      </div>
                    </div>
                    <div class="hide-factory">
                      <div class="potential-value">
                        <span class="potential"> {{ $t("potential") }} </span>
                        <p class="hide-factory-value">
                          {{ hiddenFactoryValue.toLocaleString() }}
                          <span>&#8364;</span>
                        </p>
                      </div>
                      <svg
                        width="156"
                        height="156"
                        viewBox="0 0 156 156"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M144.949 144.832H138.232V116.644C139.575 115.464 140.424 113.736 140.424 111.812C140.424 108.264 137.538 105.378 133.99 105.378H120.573L118.501 72.23C118.434 71.1491 117.537 70.3072 116.455 70.3072H107.687C106.604 70.3072 105.708 71.1491 105.64 72.23L103.568 105.378H98.6538L96.582 72.23C96.5144 71.1491 95.6181 70.3072 94.5353 70.3072H85.7678C84.685 70.3072 83.7886 71.1491 83.7211 72.23L81.6493 105.378H76.7348L74.6629 72.23C74.5954 71.1491 73.6991 70.3072 72.6162 70.3072H63.8488C62.7659 70.3072 61.8696 71.1491 61.8021 72.23L59.7302 105.378H54.0181L52.7477 48.2014C52.7231 47.0869 51.8123 46.1963 50.6975 46.1963H37.546C36.4312 46.1963 35.5203 47.0869 35.4957 48.2014L34.0304 114.146H17.8183C14.2702 114.146 11.3837 117.032 11.3837 120.58C11.3837 122.504 12.2333 124.232 13.5756 125.412V144.832H9.05078C7.9182 144.832 7 145.75 7 146.883C7 148.015 7.9182 148.934 9.05078 148.934H144.949C146.082 148.934 147 148.015 147 146.883C147 145.75 146.082 144.832 144.949 144.832ZM33.8349 122.913L28 122.913C26.8674 122.913 26 123.831 26 124.964C26 126.096 26.8674 127.015 28 127.015H33.7438L33.3479 144.832H17.6772V127.011C17.7242 127.012 17.771 127.015 17.8183 127.015C18.9509 127.015 19.8691 126.096 19.8691 124.964C19.8691 123.831 18.9509 122.913 17.8183 122.913C16.5318 122.913 15.4853 121.866 15.4853 120.58C15.4853 119.294 16.532 118.247 17.8183 118.247H33.9385L33.8349 122.913ZM109.613 74.4088H114.528L116.463 105.378H107.678L109.613 74.4088ZM87.6941 74.4088H92.6086L94.5443 105.378H85.7588L87.6941 74.4088ZM65.7751 74.4088H70.6896L72.625 105.378H63.8395L65.7751 74.4088ZM42.0708 144.832H37.4508L39.5511 50.2976H48.6913L49.9155 105.378H46.3135C42.7654 105.378 39.8787 108.264 39.8787 111.812C39.8787 113.736 40.7282 115.464 42.0708 116.644V144.832ZM133.99 114.145H129.606C128.474 114.145 127.555 115.063 127.555 116.196C127.555 117.329 128.474 118.247 129.606 118.247H133.99C134.037 118.247 134.084 118.244 134.131 118.243V144.832H46.1721V118.243C46.2191 118.244 46.2659 118.247 46.3132 118.247L99 118.243C100.133 118.243 101 117.329 101 116.196C101 115.063 100.133 114.145 99 114.145H46.3132C45.0267 114.145 43.98 113.099 43.98 111.812C43.98 110.526 45.0267 109.479 46.3132 109.479H133.99C135.276 109.479 136.323 110.526 136.323 111.812C136.323 113.099 135.276 114.145 133.99 114.145Z"
                          fill="#707381"
                        />
                        <path
                          d="M60.0508 128.196C58.9182 128.196 58 129.114 58 130.247V134.631C58 135.763 58.9182 136.682 60.0508 136.682C61.1834 136.682 62.1016 135.763 62.1016 134.631V130.247C62.1016 129.114 61.1834 128.196 60.0508 128.196Z"
                          fill="#707381"
                        />
                        <path
                          d="M72.6367 128.196C71.5041 128.196 70.5859 129.114 70.5859 130.247V134.631C70.5859 135.763 71.5041 136.682 72.6367 136.682C73.7693 136.682 74.6875 135.763 74.6875 134.631V130.247C74.6875 129.114 73.7693 128.196 72.6367 128.196Z"
                          fill="#707381"
                        />
                        <path
                          d="M84.6367 128.196C83.5041 128.196 82.5859 129.114 82.5859 130.247V134.631C82.5859 135.763 83.5041 136.682 84.6367 136.682C85.7693 136.682 86.6875 135.763 86.6875 134.631V130.247C86.6875 129.114 85.7693 128.196 84.6367 128.196Z"
                          fill="#707381"
                        />
                        <path
                          d="M96.6367 128.196C95.5041 128.196 94.5859 129.114 94.5859 130.247V134.631C94.5859 135.763 95.5041 136.682 96.6367 136.682C97.7693 136.682 98.6875 135.763 98.6875 134.631V130.247C98.6875 129.114 97.7693 128.196 96.6367 128.196Z"
                          fill="#707381"
                        />
                        <path
                          d="M108.637 128.196C107.504 128.196 106.586 129.114 106.586 130.247V134.631C106.586 135.763 107.504 136.682 108.637 136.682C109.769 136.682 110.688 135.763 110.688 134.631V130.247C110.688 129.114 109.769 128.196 108.637 128.196Z"
                          fill="#707381"
                        />
                        <path
                          d="M120.637 128.196C119.504 128.196 118.586 129.114 118.586 130.247V134.631C118.586 135.763 119.504 136.682 120.637 136.682C121.769 136.682 122.688 135.763 122.688 134.631V130.247C122.688 129.114 121.769 128.196 120.637 128.196Z"
                          fill="#707381"
                        />
                        <path
                          d="M99.6875 43.8125H98.1953V37.75C98.1953 35.4026 96.2927 33.5 93.9453 33.5H86.6797C84.3323 33.5 82.4297 35.4026 82.4297 37.75V43.8125H80.9375C80.1428 43.8125 79.5 44.4553 79.5 45.25V56.5C79.5 57.2947 80.1428 57.9375 80.9375 57.9375H99.6875C100.482 57.9375 101.125 57.2947 101.125 56.5V45.25C101.125 44.4553 100.482 43.8125 99.6875 43.8125ZM85.5391 37.75C85.5391 37.1209 86.0506 36.6094 86.6797 36.6094H93.9453C94.5744 36.6094 95.0859 37.1209 95.0859 37.75V43.8125H85.5391V37.75ZM98.0156 54.8281H82.6094V46.9219H98.0156V54.8281Z"
                          fill="#707381"
                          stroke="#707381"
                        />
                      </svg>
                    </div>
                  </div>
                  <div class="potential-line dont-painted-line">
                    <div
                      class="potential-line painted-line"
                      :style="{ width: currentFactoryWidth + '%' }"
                    ></div>
                  </div>
                  <div class="current-hide-factory">
                    <span>{{ $t("currentFactory") }}</span>
                    <span>{{ $t("hiddenFactory") }}</span>
                  </div>
                </v-col>
              </v-row>
              <v-row class="input-block">
                <v-col cols="12">
                  <v-row class="block-input">
                    <v-col
                      xl="3"
                      lg="3"
                      md="4"
                      sm="4"
                      cols="6"
                      v-for="input of inputs"
                      :key="input.id"
                    >
                      <label :for="input.id">{{ input.label }}</label>
                      <v-text-field
                        v-model="input.currentVal"
                        :id="input.id"
                        type="number"
                        :min="input.minVal"
                        :suffix="input.suffix"
                        :class="input.class"
                      ></v-text-field>
                    </v-col>
                    <v-col xl="3" lg="3" md="4">
                      <label for="oee">{{ $t("oeeCalculatedBelow") }}</label>
                      <v-text-field
                        v-model="oeeResult"
                        id="oee"
                        type="number"
                        suffix="%"
                        class="disabledInput"
                        disabled="disabled"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>
            </div>
          </v-col>
          <v-col xl="4" lg="4" md="4">
            <PopularLoses />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-row>
          <v-col xl="8" lg="8" md="8" cols="12">
            <RangeInput @oeeResult="getOeeResult" />
          </v-col>
          <v-col xl="4" lg="4" md="4" cols="12">
            <Koeebox />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import RangeInput from "../components/RangeInput.vue";
import PopularLoses from "../components/PopularLoses.vue";
import Koeebox from "../components/Koeebox.vue";

export default {
  name: "oee-app",
  components: {
    PopularLoses,
    RangeInput,
    Koeebox,
  },
  data: (that) => ({
    value: null,
    previousValue: null,
    plannedHours: 0,
    maxProductivity: 0,
    pricePerItem: 0,
    cost: 0,
    directMaintenanceCosts: 0,
    amortizations: 0,
    otherFixedCosts: 0,
    oee: 0,
    oeeResult: 0,
    currentFactoryWidth: 0,
    currentFactoryValue: 0,
    hiddenFactoryValue: 0,
    maxFactoryValueNumbers: 10,
    inputs: [
      {
        id: "planned-hours",
        currentVal: "8760",
        minVal: "0",
        maxVal: "1000",
        suffix: that.$t("hoursMin"),
        label: that.$t("plannedHours"),
        class: "",
      },
      {
        id: "max-productivity",
        currentVal: "50",
        minVal: "0",
        maxVal: "1000",
        suffix: that.$t("unitsHr"),
        label: that.$t("maxOutputHr"),
        class: "",
      },
      {
        id: "price-per-item",
        currentVal: "0.6",
        minVal: "0",
        maxVal: "1000",
        suffix: "€",
        label: that.$t("unitPrice"),
        class: "",
      },
      {
        id: "cost",
        currentVal: "0.35",
        minVal: "0",
        maxVal: "1000",
        suffix: "€",
        label: that.$t("primaryCostUnit"),
        class: "",
      },
      {
        id: "direct-maintenance-costs",
        currentVal: "9469",
        minVal: "0",
        maxVal: "1000",
        suffix: "€",
        label: that.$t("directMaintenanceCosts"),
        class: "",
      },
      {
        id: "amortizations",
        currentVal: "15000",
        minVal: "0",
        maxVal: "1000",
        suffix: "€",
        label: that.$t("depreciation"),
        class: "",
      },
      {
        id: "other-fixed-costs",
        currentVal: "30000",
        minVal: "0",
        maxVal: "1000",
        suffix: "€",
        label: that.$t("otherFixedCosts"),
        class: "",
      },
    ],
  }),
  mounted() {
    this.plannedHours = this.getPlannedHours;
    this.maxProductivity = this.getMaxProductivity;
    this.pricePerItem = this.getPricePerItem;
    this.cost = this.getCost;
    this.directMaintenanceCosts = this.getDirectMaintenanceCosts;
    this.amortizations = this.getAmortizations;
    this.otherFixedCosts = this.getOtherFixedCosts;
    this.getCurrentFactoryValue(
      this.plannedHours,
      this.maxProductivity,
      this.pricePerItem,
      this.cost,
      this.directMaintenanceCosts,
      this.amortizations,
      this.otherFixedCosts
    );
  },
  watch: {
    getPlannedHours(val) {
      this.plannedHours = val;
      this.getCurrentFactoryValue(
        val,
        this.maxProductivity,
        this.pricePerItem,
        this.cost,
        this.directMaintenanceCosts,
        this.amortizations,
        this.otherFixedCosts
      );
    },
    getMaxProductivity(val) {
      this.maxProductivity = val;
      this.getCurrentFactoryValue(
        this.plannedHours,
        val,
        this.pricePerItem,
        this.cost,
        this.directMaintenanceCosts,
        this.amortizations,
        this.otherFixedCosts
      );
    },
    getPricePerItem(val) {
      this.pricePerItem = val;
      this.getCurrentFactoryValue(
        this.plannedHours,
        this.maxProductivity,
        val,
        this.cost,
        this.directMaintenanceCosts,
        this.amortizations,
        this.otherFixedCosts
      );
    },
    getCost(val) {
      this.cost = val;
      this.getCurrentFactoryValue(
        this.plannedHours,
        this.maxProductivity,
        this.pricePerItem,
        val,
        this.directMaintenanceCosts,
        this.amortizations,
        this.otherFixedCosts
      );
    },
    getDirectMaintenanceCosts(val) {
      this.directMaintenanceCosts = val;
      this.getCurrentFactoryValue(
        this.plannedHours,
        this.maxProductivity,
        this.pricePerItem,
        this.cost,
        val,
        this.amortizations,
        this.otherFixedCosts
      );
    },
    getAmortizations(val) {
      this.amortizations = val;
      this.getCurrentFactoryValue(
        this.plannedHours,
        this.maxProductivity,
        this.pricePerItem,
        this.cost,
        this.directMaintenanceCosts,
        val,
        this.otherFixedCosts
      );
    },
    getOtherFixedCosts(val) {
      this.otherFixedCosts = val;
      this.getCurrentFactoryValue(
        this.plannedHours,
        this.maxProductivity,
        this.pricePerItem,
        this.cost,
        this.directMaintenanceCosts,
        this.amortizations,
        val
      );
    },
    getOeeResultValue(val) {
      this.oeeResult = Math.floor(val);
      this.getCurrentFactoryValue(
        this.plannedHours,
        this.maxProductivity,
        this.pricePerItem,
        this.cost,
        this.directMaintenanceCosts,
        this.amortizations,
        this.otherFixedCosts,
        Math.floor(val)
      );
    },
  },
  computed: {
    getPlannedHours() {
      let plannedHours = this.inputs.find((el) => el.id == "planned-hours");
      return plannedHours.currentVal;
    },
    getMaxProductivity() {
      let maxProductivity = this.inputs.find(
        (el) => el.id == "max-productivity"
      );
      return maxProductivity.currentVal;
    },
    getPricePerItem() {
      let pricePerItem = this.inputs.find((el) => el.id == "price-per-item");
      return pricePerItem.currentVal;
    },
    getCost() {
      let cost = this.inputs.find((el) => el.id == "cost");
      return cost.currentVal;
    },
    getDirectMaintenanceCosts() {
      let directMaintenanceCosts = this.inputs.find(
        (el) => el.id == "direct-maintenance-costs"
      );
      return directMaintenanceCosts.currentVal;
    },
    getAmortizations() {
      let amortizations = this.inputs.find((el) => el.id == "amortizations");
      return amortizations.currentVal;
    },
    getOtherFixedCosts() {
      let otherFixedCosts = this.inputs.find(
        (el) => el.id == "other-fixed-costs"
      );
      return otherFixedCosts.currentVal;
    },
    getOeeResultValue() {
      return this.oeeResult;
    },
  },
  methods: {
    getOeeResult(val) {
      this.oeeResult = val;
    },
    getCurrentFactoryValue(
      plannedHours,
      maxProductivity,
      pricePerItem,
      cost,
      directMaintenanceCosts,
      amortizations,
      otherFixedCosts,
      oeeResult = this.oeeResult
    ) {
      let margaPerItem = +pricePerItem - +cost;
      let theoreticalProduction = +plannedHours * +maxProductivity;
      let actualProduction = theoreticalProduction * (oeeResult / 100);
      let margaPerYearTeoretical = margaPerItem * theoreticalProduction;
      let margaPerYearCurrency = margaPerItem * actualProduction;

      let valueCurrentFactory =
        margaPerYearCurrency -
        +directMaintenanceCosts -
        +amortizations -
        +otherFixedCosts;
      this.currentFactoryValue =
        valueCurrentFactory.toString().length >= this.maxFactoryValueNumbers
          ? Math.ceil(valueCurrentFactory).toString().substring(0, 10)
          : Math.ceil(valueCurrentFactory);

      let valueHiddenFactory =
        margaPerYearTeoretical -
        +directMaintenanceCosts -
        +amortizations -
        +otherFixedCosts;
      this.hiddenFactoryValue =
        valueHiddenFactory.toString().length >= this.maxFactoryValueNumbers
          ? Math.ceil(valueHiddenFactory).toString().substring(0, 10)
          : Math.ceil(valueHiddenFactory);

      let currentWidth =
        (this.currentFactoryValue * 100) / this.hiddenFactoryValue;

      this.currentFactoryWidth =
        currentWidth > 0 && currentWidth < 100
          ? Math.round(currentWidth)
          : currentWidth >= 100
          ? 100
          : 0;
    },
  },
};
</script>

<style lang="scss">
$orange: #ff6d0b;
$white: #ffffff;
$text-color: #979ba7;
@font-face {
  font-family: Manrope;
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: local("Manrope-Regular"),
    url(~@/assets/fonts/Manrope-VariableFont_wght.ttf) format("truetype");
}

body {
  height: 100%;
  margin: 0;
  background-color: #191c24;
  font-family: Manrope;
  // cursor: none;
}
.shadow-block {
  box-shadow: -2px -2px 4px #212530, 2px 2px 4px #14171d;
  border-radius: 4px;
  margin-top: 15px;
  padding: 10px 56px;
}
body::-webkit-scrollbar {
  display: none;
}

h2 {
  font-family: Manrope;
  font-size: 26px;
  color: white;
}
.factory-and-input-block {
  min-height: 100%;
}
.factory-block {
  margin-bottom: 45px;
  h2 {
    margin: 15px 0;
  }
}
.profit-value {
  .profit {
    font-size: 26px;
    color: $orange;
    margin-left: 25px;
  }
  .current-factory-value {
    height: 100%;
    padding-bottom: 40px;
  }
}
.potential-value {
  text-align: right;
  .potential {
    font-size: 26px;
    color: $text-color;
    margin-right: 25px;
  }
  .hide-factory-value {
    height: 100%;
    padding-bottom: 40px;
  }
}
.factory-potential {
  display: flex;
  justify-content: space-between;

  .current-factory,
  .hide-factory {
    display: flex;

    p {
      align-items: flex-end;
      display: flex;
      font-size: 40px;
      margin-bottom: 5px;
    }
  }

  .current-factory {
    .current-factory-value {
      color: $orange;
      margin-left: 20px;
    }
  }

  .hide-factory {
    .hide-factory-value {
      color: $text-color;
      margin-right: 20px;
    }
  }
}
.potential-line {
  height: 8px;
  border-radius: 25px;
}
.dont-painted-line {
  width: 100%;
  background-color: #707381;
}
.painted-line {
  background-color: $orange;
}
.current-hide-factory {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;

  span {
    color: $text-color;
    font-family: Manrope;
    font-size: 18px;
  }
}

.input-block {
  .block-input {
    align-items: end;
  }
  .disabledInput {
    .keyboard {
      display: none;
    }

    .v-input__slot {
      .v-text-field__slot {
        border: none;
        background-color: #252830;
      }
    }
  }

  .v-text-field__suffix {
    color: $text-color;
    margin-right: 8px;
  }
  .theme--light.v-text-field:not(.v-input--has-state):hover
    > .v-input__control
    > .v-input__slot:before {
    border: 0;
    width: 0;
  }
  .v-text-field > .v-input__control > .v-input__slot:after {
    border: 0;
    width: 0;
  }

  .v-input__slot {
    .v-text-field__slot {
      border: 1px solid $text-color;
      border-radius: 4px;

      input {
        padding-left: 10px;
        max-height: 56px;
        color: $orange;
      }
    }
  }
  label {
    font-size: 16px;
    color: #979ba7;
  }

  .v-text-field {
    padding: 0;
    margin: 0;
  }
}

.v-input
  .v-input__control
  .v-input__slot
  .v-text-field__slot
  input::-webkit-outer-spin-button,
.v-input
  .v-input__control
  .v-input__slot
  .v-text-field__slot
  input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

// KEYBOARD
.input-block {
  .numKeyboardInput {
    margin-top: -50px;

    .keyboard-input {
      .input-value {
        color: $orange;
        margin-left: 10px;
        padding-bottom: 10px;
      }

      .icon-clear {
        display: none;
      }
    }

    .keyboard {
      font-family: Manrope;
      // position: relative;
      height: 10rem;
      font-size: 26px;
      background-color: #252830;
      color: white;

      .icon {
        font-size: 0.8rem;
        color: #de5151;
      }

      td[data-code="K"].active {
        color: #81fb85;
      }

      td[data-code="K"] {
        background-color: #252830;
        font-size: 0.8rem;
      }
      td:nth-of-type(-n + 3) {
        padding: 14px;
        font-weight: 400;
      }

      td {
        border: 1px solid black;
      }
    }
  }
}

@media (min-width: 2000px) {
  body {
    font-size: 28px;
    overflow: hidden;
  }
  body::-webkit-scrollbar {
    display: none;
  }

  h2 {
    font-size: 32px;
  }
  .profit-value .profit,
  .potential-value .potential {
    font-size: 32px;
  }
  .current-hide-factory span {
    font-size: 26px;
  }

  .input-block {
    .v-input__slot {
      .v-text-field__slot {
        input {
          height: 70px;
          font-size: 28px;
        }
      }
    }
    label {
      font-size: 28px;
    }
    .v-text-field__suffix {
      font-size: 28px;
    }
    .numKeyboardInput {
      margin-top: -75px;
      .keyboard {
        height: 15rem;
      }
      .keyboard-input {
        padding-top: 5px;
        margin-left: 20px;
        font-size: 28px;
      }
    }
  }
}
@media (min-width: 1263px) and (max-width: 1500px) {
  .shadow-block {
    margin-top: 15px;
    padding: 10px 15px;
  }
}
@media (max-width: 1263px) {
  .shadow-block {
    margin-top: 15px;
    padding: 10px 15px;
  }
  .profit-value {
    .profit {
      font-size: 18px;
    }
  }
  .potential-value .potential {
    font-size: 18px;
    margin-right: 0;
  }
  .factory-potential .current-factory p,
  .factory-potential .hide-factory p {
    font-size: 18px;
  }
  .current-hide-factory span {
    font-size: 16px;
  }
  .factory-and-input-block {
    .factory-block {
      .factory-potential {
        .current-factory {
          svg {
            height: 100px;
            width: 100px;
          }
        }
        .hide-factory {
          svg {
            height: 100px;
            width: 100px;
          }
        }
      }
    }
  }
}
@media (max-width: 600px) {
  .factory-and-input-block {
    padding: 5px;
  }
  .profit-value .profit {
    margin-left: 0;
  }
  .factory-potential .current-factory .current-factory-value {
    margin-left: 0;
  }
}
</style>
