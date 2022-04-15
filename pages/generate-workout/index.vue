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
      console.log(exerciseOptions)

      const type = this.$store.state.workoutFilters.type
      if (type.includes('Agility')) {
        console.log('agility found')
        this.generateAgilityWorkout(exerciseOptions)
      }
      if (type.includes('Balance')) {
        console.log('balance found')
        this.generateBalanceWorkout(exerciseOptions)
      }
      if (type.includes('Cardio')) {
        this.generateCardioWorkout(exerciseOptions)
      }
      if (type.includes('Mobility')) {
        this.generateMobilityWorkout(exerciseOptions)
      }
      if (type.includes('Power')) {
        console.log('Power Found')
        this.generatePowerWorkout(exerciseOptions)
      }
      if (type.includes('Resistance')) {
        this.generateResistanceWorkout(exerciseOptions)
      }
    },
    generateAgilityWorkout (exercise) {
      console.log('generating agility workout')
      let workout = null
      this.$store.state.workoutFilters.type.forEach((type) => {
        const options = exercises.filter(exercise => exercise.tags.includes(type) === true)
        workout = options[Math.floor(Math.random() * options.length)]
      })
      this.$store.dispatch('updateWorkoutPlan', workout)
    },
    generateBalanceWorkout (exercise) {
      console.log('generating balance workout')
      let workout = null
      this.$store.state.workoutFilters.type.forEach((type) => {
        const options = exercises.filter(exercise => exercise.tags.includes(type) === true)
        workout = options[Math.floor(Math.random() * options.length)]
      })
      this.$store.dispatch('updateWorkoutPlan', workout)
    },
    generateCardioWorkout (exercises) {
      let workout = null
      this.$store.state.workoutFilters.type.forEach((type) => {
        let options = exercises.filter(exercise => exercise.tags.includes(type) === true)
        options = options.filter(exercise => exercise.intensity.includes(this.$store.state.workoutFilters.intensity))
        workout = options[Math.floor(Math.random() * options.length)]
      })
      this.$store.dispatch('updateWorkoutPlan', workout)
    },
    generateMobilityWorkout (exercise) {
      console.log('generating mobility workout')
      let workout = null
      this.$store.state.workoutFilters.type.forEach((type) => {
        const options = exercises.filter(exercise => exercise.tags.includes(type) === true)
        workout = options
      })
      this.$store.dispatch('updateWorkoutPlan', workout)
    },
    generatePowerWorkout (exercise) {
      console.log('generating power workout')
      let workout = null
      this.$store.state.workoutFilters.type.forEach((type) => {
        const options = exercises.filter(exercise => exercise.tags.includes(type) === true)
        workout = options
      })
      this.$store.dispatch('updateWorkoutPlan', workout)
    },
    generateResistanceWorkout (exercise) {
      console.log('generating resistance workout')
      let workout = null
      this.$store.state.workoutFilters.type.forEach((type) => {
        const options = exercises.filter(exercise => exercise.tags.includes(type) === true)
        workout = options
      })
      this.$store.dispatch('updateWorkoutPlan', workout)
    }
  }
}
</script>
