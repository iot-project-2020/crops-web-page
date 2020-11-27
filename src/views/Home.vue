<template>
  <div>
    <v-carousel v-model="model">
      <v-carousel-item
        v-for="(item, i) in items"
        :key="i"
        :src="item.src"
        reverse-transition="fade-transition"
        transition="fade-transition"
      ></v-carousel-item>
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
        src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg",
      },
      {
        src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg",
      },
      {
        src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg",
      },
      {
        src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
      },
    ],
    colors: ["primary", "secondary", "yellow darken-2", "red", "orange"],
  }),
};
</script>
