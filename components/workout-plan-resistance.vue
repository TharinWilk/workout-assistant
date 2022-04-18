<template lang="html">
  <v-card elevation="3" class="border mx-auto" width="90%">
    <v-card-subtitle class="text-h5">
      Resistance
    </v-card-subtitle>
    <v-card-text>
      <v-row>
        <v-col cols="6">
          <v-row>
            <v-col align="start" cols="12">
              <span class="text-decoration-underline">Exercise</span>
            </v-col>
          </v-row>
          <v-row>
            <v-col align="start" cols="12" v-for="exercise in resistanceExercises" :key="exercise">
              {{ exercise }}
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="2">
          <v-row>
            <v-col align="center" cols="12">
              <span class="text-decoration-underline">Reps</span>
            </v-col>
          </v-row>
          <v-row>
            <v-col align="center" cols="12" v-for="exercise in resistanceExercises" :key="exercise">
              {{ reps }}
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="2">
          <v-row>
            <v-col align="center" cols="12">
              <span class="text-decoration-underline">Sets</span>
            </v-col>
          </v-row>
          <v-row>
            <v-col align="center" cols="12" v-for="exercise in resistanceExercises" :key="exercise">
              {{ sets }}
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="2">
          <v-row>
            <v-col align="center" cols="12">
              <span class="text-decoration-underline">Rest</span>
            </v-col>
          </v-row>
          <v-row>
            <v-col align="center" cols="12" v-for="exercise in resistanceExercises" :key="exercise">
              {{ rest }}
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      upperBody: [
        'Chest',
        'Shoulders',
        'Back',
        'Lats',
        'Biceps',
        'Triceps'
      ],
      lowerBody: [
        'Glutes',
        'Quadriceps',
        'Hamstrings',
        'Adductors',
        'Abductors',
        'Calves'
      ],
      core: [
        'Abdominals',
        'Lower Back',
        'Obliques'
      ],
      reps: null,
      sets: null,
      rest: null
    }
  },
  computed: {
    ...mapGetters({
      resistance: 'resistance'
    }),
    resistanceExercises () {
      const array = []
      if (this.$store.state.additionalFilters.includes('Upper Body')) {
        this.upperBody.forEach((group) => {
          let options = this.resistance.filter(item => item.primary === group)
          options = options.map((item) => {
            return item.name
          })
          array.push(options[Math.floor(Math.random() * options.length)])
        })
      }
      if (this.$store.state.additionalFilters.includes('Lower Body')) {
        this.lowerBody.forEach((group) => {
          let options = this.resistance.filter(item => item.primary === group)
          options = options.map((item) => {
            return item.name
          })
          array.push(options[Math.floor(Math.random() * options.length)])
        })
      }
      if (this.$store.state.additionalFilters.includes('Core')) {
        this.core.forEach((group) => {
          let options = this.resistance.filter(item => item.primary === group)
          options = options.map((item) => {
            return item.name
          })
          array.push(options[Math.floor(Math.random() * options.length)])
        })
      }
      return array
    }
  },
  methods: {
    getRepsSetsAndRest () {
      const goal = this.$store.state.workoutFilters.goal
      const fitness = this.$store.state.workoutFilters.fitness
      console.log(goal, fitness)

      if (fitness === 'Advanced' || fitness === 'Intermediate') {
        if (goal === 'Muscular Strength') {
          this.reps = '2 - 5'
          this.sets = '2 - 3'
          this.rest = '3 - 5 min'
        } else if (goal === 'Muscular Power') {
          this.reps = '3 - 6'
          this.sets = '2 - 3'
          this.rest = '2 - 5 min'
        } else if (goal === 'Build Muscle Mass') {
          this.reps = '6 - 12'
          this.sets = '3 - 5'
          this.rest = '1 - 2 min'
        } else {
          this.reps = '12 - 16'
          this.sets = '3 - 5'
          this.rest = '30 - 60 sec'
        }
      } else if (fitness === 'Beginner') {
        if (goal === 'Muscular Strength') {
          this.reps = '4 - 6'
          this.sets = '1 - 3'
          this.rest = '3 - 5 min'
        } else if (goal === 'Muscular Power') {
          this.reps = '4 - 6'
          this.sets = '1 - 3'
          this.rest = '2 - 5 min'
        } else if (goal === 'Build Muscle Mass') {
          this.reps = '6 - 12'
          this.sets = '2 - 3'
          this.rest = '1 - 2 min'
        } else {
          this.reps = '12 - 16'
          this.sets = '2 - 3'
          this.rest = '30 - 60 sec'
        }
      }
    }
  },
  mounted () {
    this.getRepsSetsAndRest()
  },
  updated () {
    this.getRepsSetsAndRest()
  }
}
</script>
