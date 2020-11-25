<template>
  <div>
    <!-- <line-chart v-if="loaded" :chartdata="chartdata" :options="options" /> -->
    <div class="container">
      <div class="row">
        <div class="col">
          <PieChart :labelChart="labelsPie" :dataChart="dataPie" />
        </div>
        <div class="col">
          <LineChart :labels="labelsMonths" :datasets="datasetsLine" />
        </div>
      </div>
    </div>
    <hr />
    <div class="container">
      <div class="row">
        <div class="col">
          <BarChart :labels="labelsMonths" :datasets="datasetsBar" />
        </div>
        <div class="col">
          <RadarChart :labels="labelsRadar" :datasets="dataRadar" />
        </div>
      </div>
    </div>
    <hr />
    <div class="container">
      <div class="row">
        <div class="col-sm"></div>
        <div class="col-sm">
          <!-- <AreaChart
            :labels="labelsArea"
            :datasets="dataArea"
            :gradient="gradient"
            :gradient2="gradient2"
          /> -->
        </div>
        <div class="col-sm"></div>
      </div>
    </div>
  </div>
</template>

<script>
// import AreaChart from "../components/AreaChart.vue";
import PieChart from "../components/PieChart.vue";
import BarChart from "../components/BarChart.vue";
import RadarChart from "../components/RadarChart.vue";
import LineChart from "../components/LineChart.vue";

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
      let resultArray = [];
      this.resource
        .getData({ node: node })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          //   console.log(data);
          resultArray = [];
          for (let key in data) {
            const f = parseFloat(data[key].slice(0, -1));
            resultArray.push(f);
            this.datasetsLine.push(f);
          }
          console.log(this.datasetsLine);
        });

      //   for (var i in resultArray) {
      //     console.log(i + "");
      //     this.datasetsLine.push(i);
      //   }
      //   this.numberData = resultArray;
      //   console.log(this.numberData);
      //   this.datasetsLine[0].data = this.numberData;
    },
  },

  created() {
    const customAction = {
      getData: { method: "GET" },
    };
    this.resource = this.$resource("{node}.json", {}, customAction);
    this.loadData("crop-2/Humidity");
  },
};
</script>