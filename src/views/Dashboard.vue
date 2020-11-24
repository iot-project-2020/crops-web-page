<template>
  <div>
    <!-- <line-chart v-if="loaded" :chartdata="chartdata" :options="options" /> -->
    <div class="container">
      <div class="row">
        <div class="col"><PieChart /></div>
        <div class="col"><AreaChart /></div>
      </div>
    </div>
    <hr>
    <div class="container">
      <div class="row">
        <div class="col"><BarChart /></div>
        <div class="col"><RadarChart /></div>
      </div>
    </div>
    <hr>
    <div class="container">
      <div class="row">
        <div class="col-sm"></div>
        <div class="col-sm"><LineChart /></div>
        <div class="col-sm"></div>
      </div>
    </div>
  </div>
</template>

<script>
import AreaChart from "../components/AreaChart.vue";
import PieChart from "../components/PieChart.vue";
import BarChart from "../components/BarChart.vue";
import RadarChart from "../components/RadarChart.vue";
import LineChart from "../components/LineChart.vue";

export default {
  name: "Dashboard",
  components: {
    AreaChart,
    PieChart,
    BarChart,
    RadarChart,
    LineChart,
  },
  data: () => ({
    chartData: {
      Books: 24,
      Magazine: 30,
      Newspapers: 10,
    },
  }),
};
</script>