<script>
import { Line } from "vue-chartjs";

export default {
  extends: Line,
  props: ["labels", "datasets", "title"],
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
            text: this.title,
          },
        }
      );
    },
  },
};
</script>