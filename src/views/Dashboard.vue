<template>
  <div>
    <div class="dashboard">
      <h1>Dashboard</h1>
    </div>
    <hr />

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
              <LineChart :labels="labelsMonths" :datasets="datasetsLine" />
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
          <v-col :cols="6">
            <v-card>
              <BarChart :labels="labelsMonths" :datasets="datasetsBar" />
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
          <v-col :cols="6">
            <v-card>
              <PieChart :labelChart="labelsPie" :dataChart="dataPie" />
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

          <v-col :cols="12">
            <v-card>
              <RadarChart :labels="labelsRadar" :datasets="dataRadar" />
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

          <v-col :cols="12">
            <v-card>
              <!-- <AreaChart
            :labels="labelsArea"
            :datasets="dataArea"
            :gradient="gradient"
            :gradient2="gradient2"
          /> -->
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
    numberData: [2, 10, 5, 9, 0, 6, 15],
    chartData: {
      Books: 24,
      Magazine: 30,
      Newspapers: 10,
    },
    gradient: null,
    gradient2: null,
    dataPie: [1, 2, 3],
    labelsPie: ["Fulano1", "Fulano2", "Fulano3"],
    labelsRadar: [
      "Eating",
      "Drinking",
      "Sleeping",
      "Designing",
      "Coding",
      "Cycling",
      "Running",
    ],
    dataRadar: [
      {
        label: "My First dataset",
        backgroundColor: "rgba(179,181,198,0.2)",
        borderColor: "rgba(179,181,198,1)",
        pointBackgroundColor: "rgba(179,181,198,1)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgba(179,181,198,1)",
        data: [65, 59, 90, 81, 56, 55, 40],
      },
      {
        label: "My Second dataset",
        backgroundColor: "rgba(255,99,132,0.2)",
        borderColor: "rgba(255,99,132,1)",
        pointBackgroundColor: "rgba(255,99,132,1)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgba(255,99,132,1)",
        data: [28, 48, 40, 19, 96, 27, 100],
      },
    ],
    labelsMonths: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    datasetsBar: [
      {
        label: "Data One",
        backgroundColor: "#f87979",
        data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11],
      },
    ],
    datasetsLine: [10.0, 20.0],
  }),
  methods: {
    loadData(node) {
      this.resource
        .getData({ node: node })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          // console.log(data);
          const resultArray = [];
          for (let key in data) {
            console.log(data[key]);
            const f = parseFloat(data[key]["data"]);
            resultArray.push(f);
            // this.datasetsLine.push(f);
          }
          console.log(resultArray);
          this.datasetsLine = resultArray;
        });

      //   for (var i in resultArray) {
      //     console.log(i + "");
      //     this.datasetsLine.push(i);
      //   }
      //   this.numberData = resultArray;
      //   console.log(this.numberData);
      //   this.datasetsLine[0].data = this.numberData;
    },
    fetchData() {
      let dat = db.ref("crop-1/CO2/");
      let self = this;
      dat.on("value", function (snapshot) {
        let returnArr = [];
        snapshot.forEach(function (childSnapshot) {
          returnArr.push(childSnapshot.val());
          // Fill the local data property with Firebase data
          self.lists = returnArr;
          console.log(returnArr);
        });
      });
      return self;
    },
  },
  // firebase: {
  //   items: this.fetchData(),
  // },
  created() {
    // const customAction = {
    //   getData: { method: "GET" },
    // };
    // this.resource = this.$resource("{node}.json", {}, customAction);
    // this.loadData("crop-1/CO2/");
  },
  mounted() {},
  beforeUpdate() {},
  serverPrefetch() {},
};
</script>


<style scoped>
</style>