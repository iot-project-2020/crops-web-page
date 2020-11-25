<script>
import { Radar } from "vue-chartjs";

export default {
  data: () => ({

  }),
  props:["labels", "datasets"],
  extends: Radar,
  mounted() {
    this.renderChart(
      {
        labels: this.labels,
        datasets: this.datasets,
      },
      { responsive: true, maintainAspectRatio: false }
    );
  },
};
</script>