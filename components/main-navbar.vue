<template lang="html">
  <nav>
    <v-app-bar hide-on-scroll app flat clipped-left height="56px">
      <v-app-bar-nav-icon @click="drawerIsOpen = !drawerIsOpen" />
      <v-app-bar-title class="d-none d-sm-flex text-no-wrap">
        <span class="text-no-wrap">Workout Assistant</span>
      </v-app-bar-title>
      <v-spacer />
      <v-text-field
        outlined
        placeholder="Search Exercises"
        rounded
        prepend-inner-icon="mdi-magnify"
        clearable
        dense
        height="32px"
        class="d-none d-md-flex mt-6"
      />
      <v-spacer />
      <div v-if="!user">
        <v-menu
          :close-on-content-click="loginOpen"
          max-width="400px"
          nudge-bottom="46px"
        >
          <template #activator="{ on, attrs }">
            <v-btn elevation="0" v-bind="attrs" v-on="on">
              Login
            </v-btn>
          </template>
          <v-list>
            <login-popup />
          </v-list>
        </v-menu>
        <v-menu
          :close-on-content-click="loginOpen"
          max-width="400px"
          nudge-bottom="46px"
        >
          <template #activator="{ on, attrs }">
            <v-btn elevation="0" v-bind="attrs" v-on="on">
              Sign-Up
            </v-btn>
          </template>
          <v-list>
            <sign-up-popup />
          </v-list>
        </v-menu>
      </div>
      <div v-if="user" class="pr-4">
        <span>Welcome {{ user }}</span>
      </div>
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawerIsOpen"
      clipped
      app
      hide-overlay
      class="mt14"
    >
      <navigation-drawer />
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  data () {
    return {
      user: null,
      drawerIsOpen: false,
      loginOpen: false
    }
  },
  computed: {
    userName () {
      if (!this.user) {
        return 'Guest'
      } else {
        return this.user
      }
    }
  }
}
</script>
