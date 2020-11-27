<template>
  <div id="settings">
    <v-app id="inspire">
      <v-item-group mandatory>
        <v-container>
          <v-row>
            <v-col v-for="n in 1" :key="n" cols="6" md="3">
              <v-item v-slot="{ active, toggle }">
                <a @click="primavera()"
                  ><v-card
                    :color="active ? 'primary' : ''"
                    class="d-flex align-center"
                    dark
                    height="200"
                    @click="toggle"
                  >
                    <div
                      v-if="!active"
                      class="display-3 flex-grow-1 text-center"
                    >
                      Primavera
                    </div>

                    <v-scroll-y-transition>
                      <div
                        v-if="active"
                        class="display-3 flex-grow-1 text-center"
                      >
                        <v-img
                          src="https://www.ambientum.com/wp-content/uploads/2018/03/paisajes-primavera.jpg"
                          height="200"
                          width="425"
                          class="grey darken-4"
                          ><div class="display-3 flex-grow-1 text-center">
                            Primavera
                          </div></v-img
                        >
                      </div>
                    </v-scroll-y-transition>
                  </v-card></a
                >
              </v-item>
            </v-col>
            <v-col v-for="n in 1" :key="n" cols="6" md="3">
              <v-item v-slot="{ active, toggle }">
                <a @click="invierno()"
                  ><v-card
                    :color="active ? 'primary' : ''"
                    class="d-flex align-center"
                    dark
                    height="200"
                    @click="toggle"
                  >
                    <div
                      v-if="!active"
                      class="display-3 flex-grow-1 text-center"
                    >
                      Invierno
                    </div>

                    <v-scroll-y-transition>
                      <div
                        v-if="active"
                        class="display-3 flex-grow-1 text-center"
                      >
                        <v-img
                          src="https://conceptodefinicion.de/wp-content/uploads/2017/05/Invierno.jpg"
                          height="200"
                          width="425"
                          class="grey darken-4"
                          ><div class="display-3 flex-grow-1 text-center">
                            Invierno
                          </div></v-img
                        >
                      </div>
                    </v-scroll-y-transition>
                  </v-card></a
                >
              </v-item>
            </v-col>
            <v-col v-for="n in 1" :key="n" cols="6" md="3">
              <v-item v-slot="{ active, toggle }">
                <a @click="verano()"
                  ><v-card
                    :color="active ? 'primary' : ''"
                    class="d-flex align-center"
                    dark
                    height="200"
                    @click="toggle"
                  >
                    <div
                      v-if="!active"
                      class="display-3 flex-grow-1 text-center"
                    >
                      Verano
                    </div>

                    <v-scroll-y-transition>
                      <div
                        v-if="active"
                        class="display-3 flex-grow-1 text-center"
                      >
                        <v-img
                          src="https://e00-marca.uecdn.es/assets/multimedia/imagenes/2020/06/20/15926379712386.jpg"
                          height="200"
                          width="425"
                          class="grey darken-4"
                          ><div class="display-3 flex-grow-1 text-center">
                            Verano
                          </div></v-img
                        >
                      </div>
                    </v-scroll-y-transition>
                  </v-card></a
                >
              </v-item>
            </v-col>
            <v-col v-for="n in 1" :key="n" cols="6" md="3">
              <v-item v-slot="{ active, toggle }">
                <a @click="otoño()"
                  ><v-card
                    :color="active ? 'primary' : ''"
                    class="d-flex align-center"
                    dark
                    height="200"
                    @click="toggle"
                  >
                    <div
                      v-if="!active"
                      class="display-3 flex-grow-1 text-center"
                    >
                      Otoño
                    </div>

                    <v-scroll-y-transition>
                      <div
                        v-if="active"
                        class="display-3 flex-grow-1 text-center"
                      >
                        <v-img
                          src="https://www.65ymas.com/uploads/s1/18/96/82/bigstock-autumn-park-nature-colorful-t-307365547.jpeg"
                          height="200"
                          width="425"
                          class="grey darken-4"
                          ><div class="display-3 flex-grow-1 text-center">
                            Otoño
                          </div></v-img
                        >
                      </div>
                    </v-scroll-y-transition>
                  </v-card></a
                >
              </v-item>
            </v-col>
          </v-row>
        </v-container>
      </v-item-group>
      <v-expansion-panels v-model="panel" :readonly="readonly" multiple>
        <v-expansion-panel>
          <v-expansion-panel-header>Cultivo 1</v-expansion-panel-header>
          <v-expansion-panel-content>
            <div class="text--primary">
              <!-- Using the elevation prop -->

              <v-card class="mx-auto pa-6">
                Humedad del suelo
                <h3>{{ this.humidity }}</h3>
                <CircularGauge :value="this.humidity" :height="100" />
              </v-card>
              <div class="my-6"></div>
              <v-card class="mx-auto pa-6">
                CO2
                <h3>{{ this.co2 }}</h3>
              </v-card>
              <div class="my-6"></div>
              <v-card class="mx-auto pa-6">
                Radiación
                <h3>{{ this.radiation }}</h3>
              </v-card>
              <div class="my-6"></div>
              <v-row
                v-if="this.riegoset.riego === 'no'"
                align="center"
                justify="space-around"
              >
                <v-btn tile color="success">
                  <v-icon left> mdi-water </v-icon>
                  Regar
                </v-btn>
              </v-row>
            </div>
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel>
          <v-expansion-panel-header>Cultivo 2</v-expansion-panel-header>
          <v-expansion-panel-content>
            <div class="text--primary">
              <!-- Using the elevation prop -->

              <v-card class="mx-auto pa-6">
                Humedad del suelo
                <h3>{{ this.humidity }}</h3>
              </v-card>
              <div class="my-6"></div>
              <v-card class="mx-auto pa-6">
                CO2
                <h3>{{ this.co2 }}</h3>
              </v-card>
              <div class="my-6"></div>
              <v-card class="mx-auto pa-6">
                Radiación
                <h3>{{ this.radiation }}</h3>
              </v-card>
              <div class="my-6"></div>
              <v-row
                v-if="this.riegoset.riego === 'no'"
                align="center"
                justify="space-around"
              >
                <v-btn tile color="success">
                  <v-icon left> mdi-water </v-icon>
                  Regar
                </v-btn>
              </v-row>
            </div>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-app>
  </div>
