<template lang="html">
  <section>
    <!-- Page Title -->
    <v-card class="py-10 grey darken-4" dark>
      <h1 class="text-center text-h2 font-weight-bold">
        Resistance Exercises
      </h1>
    </v-card>
    <!-- Exercise info Component -->
    <exercise-info />
    <!-- Resistance Exercise List and Selector -->
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
          :items="resistance"
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
      img: 'URL(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOEGRPZFraUGMg-k_yjuX8NjAod9THhTY8Cg&usqp=CAU)',
      cover: 'cover',
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
    resistance () {
      const resistanceExercises = this.exercises.filter(exercise => exercise.tags.includes('Resistance') === true)
      return resistanceExercises
    }
  },
  methods: {
    selectExercise (e) {
      this.exercise = this.resistance.filter(exercise => exercise.name === e.name)
      this.$store.dispatch('selectedExercise', this.exercise)
    }
  }
}
</script>
