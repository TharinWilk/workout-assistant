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
  props: ['workout', 'type', 'reps', 'sets', 'rest', 'intervals', 'duration'],
  data () {
    return {
      btn: 'Save Workout'
    }
  },
  methods: {
    saveWorkout () {
      const date = new Date().toLocaleString('en-US')
      const newWorkout = {
        workoutName: null,
        workout: this.workout,
        date,
        type: this.type,
        fitness: this.$store.state.workoutFilters.fitness,
        intensity: this.$store.state.workoutFilters.intensity,
        goal: this.$store.state.workoutFilters.goal,
        reps: this.reps,
        sets: this.sets,
        rest: this.rest,
        intervals: this.intervals,
        duration: this.duration
      }
      const newName = prompt('Enter workout name')
      newWorkout.workoutName = newName
      console.log(newWorkout.workout)
      this.$store.dispatch('addNewWorkout', newWorkout)
    }
  }
}
</script>
