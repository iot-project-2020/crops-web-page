<template>
  <div>
    <br /><br />
    <div class="dashboard">
      <h1>Dashboard</h1>
    </div>
    <hr />

    <v-expansion-panels v-model="panel" :readonly="readonly" multiple>
      <v-expansion-panel v-for="(firedata, i) in firedatas" :key="i">
        <v-expansion-panel-header>Cultivo {{ i + 1 }}</v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-card
            class="mx-auto"
            outlined
            shaped
            elevation="13"
            max-width="1000"
            align="center"
          >
            <v-container fluid>
              <v-row dense>
                <v-col :cols="12">
                  <v-card>
                    <LineChart
                      :labels="firedata.CO2Label"
                      :datasets="firedata.CO2Data"
                      :title="'Grafico de Calidad de aire'"
                    />
                    <v-card-title
                      v-text="'Grafico de Calidad de aire'"
                    ></v-card-title>
                    <v-card-text>
                      El eje de las abscisas muestra el tiempo en que se tomo
                      los datos y el eje de las ordenadas muetra el porcentaje
                      de la calidad de aire
                    </v-card-text>
                  </v-card>
                </v-col>
                <v-col :cols="6">
                  <v-card>
                    <BarChart
                      :labels="firedata.RadiationLabel"
                      :datasets="firedata.RadiationData"
                    />
                    <v-card-title
                      v-text="'Grafico de Radiacion mensual'"
                    ></v-card-title>
                    <v-card-text>
                      El eje de las abscisas muestra los meses del año y el eje
                      de las ordenadas muetra el porcentaje de radiacion
                    </v-card-text>
                  </v-card>
                </v-col>
                <v-col :cols="6">
                  <v-card>
                    <PieChart :labelChart="labelsPie" :dataChart="dataPie" />
                    <v-card-title
                      v-text="'Grafico de resumen de cultivos'"
                    ></v-card-title>
                    <v-card-text>
                      EL grafico presenta un resumen de los cultivos. Si estos
                      fueron exitosos, se perdieron o simplemente son normales
                    </v-card-text>
                  </v-card>
                </v-col>

                <v-col :cols="12">
                  <v-card>
                    <RadarChart
                      :labels="firedata.RadiationLabel"
                      :datasets="firedata.RadiationData"
                    />
                    <v-card-title v-text="'Grafico CO2'"></v-card-title>
                    <!-- <v-card-text>
                      El eje de las abscisas muestra los meses del año y el eje
                      de las ordenadas muetra el porcentaje de radiacion
                    </v-card-text> -->
                  </v-card>
                </v-col>
              </v-row>
            </v-container>
          </v-card>
        </v-expansion-panel-content>
      </v-expansion-panel>
      <!-- <v-expansion-panel>
        <v-expansion-panel-header>Cultivo 1</v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-card
            class="mx-auto"
            outlined
            shaped
            elevation="13"
            max-width="1000"
            align="center"
          >
            <v-container fluid>
              <v-row dense>
                <v-col :cols="12">
                  <v-card>
                    <LineChart
                      :labels="labelsMonths"
                      :datasets="datasetsLine"
                      :title="'Grafico de Calidad de aire'"
                    />
                    <v-card-title
                      v-text="'Grafico de Calidad de aire'"
                    ></v-card-title>
                    <v-card-text>
                      El eje de las abscisas muestra el tiempo en que se tomo
                      los datos y el eje de las ordenadas muetra el porcentaje
                      de la calidad de aire
                    </v-card-text>
                  </v-card>
                </v-col>
                <v-col :cols="6">
                  <v-card>
                    <BarChart :labels="labelsMonths" :datasets="datasetsBar" />
                    <v-card-title
                      v-text="'Grafico de Radiacion mensual'"
                    ></v-card-title>
                    <v-card-text>
                      El eje de las abscisas muestra los meses del año y el eje
                      de las ordenadas muetra el porcentaje de radiacion
                    </v-card-text>
                  </v-card>
                </v-col>
                <v-col :cols="6">
                  <v-card>
                    <PieChart :labelChart="labelsPie" :dataChart="dataPie" />
                    <v-card-title
                      v-text="'Grafico de resumen de cultivos'"
                    ></v-card-title>
                    <v-card-text>
                      EL grafico presenta un resumen de los cultivos. Si estos
                      fueron exitosos, se perdieron o simplemente son normales
                    </v-card-text>
                  </v-card>
                </v-col>

                <v-col :cols="12">
                  <v-card>
                    <RadarChart :labels="labelsRadar" :datasets="dataRadar" />
                    <v-card-title v-text="'Grafico de Algo'"></v-card-title>
                    <v-card-text>
                      El eje de las abscisas muestra los meses del año y el eje
                      de las ordenadas muetra el porcentaje de radiacion
                    </v-card-text>
                  </v-card>
                </v-col>

                <v-col :cols="12">
                  <v-card>
                    <AreaChart
            :labels="labelsArea"
            :datasets="dataArea"
            :gradient="gradient"
            :gradient2="gradient2"
          />
                    <v-card-title v-text="'Grafico de Algo'"></v-card-title>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn icon>
                        <v-icon>mdi-cached</v-icon>
                      </v-btn>

                      <v-btn icon>
                        <v-icon>mdi-bookmark</v-icon>
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-col>
              </v-row>
            </v-container>
          </v-card>
        </v-expansion-panel-content>
      </v-expansion-panel> -->
    </v-expansion-panels>
  </div>