</template>

<script>
import CircularGauge from "../components/CircularGauge";

export default {
  components: {
    CircularGauge,
  },
  data: () => ({
    panel: [0, 1],
    readonly: false,
    humedadsuelo: "",
    temperatura: "",
    radiacion: "",
    carbono: "",
    resultArray: [],
    resultradiation: [],
    resulHumidity: [],
    co2: "",
    radiation: "",
    humidity: "",
    riegoset: {
      riego: "",
    },
  }),

  methods: {
    primavera() {
      this.humedadsuelo = 30;
      this.temperatura = 50;
      this.radiacion = 20;
      this.carbono = 10;
    },
    otoño() {
      this.humedadsuelo = 30;
      this.temperatura = 50;
      this.radiacion = 20;
      this.carbono = 10;
    },
    invierno() {
      this.humedadsuelo = 30;
      this.temperatura = 50;
      this.radiacion = 20;
      this.carbono = 10;
    },
    verano() {
      this.humedadsuelo = 10;
      this.temperatura = 40;
      this.radiacion = 50;
      this.carbono = 20;
    },
    loadDataco2(node) {
      this.resource
        .getData({ node: node })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
          this.resultArray = [];
          for (let key in data) {
            const f = data[key].data;
            this.resultArray.push(f);
          }
          this.co2 = this.resultArray.pop();
        });
    },
    loadradiation(node) {
      this.resource
        .getData({ node: node })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
          this.resultradiation = [];
          for (let key in data) {
            const f = data[key].data;
            this.resultradiation.push(f);
          }
          this.radiation = this.resultradiation.pop();
        });
    },
    loadDHT(node) {
      let resultdht = [];
      this.resource
        .getData({ node: node })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
          resultdht = [];
          for (let key in data) {
            const f = data[key].data;
            resultdht.push(f);
          }
        });
    },
    loadDHTtemperature(node) {
      let resultdhtT = [];
      this.resource
        .getData({ node: node })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
          resultdhtT = [];
          for (let key in data) {
            const f = data[key].data;
            resultdhtT.push(f);
          }
        });
    },
    loadHumidity(node) {
      this.resource
        .getData({ node: node })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
          this.resultHumidity = [];
          for (let key in data) {
            const f = data[key].data;
            this.resultHumidity.push(f);
          }
          this.humidity = this.resultHumidity.pop();
          console.log(this.humidity);
        });
    },
    regar() {
      this.riegoset.riego = "no";
      if (
        parseFloat(this.humidity) >= parseFloat(this.humedadsuelo) &&
        parseFloat(this.co2) >= parseFloat(this.carbono) &&
        parseFloat(this.radiation) >= parseFloat(this.radiacion)
      )
        this.riegoset.riego = "yes";

      this.resource.putDatariego(this.riegoset);
    },
  },

  created() {
    const customAction = {
      getData: { method: "GET" },
      // putDataCO2: {method: "POST",url: "crop-1/CO2.json" },
      // putDataradiation: {method: "POST",url: "crop-1/radiation.json" },
      // putDatahumidity: {method: "POST",url: "crop-1/Humidity.json" },
      putDatariego: { method: "PATCH", url: "crop-1.json" },
    };

    this.resource = this.$resource("{node}.json", {}, customAction);
    this.loadDataco2("crop-1/CO2");
    this.loadHumidity("crop-1/Humidity");
    this.loadradiation("crop-1/Radiation");
    this.loadDHT("crop-1/DHT/Humidity");
    this.loadDHTtemperature("crop-1/DHT/Temperature");
    this.regar();
  },
};
</script>

<style>
</style>
