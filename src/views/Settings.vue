<template>
  <div id="app">
    <v-app id="inspire">
      <v-item-group mandatory>
        <v-container>
          <v-row>
            <v-col
                v-for="n in 1"
                :key="n"
                cols="12"
                md="4"
            >
              <v-item v-slot="{ active, toggle }">
                <v-card
                    :color="active ? 'primary' : ''"
                    class="d-flex align-center"
                    dark
                    height="200"
                    @click="toggle"
                >
                  <v-scroll-y-transition>
                    <div
                        v-if="active"
                        class="display-3 flex-grow-1 text-center"
                    >
                      Primavera
                    </div>
                  </v-scroll-y-transition>
                </v-card>
              </v-item>
            </v-col>
            <v-col
                v-for="n in 1"
                :key="n"
                cols="12"
                md="4"
            >
              <v-item v-slot="{ active, toggle }">
                <v-card
                    :color="active ? 'primary' : ''"
                    class="d-flex align-center"
                    dark
                    height="200"
                    @click="toggle"
                >
                  <v-scroll-y-transition>
                    <div
                        v-if="active"
                        class="display-3 flex-grow-1 text-center"
                    >
                      Invierno
                    </div>
                  </v-scroll-y-transition>
                </v-card>
              </v-item>

            </v-col>
            <v-col
                v-for="n in 1"
                :key="n"
                cols="12"
                md="4"
            >
              <v-item v-slot="{ active, toggle }">
                <v-card
                    :color="active ? 'primary' : ''"
                    class="d-flex align-center"
                    dark
                    height="200"
                    @click="toggle"
                >
                  <v-scroll-y-transition>

                    <div
                        v-if="active"
                        class="display-3 flex-grow-1 text-center"
                    >

                      <v-img
                          src="https://www.hola.com/imagenes/en-forma/201703271199/como-ponerse-en-forma-en-un-mes-belleza/0-3-966/enforma-verano-z.jpg"
                          height="200"
                          class="grey darken-4"
                      >Verano</v-img>
                    </div>
                  </v-scroll-y-transition>
                </v-card>
              </v-item>
            </v-col>
          </v-row>
        </v-container>
      </v-item-group>


      <div class="text--primary">
        <!-- Using the elevation prop -->
        <v-hover>
          <template v-slot:default="{ hover }">
            <v-card
                :elevation="hover ? 24 : 6"
                class="mx-auto pa-6"
            >
              Humedad del suelo

            </v-card>
          </template>
        </v-hover>

        <div class="my-6"></div>
        <!-- Using a dynamic class -->
        <v-hover>
          <template v-slot:default="{ hover }">
            <div
                :class="`elevation-${hover ? 24 : 6}`"
                class="mx-auto pa-6 transition-swing"
            >
              Class based elevation
            </div>
          </template>
        </v-hover>
      </div>
    </v-app>
  </div>
</template>

<script>
export default {
  data:()=>({
    resultArray: [],
    resultradiation: [],
    resulHumidity: [],
    co2: '',
    radiation:'',
    humidity: '',
    // CO2:{
    //     data: '20',
    //     date:'25-11-2020',
    //     Hour:'20:50',
    // },
    //
    // radiationF:{
    //   data: '20',
    //   date:'25-11-2020',
    //   Hour:'20:50',
    // },
    // HumidityF:{
    //   data: '20',
    //   date:'25-11-2020',
    //   Hour:'20:50',
    // },
    riegoset:{
      riego: '',
    },

  }),

  methods: {
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
            this.resultradiation= [];
            for (let key in data) {
              const f = data[key];
              this.resultradiation.push(f);
            }
            this.radiation=this.resultradiation.pop();
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
            resultdht= [];
            for (let key in data) {
              const f = data[key].data;
              resultdht.push(f);
            }

            document.getElementById("dhtH").innerHTML = resultdht.pop();
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
            resultdhtT= [];
            for (let key in data) {
              const f = data[key].data;
              resultdhtT.push(f);
            }

            document.getElementById("dhtT").innerHTML = resultdhtT.pop();
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
            this.resultHumidity= [];
            for (let key in data) {
              const f = data[key].data;
              this.resultHumidity.push(f);
            }
            this.humidity=this.resultHumidity.pop();
          });

    },
    regar(){
      this.riegoset.riego="no"
      // this.resource.putDataCO2(this.CO2);
      // this.resource.putDataradiation(this.radiationF);
      // this.resource.putDatahumidity(this.HumidityF);
      if(parseFloat(this.humidity)>10)
        this.riegoset.riego="yes"

      this.resource.putDatariego(this.riegoset);
    }
  },

  created() {
    const customAction = {
      getData: { method: "GET" },
      // putDataCO2: {method: "POST",url: "crop-1/CO2.json" },
      // putDataradiation: {method: "POST",url: "crop-1/radiation.json" },
      // putDatahumidity: {method: "POST",url: "crop-1/Humidity.json" },
      putDatariego: {method: "PATCH",url: "crop-1.json" },
    };

    this.resource = this.$resource("{node}.json", {}, customAction);
    this.loadDataco2("crop-1/CO2");
    this.loadHumidity("crop-1/Humidity");
    this.loadradiation("crop-1/radiation");
    this.loadDHT("crop-1/DHT/Humidity");
    this.loadDHTtemperature("crop-1/DHT/Temperature");
    this.regar();


  },

};
</script>

<style>
</style>
