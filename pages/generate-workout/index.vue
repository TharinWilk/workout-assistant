<template lang="html">
  <article class="">
    <v-layout justify-center column align-center>
      <v-container>
        <workout-type />
        <workout-fitness-level />
        <workout-intensity />
        <workout-goal />
        <workout-filters />
        <v-btn max-width="200px" class="my-5 d-block mx-auto" @click="generateWorkout">
          Generate Workout
        </v-btn>
      </v-container>
      <workout-plan />
    </v-layout>
  </article>
</template>

<script>
import exercises from '~/data/exercises.json'

export default {
  asyncData ({ params }) {
    return { exercises }
  },
  data () {
    return {
      workout: []
    }
  },
  methods: {
    generateWorkout () {
      let workout = null
      this.$store.state.workoutFilters.type.forEach((type) => {
        const options = this.exercises.filter(exercise => exercise.tags.includes(type) === true && exercise.intensity.includes(this.$store.state.workoutFilters.intensity))
        workout = options[Math.floor(Math.random() * options.length)]
      })
      this.$store.dispatch('updateWorkoutPlan', workout)
    }
  }
}
</script>

<style lang="css">
</style>
