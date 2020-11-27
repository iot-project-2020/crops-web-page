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
    <!-- <CircularGauge :value="30" :height="100" /> -->
    <v-card class="mx-auto" max-width="1500">
      <v-container fluid>
        <v-row dense>
          <v-col v-for="card in cards" :key="card.title" :cols="card.flex">
            <v-card>
              <v-img
                :src="card.src"
                class="white--text align-end"
                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                height="200px"
              >
                <v-card-title v-text="card.title"></v-card-title>
              </v-img>
              <v-card-text v-text="card.text"></v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </div>
</template>

<script>
// import CircularGauge from "../components/CircularGauge";
export default {
  components: {
    // CircularGauge,
  },
  data: () => ({
    model: 1,
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
    cards: [
      {
        title: "Introducción",
        src: "https://cdn.vuetifyjs.com/images/cards/house.jpg",
        text:
          "La cantidad de agua que utilizan las plantas depende del clima, del contenido de agua en el suelo y la especie cultivada. La determinación y el monitoreo de la humedad del suelo es primordial para resolver problemas vinculados a las necesidades de riego de los cultivos. La programación del riego debe responder a dos preguntas básicas: ¿Cuándo regar? y ¿Cuánto regar?. La respuesta a la primera pregunta es el intervalo de riegos y tiene la finalidad de optimizar la producción, conservar el agua, minimizar impactos ambientales y ahorrar dinero. La segunda respuesta debe estar orientada a igualar los requerimientos de agua del cultivo y realizar los aportes en cantidades suficientes, buscando evitar: pérdidas excesivas por percolación, incrementos en consumo de energía, costos del agua, y el lavado de los fertilizantes de la zona radicular.",
        flex: 12,
      },
      {
        title: "Capacidad del suelo para almacenar agua",
        src:
          "https://storage.googleapis.com/portalfruticola/2018/08/66d9be74-determinacion-del-contenido-de-humedad-2400.jpg",
        text:
          "Los suelos poseen diferente capacidad para almacenar agua dependiendo de su textura y estructura. El límite superior de almacenamiento de agua se denomina capacidad de campo (CC), mientras que el límite inferior se denomina punto de marchitamiento permanente (PMP). La CC es el contenido de agua en el suelo, después de una lluvia intensa o la aplicación de un riego pesado, cuando la velocidad del drenaje cambia de rápida a lenta.",
        flex: 5,
      },
      {
        title: "Medición del agua en el suelo, ¿Cuándo regar?",
        src: "https://img.interempresas.net/fotos/1856567.jpeg",
        text:
          "Para optimizar el consumo de agua y conseguir mejores rendimientos, es necesario hacer mediciones de la humedad del suelo en tiempo real. Al contar con la información necesaria se pueden regular las cantidades de agua a aplicar y paralelamente se pueden dosificar insumos agrícolas vía riego, lo que permitirá un ahorro económico. Existen diferentes técnicas para determinar el estado de humedad del suelo basadas en la utilización de sensores de humedad. En función de la manera de indicar el contenido de agua en el suelo hay dos tipos de sensores; los que miden la tensión o succión a la que esta retenida el agua en el suelo, y los que miden el contenido total de humedad en el suelo, expresado en porcentaje volumétrico.",
        flex: 7,
      },
    ],
  }),
};
</script>
