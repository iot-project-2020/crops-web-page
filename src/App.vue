<template>
  <div id="app">
    <v-app id="inspire">
      <div>
        <v-navigation-drawer v-model="sidebar" app>
          <v-list>
            <v-list-item
              v-for="item in menuItems"
              :key="item.title"
              :to="item.path"
            >
              <v-list-item-action>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-action>
              <v-list-item-content>{{ item.title }}</v-list-item-content>
            </v-list-item>
          </v-list>
        </v-navigation-drawer>
        <v-app-bar
          app
          dark
          src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
        >
          <span class="hidden-sm-and-up">
            <v-app-bar-nav-icon
              @click.stop="sidebar = !drawer"
            ></v-app-bar-nav-icon>
          </span>
          <v-toolbar-title></v-toolbar-title>
          <v-toolbar-title>
            <router-link to="/" tag="span" style="cursor: pointer">
              {{ appTitle }}
            </router-link>
          </v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items class="hidden-xs-only">
            <v-btn v-for="item in menuItems" :key="item.title" :to="item.path">
              <v-icon left dark>{{ item.icon }}</v-icon>
              {{ item.title }}
            </v-btn>
          </v-toolbar-items>
        </v-app-bar>
      </div>
      <br /><br />
      <router-view />
      <v-footer dark padless>
        <v-card flat tile class="indigo lighten-1 white--text text-center">
          <v-card-text>
            <v-btn
              v-for="icon in icons"
              :key="icon"
              class="mx-4 white--text"
              icon
            >
              <v-icon size="24px">
                {{ icon }}
              </v-icon>
            </v-btn>
          </v-card-text>

          <v-card-text class="white--text pt-0">
            Este proyecto propone un invernadero inteligente que pueda
            encargarse de la distribución de agua, fertilizantes y proteger a
            las plantas en el momento adecuado, solamente con una programación
            atractiva y de fácil uso para que el usuario tenga la mínima
            necesidad de cuidar sus plantas y se pueda dedicar más tiempo a su
            rutina de trabajo y actividades extracurriculares. También de lograr
            salvar la mayor cantidad de plantas de las amenazas naturales.
          </v-card-text>

          <v-divider></v-divider>

          <v-card-text class="white--text">
            {{ new Date().getFullYear() }} — <strong>PLant Fire</strong>
          </v-card-text>
        </v-card>
      </v-footer>
    </v-app>
  </div>
</template>
<script>
export default {
  data: () => ({
    appTitle: "Plant Fire",
    sidebar: false,
    menuItems: [
      { title: "Home", path: "/", icon: "" },
      { title: "Dashboard", path: "/crops/dashboard", icon: "" },
      { title: "Settings", path: "/crops/settings", icon: "" },
      { title: "About", path: "/about", icon: "" },
    ],
    icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
  }),
};
</script>

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
