<template lang="html">
  <v-footer padless class="grey lighten-3">
    <v-row
      justify="center"
      no-gutters
    >
      <v-tooltip
        v-for="link in links"
        :key="link.text"
        bottom
      >
        <template #activator="{ on }">
          <v-btn
            fab
            elevation="0"
            class="grey lighten-3 ma-2"
            router
            :to="link.route"
            v-on="on"
          >
            <v-icon>{{ link.icon }}</v-icon>
          </v-btn>
        </template>
        <span>{{ link.text }}</span>
      </v-tooltip>
      <v-col
        class="py-4 text-center"
        cols="12"
      >
        {{ new Date().getFullYear() }}
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  data () {
    return {
      links: [
        { icon: 'mdi-home', text: 'Home', route: '/' },
        { icon: 'mdi-weight-lifter', text: 'Generate Workout', route: '/generate-workout' },
        { icon: 'mdi-dumbbell', text: 'Exercise Guide', route: '/exercise-guide' }
      ]
    }
  }
}
</script>
