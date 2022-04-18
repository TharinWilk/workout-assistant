<template lang="html">
  <v-card elevation="3" class="border mx-auto" width="90%">
    <v-card-subtitle class="text-h5">
      Mobility
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
            <v-col align="start" cols="12" v-for="exercise in mobilityExercises" :key="exercise">
              {{ exercise }}
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="3">
          <v-row>
            <v-col align="center" cols="12">
              <span class="text-decoration-underline">Sets</span>
            </v-col>
          </v-row>
          <v-row>
            <v-col align="center" cols="12" v-for="exercise in mobilityExercises" :key="exercise">
              {{ sets }}
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="3">
          <v-row>
            <v-col align="center" cols="12">
              <span class="text-decoration-underline">Duration</span>
            </v-col>
          </v-row>
          <v-row>
            <v-col align="center" cols="12" v-for="exercise in mobilityExercises" :key="exercise">
              {{ duration }}
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
      sets: '2-4 sets',
      duration: '15-60 sec'
    }
  },
  computed: {
    ...mapGetters({
      mobility: 'mobility'
    }),
    mobilityExercises () {
      const array = []
      if (this.$store.state.additionalFilters.includes('Upper Body')) {
        this.upperBody.forEach((group) => {
          let options = this.mobility.filter(item => item.primary === group)
          options = options.map((item) => {
            return item.name
          })
          array.push(options[Math.floor(Math.random() * options.length)])
        })
      }
      if (this.$store.state.additionalFilters.includes('Lower Body')) {
        this.lowerBody.forEach((group) => {
          let options = this.mobility.filter(item => item.primary === group)
          options = options.map((item) => {
            return item.name
          })
          array.push(options[Math.floor(Math.random() * options.length)])
        })
      }
      if (this.$store.state.additionalFilters.includes('Core')) {
        this.core.forEach((group) => {
          let options = this.mobility.filter(item => item.primary === group)
          options = options.map((item) => {
            return item.name
          })
          array.push(options[Math.floor(Math.random() * options.length)])
        })
      }
      return array
    }
  }
}
</script>
