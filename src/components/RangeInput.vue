<template>
  <div class="shadow-block block-range-input">
    <v-row>
      <v-col cols="12">
        <v-row class="range-input-block">
          <v-col lg="6" xl="6" md="12" sm="12" class="horizontal-inputs">
            <v-app id="inspire">
              <div
                class="horizontal-input"
                v-for="input of horizontalInputs"
                :key="input.id"
              >
                <div class="accessibility">
                  <span>{{ input.labelName }}</span>
                  <span class="currentValue">{{ input.currentValue }}%</span>
                </div>
                <v-slider v-model="input.currentValue"></v-slider>
                <div class="min-max-value">
                  <span>{{ input.minValue }}</span>
                  <span>{{ input.maxValue }}</span>
                </div>
              </div>
            </v-app>
          </v-col>

          <v-col xl="6" lg="6" md="12">
            <v-row>
              <v-col xl="6" lg="6" md="6">
                <div class="flex-wrapper">
                  <span class="oeeValue">{{ Math.floor(oeeResult) }}%</span>
                  <div class="single-chart">
                    <svg viewBox="0 0 36 36" class="circular-chart orange">
                      <path
                        class="circle-bg"
                        d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                      <path
                        class="circle"
                        stroke-dasharray="60, 100"
                        d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                      <text x="19" y="9" class="midleValue">60%</text>
                    </svg>
                  </div>
                  <div class="single-chart2">
                    <svg
                      viewBox="0 0 36 36"
                      class="circular-chart2"
                      :class="circleClass"
                    >
                      <path
                        class="circle-bg"
                        d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                      <path
                        class="circle"
                        :stroke-dasharray="strokeDasharray"
                        d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                    </svg>
                  </div>
                </div>
              </v-col>
              <v-col cols="6">
                <div class="circle-info">
                  <p>
                    <span class="example" :class="circleClass"></span> OEE
                    поточне
                  </p>
                  <p>
                    <span class="example-orange"></span> Середній світовий
                    показник ОЕЕ за даними oee.com
                  </p>
                </div>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data: () => ({
    oeeResult: 60,
    avabilityValue: 0,
    perfomanceValue: 0,
    quallityValue: 0,
    rotatDeg: 0,
    strokeDasharray: 60,
    circleClass: "",
    horizontalInputs: [
      {
        id: "avability",
        minValue: "0",
        maxValue: "100",
        currentValue: "85",
        class: "avability",
        text: "Avability",
        labelName: "Доступність",
      },
      {
        id: "perfomance",
        minValue: "0",
        maxValue: "100",
        currentValue: "90",
        class: "perfomance",
        text: "Perfomance",
        labelName: "Продуктивність ",
      },
      {
        id: "quallity",
        minValue: "0",
        maxValue: "100",
        currentValue: "95",
        class: "quallity",
        text: "Quallity",
        labelName: "Якість",
      },
    ],
  }),
  created() {
    this.avabilityValue = this.getAvabilityValue;
    this.perfomanceValue = this.getPerfomanceValue;
    this.quallityValue = this.getQuallityValue;
    this.calculateOee(
      this.avabilityValue,
      this.perfomanceValue,
      this.quallityValue
    );
  },
  watch: {
    getAvabilityValue(val) {
      this.avabilityValue = val;
      this.calculateOee(val, this.perfomanceValue, this.quallityValue);
    },
    getPerfomanceValue(val) {
      this.perfomanceValue = val;
      this.calculateOee(this.avabilityValue, val, this.quallityValue);
    },
    getQuallityValue(val) {
      this.quallityValue = val;
      this.calculateOee(this.avabilityValue, this.perfomanceValue, val);
    },
  },
  computed: {
    getAvabilityValue() {
      let avabilityItem = this.horizontalInputs.find(
        (el) => el.id == "avability"
      );
      return avabilityItem.currentValue;
    },
    getPerfomanceValue() {
      let perfomanceItem = this.horizontalInputs.find(
        (el) => el.id == "perfomance"
      );
      return perfomanceItem.currentValue;
    },
    getQuallityValue() {
      let perfomanceItem = this.horizontalInputs.find(
        (el) => el.id == "quallity"
      );
      return perfomanceItem.currentValue;
    },
  },
  methods: {
    calculateOee(
      avability = this.avabilityValue,
      perfomance = this.perfomanceValue,
      quallity = this.quallityValue
    ) {
      let avabilityWithoutPercent = avability / 100,
        perfomanceyWithoutPercent = perfomance / 100,
        quallityWithoutPercent = quallity / 100;

      this.oeeResult =
        avabilityWithoutPercent *
        perfomanceyWithoutPercent *
        quallityWithoutPercent *
        100;
      this.circleClass =
        this.oeeResult < 50
          ? "red"
          : this.oeeResult < 75
          ? "orange"
          : "light-green";

      this.$emit("oeeResult", this.oeeResult);
      this.rotatDeg = (360 * this.oeeResult) / 100;
      this.strokeDasharray = this.oeeResult + ",  100";
    },
  },
};
</script>

