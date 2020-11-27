<template>
  <div class="about">
    <br />
    <v-card class="mx-auto" max-width="1500">
      <v-container fluid>
        <v-row dense>
          <v-col v-for="(user, i) in users" :key="i" :cols="user.flex">
            <v-card :href="user.url">
              <v-avatar color="accent" rounded size="190">
                <span class="white--text headline">{{ user.name }}</span>
              </v-avatar>
              <v-card-title v-text="user.fullname"></v-card-title>
            </v-card>
          </v-col>
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
          <v-col :cols="8">
            <v-card>
              <v-carousel hide-delimiters>
                <v-carousel-item
                  v-for="(item, i) in items"
                  :key="i"
                  :src="item.src"
                ></v-carousel-item>
              </v-carousel>
            </v-card>
          </v-col>
          <!-- <v-col :cols="6">
            <v-card :href="card.url">
              <vue-core-video-player
                @play="your_method"
                src="https://drive.google.com/file/d/1Up7v7LAhA-RRMxcwqkPwYAyIZ-98rsbd/view"
              ></vue-core-video-player>
            </v-card>
          </v-col> -->
        </v-row>
      </v-container>
    </v-card>
  </div>
</template>

<script>
export default {
  components: {},
  data: () => ({
    users: [
      {
        name: "DT",
        fullname: "Daniel Tarqui",
        flex: 4,
        url: "https://github.com/iot-project-2020",
        subtitle: "Fulano",
      },
      {
        name: "JM",
        fullname: "Jonas Maidana",
        flex: 4,
        url: "https://github.com/iot-project-2020",
        subtitle: "Fulano",
      },
      {
        name: "ST",
        fullname: "Sergio Troche",
        flex: 4,
        url: "https://github.com/iot-project-2020",
        subtitle: "Fulano",
      },
    ],
    cards: [
      {
        title: "GitHub",
        src:
          "https://logodownload.org/wp-content/uploads/2019/08/github-logo-2.png",
        flex: 12,
        url: "https://github.com/iot-project-2020",
        subtitle:
          "Nuestro repositorio donde almacenamos el codigo de esta pagina y los nodos para el sistema de riego inteligente se almacena aqui ",
      },

      {
        title: "Perfil del Proyecto",
        src:
          "https://img.etimg.com/thumb/height-480,width-640,imgsize-53190,msid-67959578/google-docs.jpg",
        flex: 4,
        url:
          "https://drive.google.com/file/d/1JEjq-S9Gk-JJdBaY6Hw6dpPOVC_34t4g/view?usp=sharing",
        subtitle:
          "Puedes ver el perfil del proyecto haciendo click en esta imagen",
      },
      // {
      //   title: "Circuito",
      //   src:
      //     "https://d2slcw3kip6qmk.cloudfront.net/marketing/pages/chart/examples/circuit-slide.png",
      //   flex: 6,
      //   url: "",
      //   subtitle: "Fulano",
      // },
      // {
      //   title: "Pre-fab homes",
      //   src: "https://cdn.vuetifyjs.com/images/cards/house.jpg",
      //   flex: 12,
      //   url: "",
      //   subtitle: "Fulano",
      // },
    ],
    items: [
      { src: require("../assets/circuito.jpeg") },
      { src: require("../assets/circuito_completo.jpg") },
      { src: require("../assets/circuito_1.jpg") },
      { src: require("../assets/circuito_2.jpg") },
      { src: require("../assets/circuito_3.jpg") },
      { src: require("../assets/circuito_4.jpg") },
      { src: require("../assets/circuito_5.jpg") },
    ],
  }),
  methods: {},
};
</script>

<style>
</style>