</template>

<script>
// import AreaChart from "../components/AreaChart.vue";
import PieChart from "../components/PieChart.vue";
import BarChart from "../components/BarChart.vue";
import RadarChart from "../components/RadarChart.vue";
import LineChart from "../components/LineChart.vue";
import { db } from "../firebase";

export default {
  name: "Dashboard",
  components: {
    // AreaChart,
    PieChart,
    BarChart,
    RadarChart,
    LineChart,
  },
  data: () => ({
    panel: [0, 1],
    readonly: false,
    firedatas: [],
    cropsNumber: 0,
    auxFiredata: -1,
    gradient: null,
    gradient2: null,
    dataPie: [3, 6, 13],
    labelsPie: ["Perdidos", "Estable", "Exitosos"],
    labelsRadar: [
      "Eating",
      "Drinking",
      "Sleeping",
      "Designing",
      "Coding",
      "Cycling",
      "Running",
    ],

    labelsMonths: ["January", "February", "March", "April", "May", "June"],
    datasetsBar: [
      {
        label: "Data One",
        backgroundColor: "#f87979",
        data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11],
      },
    ],
  }),
  beforeCreate() {
    this.cropsNumber = 0;
  },
  beforeMount() {
    this.numberOfCrops();
  },
  // async mounted() {
  //   await this.fetchData();
  // },
  created() {
    // db.ref().off("child_added");
  },
  methods: {
    updateNumberCrops(snapshot) {
      this.cropsNumber++;
      console.log(snapshot.key);
      // snapshot.forEach(function (data) {
      //   console.log("The " + data.key);
      // });
    },
    numberOfCrops() {
      db.ref().once("value", (snap) => {
        var totalRecord = snap.numChildren();
        // snap.forEach(function (data) {
        //   console.log("The " + data.key);
        // });
        console.log("Total Crops : " + totalRecord);
        this.numberOfCrops = totalRecord;
        this.fetchData(snap);
      });
    },
    fetchData(snap) {
      for (var i = 0; i < snap.numChildren(); i++) {
        var arr = {
          name: snap.key,
          CO2Data: [32, 35, 45, 34],
          CO2Label: ["01:37:46", "01:43:46", "01:50:46", "01:70:46"],
          HumidityData: [],
          HumidityLabel: [],
          RadiationData: [50, 60, 54, 65, 56, 56, 76, 76, 54, 65, 76, 55],
          RadiationLabel: [
            "Enero",
            "Febrero",
            "Marzo",
            "Abril",
            "Mayo",
            "Junio",
            "Julio",
            "Agosto",
            "Septiembre",
            "Octubre",
            "Noviembre",
            "Diciembre",
          ],
        };
        this.firedatas.push(arr);
        db.ref("crop-" + (i + 1) + "/CO2").on("child_added", this.loadCO21);
        // db.ref("crop-" + (i + 1) + "/Radiation").on(
        //   "child_added",
        //   this.loadRadiation
        // );
      }

      // db.ref("crop-1/CO2").on("child_added", this.loadCO2);
      // .orderByChild("height")
      // db.ref("crop-1/CO2/")
      //   .limitToLast(1)
      //   .on("child_changed", function (data) {
      //     console.log("Se cambio" + data);
      //   });
    },
    loadRadiation(snapshot) {
      const item = snapshot.val();
      const moment = require("moment");
      for (var key in item) {
        // console.log(key);
        if (key === "data") {
          this.firedatas[0].RadiationData.push(snapshot.val()[key]);
          this.firedatas[1].RadiationData.push(snapshot.val()[key]);
        }
        if (key === "date") {
          var dateString = moment
            .unix(snapshot.val()[key])
            // .format("DD-MM-YYYY hh:mm:ss");
            .format("DD-MM");
          this.firedatas[0].RadiationLabel.push(dateString);
          this.firedatas[1].RadiationLabel.push(dateString);
        }
      }
      // console.log(arr.toString() + "qwew");
      // this.firedatas.push(arr);
    },
    loadCO21(snapshot) {
      // console.log("Se agrego un dato a COH2");

      const item = snapshot.val();
      const moment = require("moment");
      for (var key in item) {
        // console.log(key);
        if (key === "data") {
          this.firedatas[0].CO2Data.push(snapshot.val()[key]);
        }
        if (key === "date") {
          var dateString = moment
            .unix(snapshot.val()[key])
            // .format("DD-MM-YYYY hh:mm:ss");
            .format("hh:mm:ss");
          this.firedatas[0].CO2Label.push(dateString);
        }
      }
      // console.log(arr.toString() + "qwew");
      // this.firedatas.push(arr);
    },
    loadData(snapshot) {
      console.log("Se agrego un dato");
      // console.log(snapshot);
      const item = snapshot.val();
      const moment = require("moment");
      for (var key in item) {
        // console.log(key);
        if (key === "data") {
          // console.log(snapshot.val()[key]);
          this.datasetsLine.push(snapshot.val()[key]);
          // this.loadData(snapshot.val()[key]);
        }
        if (key === "date") {
          var dateString = moment
            .unix(snapshot.val()[key])
            // .format("DD-MM-YYYY hh:mm:ss");
            .format("hh:mm:ss");
          this.labelsMonths.push(dateString);
        }
      }
      // console.log(this.datasetsLine);
      // console.log(this.labelsMonths);
    },
  },
};
</script>

<style scoped></style>
