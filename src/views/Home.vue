<template>
  <div>
    <v-carousel
      cycle
      v-model="model"
      hide-delimiter-background
      show-arrows-on-hover
    >
      <v-carousel-item v-for="(item, i) in items" :key="i" :src="item.src">
        <v-row class="fill-height" align="center" justify="center">
          <div class="display-3">{{ item.text }}</div>
        </v-row>
      </v-carousel-item>
    </v-carousel>
    <CircularGauge :value="30" :height="100" />
  </div>
</template>

<script>
import CircularGauge from "../components/CircularGauge";
export default {
  components: {
    CircularGauge,
  },
  data: () => ({
    model: 0,
    items: [
      {
        src:
          "https://everyone.plos.org/wp-content/uploads/sites/5/legacy-featured-images/fc-rice-16x9.jpg",
        text: "Control de Aire",
      },
      {
        src:
          "https://www.isaaa.org/kc/cropbiotechupdate/files/images/2019-07-31-cornfield.jpg",
        text: "Cultivos frescos",
      },
      {
        src:
          "https://www.isaaa.org/kc/cropbiotechupdate/files/images/182020120350AM.jpg",
        text: "Productos saludables",
      },
      {
        src:
          "https://www.esa.int/var/esa/storage/images/esa_multimedia/images/2020/08/satellites_provide_data_on_crops/22165901-1-eng-GB/Satellites_provide_data_on_crops_pillars.jpg",
        text: "No pierdas tu cosecha ;D",
      },
    ],
    colors: ["primary", "secondary", "yellow darken-2", "red", "orange"],
  }),
};
</script>
