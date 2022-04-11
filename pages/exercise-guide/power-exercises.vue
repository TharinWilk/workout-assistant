<template lang="html">
  <section>
    <v-card class="py-10 grey darken-4" dark>
      <h1 class="text-center text-h2 font-weight-bold">
        Power Exercises
      </h1>
    </v-card>
    <exercise-info />
    <v-container class="my-4">
      <v-card elevation="10 rounded-lg">
        <v-card-title>
          <v-text-field
            v-model="search"
            prepend-icon="mdi-magnify"
            label="Search"
            single-line
            hide-details
          />
        </v-card-title>
        <v-data-table
          :headers="headers"
          :items="power"
          :search="search"
          multi-sort
          height="400px"
          hide-default-footer
          :items-per-page="999"
          class="row-pointer"
          @click:row="selectExercise"
        />
      </v-card>
    </v-container>
  </section>
</template>

<script>
import exercises from '~/data/exercises.json'

export default {
  layout: 'exercise-guide-layout',
  asyncData ({ params }) {
    return {
      exercises,
      search: '',
      exercise: null,
      headers: [
        {
          text: 'Exercise',
          align: 'start',
          value: 'name',
          border: 'right',
          cellClass: [
            'font-weight-bold',
            'text-uppercase'
          ]
        },
        {
          text: 'variations',
          value: 'variations'
        },
        {
          text: 'tags',
          value: 'tags',
          align: 'start'
        }
      ]
    }
  },
  computed: {
    power () {
      const powerExercises = this.exercises.filter(exercise => exercise.tags.includes(' power') === true)
      return powerExercises
    }
  },
  methods: {
    selectExercise (e) {
      this.exercise = this.power.filter(exercise => exercise.name === e.name)
      this.$store.dispatch('selectedExercise', this.exercise)
    }
  }
}
</script>
