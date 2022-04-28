<template lang="html">
  <article class="">
    <v-container>
      <v-card class="py-10 grey darken-4" dark>
        <h1 class="text-center text-h2 font-weight-bold">
          My Workouts
        </h1>
      </v-card>
      <v-list three-line>
        <template v-for="workout in savedWorkouts">
          <v-card :key="workout.workoutName" class="my-2">
            <v-list-group>
              <template #activator>
                <v-list-item :key="workout.workoutName">
                  <v-list-item-content>
                    <v-list-item-title>
                      {{ workout.workoutName }}
                    </v-list-item-title>
                    <v-list-item-subtitle>
                      {{ workout.type }}
                    </v-list-item-subtitle>
                    <v-list-item-subtitle>
                      {{ workout.date }}
                    </v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </template>
              <v-row v-for="exercise in workout.workout" :key="exercise">
                <v-col align="center" cols="12" class="plan-border">
                  <span class="font-weight-bold">Exercise: {{ exercise }}</span>
                  <v-row dense>
                    <v-col v-if="workout.duration" align="center" cols="12">
                      Duration: {{ workout.duration }}
                    </v-col>
                    <v-col v-if="workout.intervals" cols="12">
                      Interval: {{ workout.interval }}
                    </v-col>
                    <v-col v-if="workout.reps" cols="12">
                      Reps: {{ workout.reps }}
                    </v-col>
                    <v-col v-if="workout.sets" cols="12">
                      Sets: {{ workout.sets }}
                    </v-col>
                    <v-col v-if="workout.rest" cols="12">
                      Rest: {{ workout.rest }}
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>
            </v-list-group>
          </v-card>
        </template>
      </v-list>
    </v-container>
    {{ savedWorkouts }}
  </article>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      savedWorkouts: 'savedWorkouts'
    })
  }
}
</script>

<style lang="css">
</style>
