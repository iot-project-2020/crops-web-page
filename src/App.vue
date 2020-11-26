<template>
  <div id="app">
    <v-app id="inspire">
      <div>
        <v-navigation-drawer v-model="sidebar" app>
          <v-list>
            <v-list-item v-for="item in menuItems" :key="item.title" :to="item.path">
              <v-list-item-action>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-action>
              <v-list-item-content>{{ item.title }}</v-list-item-content>
            </v-list-item>
          </v-list>
        </v-navigation-drawer>
        <v-app-bar app dark src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg">
          <span class="hidden-sm-and-up">
            <v-app-bar-nav-icon @click.stop="sidebar = !drawer"></v-app-bar-nav-icon>
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
      <router-view />
    </v-app>
  </div>
</template>
<script>
export default {
  data: () => ({
    appTitle: "Proyecto IoT 2020-2",
    sidebar: false,
    menuItems: [
      { title: "Home", path: "/", icon: "" },
      { title: "Dashboard", path: "/crops/dashboard", icon: "" },
      { title: "Settings", path: "/crops/settings", icon: "" },
      { title: "About", path: "/about", icon: "" },
    ],
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
