<template lang="html">
  <nav>
    <v-app-bar hide-on-scroll app flat clipped-left height="56px">
      <!-- Left Side Nav -->
      <v-app-bar-nav-icon @click="drawerIsOpen = !drawerIsOpen" />
      <v-app-bar-title class="d-none d-sm-flex text-no-wrap">
        <span class="text-no-wrap">Workout Assistant</span>
      </v-app-bar-title>
      <v-spacer />
      <!-- Right Side Nav -->
      <div v-if="!user">
        <!-- Login Button -->
        <v-menu
          v-if="!this.$store.state.username"
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
        <!-- Sign-up Button -->
        <v-menu
        v-if="!this.$store.state.username"
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
      <!-- Welcome Banner -->
      <div v-if="this.$store.state.username" class="pr-4">
        <span>Welcome {{ this.$store.state.username }}</span>
      </div>
      <!-- Logout Button -->
      <v-btn v-if="this.$store.state.username" @click="logoutUser">
        Logout
      </v-btn>
    </v-app-bar>
    <!-- Navigation Side Drawer -->
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
  },
  methods: {
    logoutUser () {
      this.$store.dispatch('logoutUser')
    }
  }
}
</script>
