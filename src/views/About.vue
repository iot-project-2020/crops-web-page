<template>
  <div class="about">
    <br />
    <v-card class="mx-auto" max-width="1500">
      <v-container fluid>
        <v-row dense>
          <v-col v-for="card in cards" :key="card.title" :cols="card.flex">
            <v-card :href="card.url">
              <v-img
                :src="card.src"
                class="white--text align-end"
                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                height="200px"
              >
                <v-card-title v-text="card.title"></v-card-title>
              </v-img>
              <v-card-subtitle>{{ card.subtitle }}</v-card-subtitle>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </div>
</template>

<script>
export default {
  data: () => ({
    cards: [
      {
        title: "Pre-fab homes",
        src: "https://cdn.vuetifyjs.com/images/cards/house.jpg",
        flex: 12,
        url: "",
        subtitle: "Fulano",
      },

      {
        title: "Favorite road trips",
        src: "https://cdn.vuetifyjs.com/images/cards/road.jpg",
        flex: 6,
        url: "",
        subtitle: "Fulano",
      },
      {
        title: "Best airlines",
        src: "https://cdn.vuetifyjs.com/images/cards/plane.jpg",
        flex: 6,
        url: "",
        subtitle: "Fulano",
      },
      {
        title: "GitHub",
        src:
          "https://logodownload.org/wp-content/uploads/2019/08/github-logo-2.png",
        flex: 12,
        url: "https://github.com/iot-project-2020",
        subtitle: "Fulano",
      },
       {
        title: "GitHub",
        src:
          "https://logodownload.org/wp-content/uploads/2019/08/github-logo-2.png",
        flex: 4,
        url: "https://github.com/iot-project-2020",
        subtitle: "Fulano",
      },
       {
        title: "Fulano",
        src:
          "https://logodownload.org/wp-content/uploads/2019/08/github-logo-2.png",
        flex: 4,
        url: "https://github.com/iot-project-2020",
        subtitle: "Fulano",
      },
       {
        title: "GitHub",
        src:
          "https://logodownload.org/wp-content/uploads/2019/08/github-logo-2.png",
        flex: 4,
        url: "https://github.com/iot-project-2020",
        subtitle: "Fulano",
      },
    ],
  }),
  methods: {
    ale(url) {
      console.log(url);
      alert("as");
    },
  },
};
</script>

<style>
</style>