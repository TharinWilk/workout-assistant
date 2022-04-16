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

      this.generateAgilityWorkout(exerciseOptions)
      this.generateBalanceWorkout(exerciseOptions)
      this.generateCardioWorkout(exerciseOptions)
      this.generateMobilityWorkout(exerciseOptions)
      this.generatePowerWorkout(exerciseOptions)
      this.generateResistanceWorkout(exerciseOptions)
    },
    generateAgilityWorkout (exercise) {
      if (this.$store.state.workoutFilters.type.includes('Agility')) {
        const workout = exercises.filter(exercise => exercise.tags.includes('Agility') === true)
        this.$store.dispatch('updateWorkoutPlan', workout)
      }
    },
    generateBalanceWorkout (exercise) {
      if (this.$store.state.workoutFilters.type.includes('Balance')) {
        const workout = exercises.filter(exercise => exercise.tags.includes('Balance') === true)
        this.$store.dispatch('updateWorkoutPlan', workout)
      }
    },
    generateCardioWorkout (exercises) {
      if (this.$store.state.workoutFilters.type.includes('Cardio')) {
        const workout = exercises.filter(exercise => exercise.tags.includes('Cardio') === true)
        this.$store.dispatch('updateWorkoutPlan', workout)
      }
    },
    generateMobilityWorkout (exercise) {
      if (this.$store.state.workoutFilters.type.includes('Mobility')) {
        const workout = exercises.filter(exercise => exercise.tags.includes('Mobility') === true)
        this.$store.dispatch('updateWorkoutPlan', workout)
      }
    },
    generatePowerWorkout (exercise) {
      if (this.$store.state.workoutFilters.type.includes('Power')) {
        const workout = exercises.filter(exercise => exercise.tags.includes('Power') === true)
        this.$store.dispatch('updateWorkoutPlan', workout)
      }
    },
    generateResistanceWorkout (exercise) {
      if (this.$store.state.workoutFilters.type.includes('Resistance')) {
        const workout = exercises.filter(exercise => exercise.tags.includes('Resistance') === true)
        this.$store.dispatch('updateWorkoutPlan', workout)
      }
    }
  }
}
</script>
