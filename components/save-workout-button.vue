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
  props: {
    exercises: {
      type: Array,
      default: null
    },
    type: {
      type: String,
      default: null
    },
    reps: {
      type: String,
      default: null
    },
    sets: {
      type: String,
      default: null
    },
    rest: {
      type: String,
      default: null
    },
    intervals: {
      type: String,
      default: null
    },
    duration: {
      type: String,
      default: null
    }
  },
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
      this.$store.dispatch('addNewWorkout', newWorkout)
    }
  }
}
</script>
