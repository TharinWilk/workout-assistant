<template lang="html">
  <v-card flat class="mx-auto" width="90%">
    <v-card-subtitle class="text-h5">
      Cardio
    </v-card-subtitle>
    <save-workout-button :workout="cardioExercise" :type="type"/>
    <v-card-text>
      <v-row class="d-sm-none">
        <v-col align="center" cols="12" class="plan-border">
          <span>Exercise: {{ cardioExercise.name }}</span>
          <v-row dense>
            <v-col align="center" cols="12">
              Duration: {{ duration }}
            </v-col>
            <v-col cols="12">
              Interval: {{ interval }}
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <v-row class="d-none d-sm-flex">
        <v-col align="start" cols="6">
          <span class="text-decoration-underline">Exercise</span>
        </v-col>
        <v-col v-for="item in layout" :key="item" align="center" cols="3">
          <span class="text-decoration-underline">{{ item }}</span>
        </v-col>
        </v-col>
        <v-col align="start" cols="6" class="plan-border">
          {{ cardioExercise.name }}
        </v-col>
        <v-col v-for="item in workoutMetrics" :key="item" align="center" cols="3" class="plan-border">
          {{ item }}
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
      type: 'Cardio',
      layout: [
        'Duration',
        'Intervals'
      ]
    }
  },
  computed: {
    ...mapGetters({
      cardio: 'cardio',
      intensity: 'intensity'
    }),
    cardioExercise () {
      return this.cardio[Math.floor(Math.random() * this.cardio.length)]
    },
    workoutMetrics () {
      if (this.intensity === 'High') {
        return ['40 min - 60 min', 'Continuous']
      } else if (this.intensity === 'Moderate') {
        return ['30 min - 40 min', 'Continuous']
      } else {
        return ['15 min - 30 min', 'Continuous']
      }
    },
    duration () {
      return this.workoutMetrics[0]
    },
    interval () {
      return this.workoutMetrics[1]
    }
  }
}
</script>
