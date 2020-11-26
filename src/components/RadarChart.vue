<script>
import { Radar } from "vue-chartjs";

export default {
  data: () => ({}),
  props: ["labels", "datasets"],
  extends: Radar,

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
              label: "My First dataset",
              backgroundColor: "rgba(179,181,198,0.2)",
              borderColor: "rgba(179,181,198,1)",
              pointBackgroundColor: "rgba(179,181,198,1)",
              pointBorderColor: "#fff",
              pointHoverBackgroundColor: "#fff",
              pointHoverBorderColor: "rgba(179,181,198,1)",
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