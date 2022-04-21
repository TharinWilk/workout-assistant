<template lang="html">
  <v-btn @click="saveWorkout">
    <v-icon color="black">
      mdi-content-save-outline
    </v-icon>
    <span class="pl-1">{{ btn }}</span>
  </v-btn>
</template>

<script>
export default {
  props: ['workout', 'type'],
  data () {
    return {
      btn: 'Save Workout'
    }
  },
  methods: {
    saveWorkout () {
      const newWorkout = {
        workoutName: null,
        workout: this.workout,
        type: this.type,
        fitness: this.$store.state.workoutFilters.fitness,
        intensity: this.$store.state.workoutFilters.intensity,
        goal: this.$store.state.workoutFilters.goal
      }
      const newName = prompt('Enter workout name')
      newWorkout.workoutName = newName
      this.$store.dispatch('addNewWorkout', newWorkout)
    }
  }
}
</script>
