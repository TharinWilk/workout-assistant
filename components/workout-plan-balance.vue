<template lang="html">
  <v-card flat class="mx-auto" width="90%">
    <!-- Workout Plan Subtitle -->
    <v-card-subtitle class="text-h5">
      Balance
    </v-card-subtitle>
    <!-- Save Workout Button Component -->
    <save-workout-button :workout="balanceExercises" :type="type" :duration="duration" :sets="sets" />
    <!-- Workout Plan -->
    <v-card-text>
      <!-- Phone Device Layout -->
      <v-row class="d-sm-none">
        <v-col v-for="exercise in balance" :key="exercise.name" align="center" cols="12" class="plan-border">
          <span>Exercise: {{ exercise.name }}</span>
          <v-row dense>
            <v-col align="center" cols="12">
              Duration: {{ duration }}
            </v-col>
            <v-col cols="12">
              Sets: {{ sets }}
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <!-- Tablet and Larger Device Layout -->
      <v-row class="d-none d-sm-flex">
        <v-col cols="6">
          <v-row>
            <v-col align="start" cols="12">
              <span class="text-decoration-underline">Exercise</span>
            </v-col>
          </v-row>
          <v-row>
            <v-col v-for="exercise in balance" :key="exercise.name" align="start" cols="12" class="plan-border">
              {{ exercise.name }}
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
            <v-col v-for="exercise in balance" :key="exercise.name" align="center" cols="12" class="plan-border">
              {{ duration }}
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
            <v-col v-for="exercise in balance" :key="exercise.name" align="center" cols="12" class="plan-border">
              {{ sets }}
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
      type: 'Balance',
      duration: '30-90 sec',
      sets: '1-3 sets'
    }
  },
  computed: {
    ...mapGetters({
      balance: 'balance'
    }),
    balanceExercises () {
      const exercises = this.balance.map((exercise) => {
        return exercise.name
      })
      return exercises
    }
  }
}
</script>
