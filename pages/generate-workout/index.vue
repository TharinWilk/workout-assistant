<template lang="html">
  <article class="">
    <v-card class="py-10 grey darken-4" dark>
      <h1 class="text-center text-h2 font-weight-bold">
        Workout Generator
      </h1>
    </v-card>
    <v-layout justify-center column align-center>
      <v-container>
        <v-sheet max-width="300px" class="mx-auto">
          <v-expansion-panels accordion hover>
            <workout-type />
            <workout-fitness-level />
            <workout-intensity />
            <workout-goal />
            <workout-filters />
          </v-expansion-panels>
        </v-sheet>
        <v-btn max-width="200px" class="my-5 d-block mx-auto" @click="generateWorkout">
          Generate Workout
        </v-btn>
      </v-container>
      <workout-plan v-if="workout" class="my-5 pb-6" />
    </v-layout>
  </article>
</template>

<script>
import { mapGetters } from 'vuex'
import exercises from '~/data/exercises.json'

export default {
  asyncData ({ params }) {
    return { exercises }
  },
  computed: {
    ...mapGetters({
      workout: 'activeWorkout'
    })
  },
  methods: {
    generateWorkout () {
      if (this.$store.state.workoutFilters.type) {
        const exerciseOptions = []
        this.$store.state.additionalFilters.forEach((filter) => {
          this.exercises.forEach((item) => {
            if (item.equipment.includes(filter) && !exerciseOptions.includes(item)) {
              exerciseOptions.push(item)
            }
          })
        })

        this.clearWorkout()
        this.generateAgilityWorkout(exerciseOptions)
        this.generateBalanceWorkout(exerciseOptions)
        this.generateCardioWorkout(exerciseOptions)
        this.generateMobilityWorkout(exerciseOptions)
        this.generateResistanceWorkout(exerciseOptions)
      }
    },
    clearWorkout () {
      this.$store.dispatch('clearWorkout')
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
    generateResistanceWorkout (exercise) {
      if (this.$store.state.workoutFilters.type.includes('Resistance')) {
        const workout = exercises.filter(exercise => exercise.tags.includes('Resistance') === true)

        if (this.$store.state.workoutFilters.goal === 'Muscular Power') {
          const power = exercises.filter(exercise => exercise.tags.includes('Power') === true)
          power.forEach((item) => {
            workout.push(item)
          })
        }
        this.$store.dispatch('updateWorkoutPlan', workout)
      }
    }
  }
}
</script>
