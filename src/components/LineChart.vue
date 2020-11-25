<script>
import { Line } from "vue-chartjs";

export default {
  extends: Line,
  props: ["labels", "datasets"],
  mounted() {
    this.renderLineChart();
  },
  watch: {
    data: function () {
      this.$data._chart.update();
      //this.renderChart(this.data, this.options);
      this.renderLineChart();
    },
  },
  methods: {
    renderLineChart() {
      this.renderChart(
        {
          labels: this.labels,
          datasets: [
            {
              label: "Data 1",
              data: this.datasets,
              backgroundColor: "transparent",
              borderColor: "rgba(1, 116, 188, 0.50)",
              pointBackgroundColor: "rgba(171, 71, 188, 1)",
            },
          ],
        },
        {
          responsive: true,
          maintainAspectRatio: false,
          title: {
            display: true,
            text: "My Data",
          },
        }
      );
    },
  },
};
</script>