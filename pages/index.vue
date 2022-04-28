<template lang="html">
  <article class="">
    <!-- Page Title -->
    <v-container>
      <h1 class="text-center text-h3 font-weight-bold">
        Welcome
      </h1>
    </v-container>
    <!-- Page Links -->
    <v-container>
      <v-row>
        <v-col
          v-for="link in pageLinks"
          :key="link.route"
          cols="12"
          sm="6"
          class="py-0"
        >
          <v-card
            router
            :to="link.route"
            class="pa-3 my-3"
            hover
          >
            <v-row>
              <v-card-actions>
                <v-icon size="48px" color="blue">
                  {{ link.icon }}
                </v-icon>
              </v-card-actions>
              <v-card-title>
                {{ link.text }}
              </v-card-title>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </article>
</template>

<script>
export default {
  layout: 'default',
  data () {
    return {
      pageLinks: [
        { icon: 'mdi-weight-lifter', text: 'Generate Workout', route: '/generate-workout' },
        { icon: 'mdi-dumbbell', text: 'Exercise Guide', route: '/exercise-guide' },
        { icon: 'mdi-view-dashboard', text: 'My Workouts', route: '/account-pages/my-workouts' },
        { icon: 'mdi-heart', text: 'Favorited Exercises', route: '/account-pages/favorited-exercises' }
      ]
    }
  }
}
</script>
