<script>
import { Bar } from "vue-chartjs";

export default {
  extends: Bar,
  props: ["labels", "datasets"],
  mounted() {
    this.render();
  },
  watch: {
    // data: function () {
    //   this.$data._chart.update();
    //   //this.renderChart(this.data, this.options);
    //   this.render();
    // },
    labels() {
      // console.log(to + from);
      this.render();
    },
    datasets() {
      // console.log(to + from);
      this.render();
    },
  },

  methods: {
    render() {
      this.renderChart(
        {
          labels: this.labels,
          datasets: [
            {
              label: "Data One",
              backgroundColor: "#f87979",
              data: this.datasets,
            },
          ],
        },
        { responsive: true, maintainAspectRatio: false }
      );
    },
  },
};
</script>
