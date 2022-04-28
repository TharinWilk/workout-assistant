<template lang="html">
  <section>
    <!-- Page Title -->
    <v-card class="py-10 grey darken-4" dark>
      <h1 class="text-center text-h2 font-weight-bold">
        Balance Exercises
      </h1>
    </v-card>
    <!-- Exercise info Component -->
    <exercise-info />
    <!-- Balance Exercise List and Selector -->
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
          :items="balance"
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
          text: 'Variations',
          value: 'variations'
        },
        {
          text: 'Tags',
          value: 'tags',
          align: 'start'
        }
      ]
    }
  },
  computed: {
    balance () {
      const balanceExercises = this.exercises.filter(exercise => exercise.tags.includes('Balance') === true)
      return balanceExercises
    }
  },
  methods: {
    selectExercise (e) {
      this.exercise = this.balance.filter(exercise => exercise.name === e.name)
      this.$store.dispatch('selectedExercise', this.exercise)
    }
  }
}
</script>
