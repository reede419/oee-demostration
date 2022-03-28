<template>
  <div class="koeebox-block shadow-block">
    <h2>{{ $t("smartFactoryInMinutes") }}</h2>
    <div class="koeebox-qr">
      <div class="koeebox">
        <div class="logo">
          <svg
            width="210"
            height="33"
            viewBox="0 0 210 33"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <rect width="210" height="33" fill="url(#pattern0)" />
            <defs>
              <pattern
                id="pattern0"
                patternContentUnits="objectBoundingBox"
                width="1"
                height="1"
              >
                <use
                  xlink:href="#image0"
                  transform="translate(-0.00416667) scale(0.00261905 0.0166667)"
                />
              </pattern>
              <image
                id="image0"
                width="385"
                height="60"
                xlink:href="data:image/png;base64,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"
              />
            </defs>
          </svg>
          <div class="email">
            <a href="mailto:order@koeebox.com">order@koeebox.com</a>
          </div>
          <div class="phone">
            <a href="tel:+38 096 813 5257">+38 096 813 5257</a>
          </div>
        </div>
        <div class="qr-code">
          <div class="qr-image">
            <img src="../assets/img/QR2.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
$text-color: #979ba7;
.koeebox-block ::v-deep {
  h2 {
    margin-top: 25px;
  }
  .koeebox-qr {
    padding-bottom: 23px;
    .koeebox {
      display: flex;
      justify-content: center;

      .logo {
        margin-top: 90px;
        margin-bottom: 65px;
        border-right: 2px solid #252830;
        padding-right: 15px;
        .email {
          margin-top: 45px;
          text-align: center;
          a {
            text-decoration: none;
            color: $text-color;
            font-size: 24px;
          }
        }

        .phone {
          margin-top: 20px;
          text-align: left;
          a {
            text-decoration: none;
            color: $text-color;
            font-size: 24px;
          }
        }
      }

      .qr-code {
        display: flex;
        align-items: center;

        .qr-image {
          padding: 0 10px;
          margin-top: 15px;
        }
      }
    }
  }
}
@media (min-width: 2000px) {
  .koeebox-block {
    display: grid;
    .koeebox-qr {
      .koeebox {
        .logo,
        .qr-code {
          width: 50%;
          text-align: center;
          svg {
            zoom: 1.2;
          }
        }
        .logo {
          border-right: 6px solid #252830;
        }
        .qr-code {
          .qr-image {
            margin-left: auto;
            margin-right: auto;

            img {
              zoom: 1.2;
            }
          }
        }
      }
    }
  }
}
@media (min-width: 2601px) and (max-width: 2800px) {
  .koeebox-block {
    .koeebox-qr {
      padding-bottom: 14%;
    }
  }
}
@media (min-width: 2401px) and (max-width: 2600px) {
  .koeebox-block {
    .koeebox-qr {
      padding-bottom: 15%;
    }
  }
}
@media (min-width: 2001px) and (max-width: 2400px) {
  .koeebox-block {
    .koeebox-qr {
      padding-bottom: 17%;
    }
  }
}
@media (min-width: 1701px) and (max-width: 2000px) {
  .koeebox-block {
    display: grid;
    .koeebox-qr {
      padding-bottom: 5%;
    }
  }
}
@media (min-width: 1451px) and (max-width: 1700px) {
  .koeebox-block .koeebox-qr {
    padding-bottom: 7%;
  }
}
@media (min-width: 1263px) and (max-width: 1400px) {
  .shadow-block {
    margin-top: 15px;
    padding: 20px 26px;
  }
  .koeebox-block {
    .koeebox-qr {
      padding-bottom: 0;
      .koeebox {
        .qr-code {
          padding-left: 5px;
          .qr-image {
            padding: 0;
            img {
              zoom: 0.8;
            }
          }
        }
        .logo {
          padding-right: 10px;
          svg {
            zoom: 0.8;
          }
          .email {
            a {
              font-size: 18px;
            }
          }
          .phone {
            a {
              font-size: 18px;
            }
          }
        }
      }
    }
  }
}
@media (max-width: 1263px) {
  .koeebox-block {
    .koeebox-qr {
      text-align: center;
      .koeebox {
        display: block;
        .qr-code {
          .qr-image {
            margin: 0 auto;
          }
        }
        .logo {
          border-right: none;
          border-bottom: 2px solid #252830;
          padding-bottom: 20px;
          margin-bottom: 10px;
        }
      }
    }
  }
}
@media (min-width: 1200px) and (max-width: 1263px) {
  .koeebox-block {
    .koeebox-qr {
      margin-bottom: 21%;
    }
  }
}
@media (min-width: 1100px) and (max-width: 1200px) {
  .koeebox-block {
    .koeebox-qr {
      margin-bottom: 8%;
    }
  }
}
@media (max-width: 960px) {
  .koeebox-block .koeebox-qr .koeebox .logo {
    margin-top: 20px;
    .email {
      margin-top: 20px;
    }
    .phone {
      text-align: center;
    }
  }
}
</style>
