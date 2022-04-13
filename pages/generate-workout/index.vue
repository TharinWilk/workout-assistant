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
      {{ workout }}
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
      const exerciseOptions = []
      this.$store.state.additionalFilters.forEach((filter) => {
        this.exercises.forEach((item) => {
          if (item.equipment.includes(filter) && !exerciseOptions.includes(item)) {
            exerciseOptions.push(item)
          }
        })
      })
      this.workout = exerciseOptions
      console.log(this.$store.state.additionalFilters)

      const type = this.$store.state.workoutFilters.type
      if (type.includes('Cardio')) {
        this.generateCardioWorkout(exerciseOptions)
      }
    },
    generateCardioWorkout (exercises) {
      let workout = null
      console.log(exercises)
      this.$store.state.workoutFilters.type.forEach((type) => {
        const options = exercises.filter(exercise => exercise.tags.includes(type) === true && exercise.intensity.includes(this.$store.state.workoutFilters.intensity))
        workout = options[Math.floor(Math.random() * options.length)]
        console.log(options)
      })
      this.$store.dispatch('updateWorkoutPlan', workout)
    }
  }
}
</script>
