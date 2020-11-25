<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Plantitas</h1>
        <hr />

        <ul class="list-group">
          <h2>CO2</h2>
          <p id="demo"></p>
          <h2>Radiation</h2>
          <p id="radiation"></p>
          <h2>Humedad tierra</h2>
          <p id="Humidity"></p>
          <h2>Humedad del aire</h2>
          <p id="dhtH"></p>
          <h2>Temperatura del aire</h2>
          <p id="dhtT"></p>
        </ul>

      </div>
    </div>
  </div>
</template>

<script>
export default {

  methods: {
    loadDataco2(node) {
      let resultArray = [];
      this.resource
          .getData({ node: node })
          .then((response) => {
            return response.json();
          })
          .then((data) => {
              console.log(data);
            resultArray = [];
            for (let key in data) {
              const f = data[key];
              resultArray.push(f);
            }

            document.getElementById("demo").innerHTML = resultArray.pop();
          });

    },
    loadradiation(node) {
      let resultradiation = [];
      this.resource
          .getData({ node: node })
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            console.log(data);
            resultradiation= [];
            for (let key in data) {
              const f = data[key];
              resultradiation.push(f);
            }

            document.getElementById("radiation").innerHTML = resultradiation.pop();
          });

    },
    loadDHT(node) {
      let resultdht = [];
      this.resource
          .getData({ node: node })
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            console.log(data);
            resultdht= [];
            for (let key in data) {
              const f = data[key];
              resultdht.push(f);
            }

            document.getElementById("dhtH").innerHTML = resultdht.pop();
          });

    },
    loadDHTtemperature(node) {
      let resultdhtT = [];
      this.resource
          .getData({ node: node })
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            console.log(data);
            resultdhtT= [];
            for (let key in data) {
              const f = data[key];
              resultdhtT.push(f);
            }

            document.getElementById("dhtT").innerHTML = resultdhtT.pop();
          });

    },
    loadHumidity(node) {
      let resultHumidity = [];
      this.resource
          .getData({ node: node })
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            console.log(data);
            resultHumidity= [];
            for (let key in data) {
              const f = data[key];
              resultHumidity.push(f);
            }

            document.getElementById("Humidity").innerHTML = resultHumidity.pop();
          });

    },
  },

  created() {
    const customAction = {
      getData: { method: "GET" },
    };
    this.resource = this.$resource("{node}.json", {}, customAction);
    this.loadDataco2("crop-2/CO2");
    this.loadHumidity("crop-2/Humidity");
    this.loadradiation("crop-2/radiation");
    this.loadDHT("crop-2/DHT/Humidity");
    this.loadDHTtemperature("crop-2/DHT/Temperature");
  },

};
</script>

<style>
</style>
