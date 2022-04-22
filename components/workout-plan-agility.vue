<template lang="html">
  <v-card flat class="mx-auto" width="90%">
    <v-card-subtitle class="text-h5">
      Agility
    </v-card-subtitle>
    <save-workout-button :workout="exercises" :type="type" :sets="exerciseIntensity" />
    <v-card-text>
      <v-row class="d-sm-none">
        <v-col v-for="exercise in agilityExercises" :key="exercise" align="center" cols="12" class="plan-border">
          <span>Exercise: {{ exercise.name }}</span>
          <v-row dense>
            <v-col cols="12">
              Sets: {{ exerciseIntensity }}
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <v-row class="d-none d-sm-flex">
        <v-col cols="8">
          <v-row>
            <v-col align="start" cols="12">
              <span class="text-decoration-underline">Exercise</span>
            </v-col>
          </v-row>
          <v-row>
            <v-col v-for="exercise in agilityExercises" :key="exercise" align="start" cols="12" class="plan-border">
              {{ exercise.name }}
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="4">
          <v-row>
            <v-col align="center" cols="12">
              <span class="text-decoration-underline">Sets</span>
            </v-col>
          </v-row>
          <v-row>
            <v-col v-for="exercise in agilityExercises" :key="exercise" align="center" cols="12" class="plan-border">
              {{ exerciseIntensity }}
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
      type: 'Agility'
    }
  },
  computed: {
    ...mapGetters({
      agility: 'agility',
      additionalFilters: 'additionalFilters',
      intensity: 'intensity'
    }),
    filter () {
      const filters = []
      if (this.additionalFilters.includes('Agility Ladder')) {
        filters.push('Agility Ladder')
      }
      if (this.additionalFilters.includes('Dot Mat')) {
        filters.push('Dot Mat')
      }
      if (this.additionalFilters.includes('Calithetics')) {
        filters.push('Calithetics')
      }
      return filters
    },
    agilityExercises () {
      const exercises = []
      const options = this.filter[Math.floor(Math.random() * this.filter.length)]

      this.agility.forEach((item) => {
        if (item.equipment.includes(options)) {
          exercises.push(item)
        }
      })
      return exercises
    },
    exerciseIntensity () {
      if (this.intensity === 'High') {
        return '3-5'
      } else if (this.intensity === 'Moderate') {
        return '2-4'
      } else {
        return '1-3'
      }
    },
    exercises () {
      const exercises = this.agilityExercises.map((exercise) => {
        return exercise.name
      })
      return exercises
    }
  }
}
</script>

<style media="screen">
  .plan-border {
    border-bottom: 1px solid gray
  }
</style>