<style lang="scss">
$orange: #ff6d0b;
$white: #ffffff;
$text-color: #979ba7;

.range-input-block {
  .v-slider__thumb {
    width: 25px;
    height: 25px;
    &::before {
      width: 45px;
      height: 45px;
      left: -10px;
      top: -10px;
    }
  }
  padding-top: 5%;
  .horizontal-inputs {
    .theme--light.v-application {
      background: #191c24;
    }
    .v-application .primary {
      background-color: $orange !important;
      cursor: none;
    }
    .v-application .primary.lighten-3 {
      background-color: #979ba7 !important;
      border-radius: 12px;
    }
    #inspire {
      margin-right: 1%;
      min-height: 100%;
    }
    .v-application--is-ltr .v-messages {
      display: none;
    }
    .v-slider--horizontal {
      min-height: 15px;
      cursor: none;
      .v-slider__track-container {
        height: 8px;
        width: 100%;

        .v-slider__track-fill {
          height: 8px;
          border-radius: 12px;
          cursor: none;
        }
      }
    }

    .v-application--wrap {
      min-height: auto;
    }

    .horizontal-input {
      margin: 15px 0;
      width: 100%;
      .accessibility,
      .min-max-value {
        display: flex;
        justify-content: space-between;
        span {
          color: $text-color;
          padding: 0 10px;
          font-size: 18px;
        }
        .currentValue {
          color: $orange;
        }
      }
    }
  }

  .flex-wrapper {
    display: flex;
    flex-flow: row nowrap;
    position: relative;
    padding-left: 10%;

    .oeeValue {
      position: absolute;
      color: #81fb85;
      left: 24%;
      top: -25px;
      font-size: 18px;
    }
  }

  .single-chart,
  .single-chart2 {
    width: 35%;
    justify-content: space-around;
    position: absolute;
  }
  .single-chart {
    top: 8px;
    .midleValue {
      fill: $orange;
      font-family: sans-serif;
      font-size: 4.7px;
      text-anchor: middle;
    }
  }

  .circular-chart {
    display: block;
    margin: 6% auto;
    max-width: 80%;
  }

  .circle-bg {
    fill: none;
    stroke: #252830;
    stroke-width: 1.5;
    position: relative;
  }

  .circle {
    fill: none;
    stroke-width: 1.5;
    stroke-linecap: round;
    animation: progress 1s ease-out forwards;
  }

  @keyframes progress {
    0% {
      stroke-dasharray: 0 100;
    }
  }

  .circular-chart.orange .circle {
    stroke: $orange;
  }

  .circular-chart2.light-green .circle {
    stroke: #81fb85;
  }
  .circular-chart2.red .circle {
    stroke: red;
  }
  .circular-chart2.orange .circle {
    stroke: rgb(255, 251, 2);
  }
  .percentage {
    fill: #252830;
    font-family: sans-serif;
    font-size: 0.5em;
    text-anchor: middle;
  }

  .circle-info {
    margin-left: auto;
    margin-top: 10%;

    p {
      font-size: 16px;
      line-height: 150%;
      font-weight: 400;
      margin: 20px 0;
      color: $text-color;
      display: flex;

      .example {
        display: flex;
        width: 12px;
        height: 12px;
        border-radius: 50%;
        margin: auto 10px;
      }
      .red {
        background-color: red;
      }
      .light-green {
        background-color: #81fb85;
      }
      .orange {
        background-color: rgb(255, 251, 2);
      }

      .example-orange {
        background-color: $orange;
        display: flex;
        width: 16px;
        height: 12px;
        border-radius: 50%;
        margin: auto 10px;
      }
    }
  }
}

