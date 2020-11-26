<template>
  <div id="app">
    <v-app id="inspire">
      <div>
        <v-toolbar
          dark
          prominent
          src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
        >
          <v-toolbar-title>Proyecto IoT 2020-2</v-toolbar-title>
          <!-- <v-toolbar-items>
            <router-link to="/">Home</router-link>
          </v-toolbar-items> -->

          <v-spacer></v-spacer>
          <div id="nav">
            <router-link to="/">Home</router-link> |
            <router-link to="/crops/dashboard">Dashboard</router-link> |
            <router-link to="/crops/settings">Settings</router-link> |
            <router-link to="/about">About</router-link>
          </div>
        </v-toolbar>
      </div>
      <router-view />
    </v-app>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #a7deff;

    &.router-link-exact-active {
      color: #ffffff;
    }
  }
}
</style>
