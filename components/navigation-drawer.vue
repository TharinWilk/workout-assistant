<template lang="html">
  <v-list>
    <v-list-group :value="true" prepend-icon="mdi-account-circle">
      <template #activator>
        <v-list-item-title :v-model="userName">
          {{ userName }}
        </v-list-item-title>
      </template>
      <v-list-item v-for="link in accountLinks" :key="link.route" router :to="link.route">
        <v-list-item-action>
          <v-icon>{{ link.icon }}</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>
            {{ link.text }}
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list-group>
    <v-list-item v-for="link in pageLinks" :key="link.route" router :to="link.route">
      <v-list-item-action>
        <v-icon>{{ link.icon }}</v-icon>
      </v-list-item-action>
      <v-list-item-content>
        <v-list-item-title>{{ link.text }}</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  </v-list>
</template>

<script>
export default {
  data () {
    return {
      user: null,
      accountLinks: [
        { icon: 'mdi-home', text: 'Home', route: '/' },
        { icon: 'mdi-view-dashboard', text: 'My Workouts', route: '/account-pages/my-workouts' },
        { icon: 'mdi-heart', text: 'Favorited Exercises', route: '/account-pages/favorited-exercises' }
      ],
      pageLinks: [
        { icon: 'mdi-weight-lifter', text: 'Generate Workout', route: '/generate-workout' },
        { icon: 'mdi-dumbbell', text: 'Exercise Guide', route: '/exercise-guide' }
      ]
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

<style lang="css" scoped>
</style>