@media (min-width: 2501px) and (max-width: 3000px) {
  .range-input-block {
    .circle-info {
      margin-top: 45%;
      p {
        font-size: 28px;
        line-height: 32px;
        .example-orange {
          width: 25px;
          height: 13px;
        }
      }
    }
    .single-chart {
      top: 15px;
    }
    .single-chart,
    .single-chart2 {
      margin-top: 25%;
      width: 85%;
    }
    .flex-wrapper {
      .oeeValue {
        font-size: 28px;
        left: 45%;
        top: 55px;
      }
    }
  }
}
@media (min-width: 2001px) and (max-width: 2500px) {
  .range-input-block {
    .circle-info {
      margin-top: 45%;
      p {
        font-size: 28px;
        line-height: 32px;
        .example-orange {
          width: 35px;
          height: 13px;
        }
      }
    }
    .single-chart,
    .single-chart2 {
      margin-top: 30%;
      width: 85%;
    }
    .single-chart {
      top: 11px;

      .midleValue {
        font-size: 4.5px;
      }
    }
    .flex-wrapper {
      .oeeValue {
        font-size: 28px;
        left: 45%;
        top: 50px;
      }
    }
  }
}
@media (min-width: 2001px) {
  // .block-range-input {
  //   min-height: 100%;
  // }
  .range-input-block {
    padding-top: 3%;
    .horizontal-inputs .v-slider--horizontal .v-slider__track-container {
      height: 15px;
    }
    .horizontal-inputs
      .v-slider--horizontal
      .v-slider__track-container
      .v-slider__track-fill {
      height: 15px;
    }
    .v-slider__thumb {
      width: 40px;
      height: 40px;
      left: -12px;
      &::before {
        left: -2px;
        top: -2px;
      }
    }

    .horizontal-inputs {
      .horizontal-input {
        margin: 20px auto;
        .accessibility,
        .min-max-value {
          span {
            font-size: 28px;
          }
        }
        .accessibility {
          margin-bottom: 10px;
        }
      }
    }
  }
}
@media (min-width: 1901px) and (max-width: 2000px) {
  .range-input-block {
    padding-bottom: 30px;
  }
  .range-input-block {
    .single-chart,
    .single-chart2 {
      margin-top: 16%;
      width: 85%;
    }
    .flex-wrapper {
      .oeeValue {
        left: 45%;
        top: 18px;
        font-size: 20px;
      }
    }
    .circle-info {
      margin-top: 45%;
      p {
        .example-orange {
          width: 20px;
          height: 13px;
        }
      }
    }
  }
}
@media (min-width: 1701px) and (max-width: 1900px) {
  .range-input-block {
    padding-bottom: 3%;
    .single-chart,
    .single-chart2 {
      margin-top: 23%;
      width: 85%;
    }
    .flex-wrapper {
      .oeeValue {
        left: 43%;
        top: 30px;
      }
    }
    .circle-info {
      margin-top: 50%;
      p {
        .example-orange {
          width: 25px;
          height: 13px;
        }
      }
    }
  }
}
@media (min-width: 1451px) and (max-width: 1700px) {
  .range-input-block {
    padding-bottom: 5%;

    .single-chart,
    .single-chart2 {
      margin-top: 40%;
      width: 85%;
    }
    .flex-wrapper {
      .oeeValue {
        left: 43%;
        top: 55px;
      }
    }
    .circle-info {
      margin-top: 50%;
      p {
        .example-orange {
          width: 30px;
          height: 13px;
        }
      }
    }
  }
}
@media (min-width: 1263px) and (max-width: 1450px) {
  .range-input-block {
    .single-chart,
    .single-chart2 {
      margin-top: 44%;
      width: 100%;
    }
    .single-chart {
      top: 7px;
    }
    .flex-wrapper {
      .oeeValue {
        font-size: 17px;
        left: 50%;
        margin-top: 50px;
        top: 0;
      }
    }
    .circle-info {
      margin-top: 50%;
      p {
        .example-orange {
          width: 35px;
        }
      }
    }
  }
}
@media (max-width: 1263px) {
  .range-input-block {
    padding-bottom: 16%;
    .single-chart,
    .single-chart2 {
      width: 70%;
    }
    .flex-wrapper {
      .oeeValue {
        font-size: 24px;
        left: 40%;
        top: -30px;
      }
    }
  }
}
</style>
