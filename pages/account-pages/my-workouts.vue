<template lang="html">
  <article class="">
    <v-container>
      <h2 class="text-h4 text-center py-2">
        My Workouts
      </h2>
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
                    <v-list-item-text>
                      {{ workout.date }}
                    </v-list-item-text>
                  </v-list-item-content>
                </v-list-item>
              </template>
              <v-row v-for="exercise in workout.workout" :key="exercise">
                <v-col align="center" cols="12" class="plan-border">
                  <span>Exercise: {{ exercise }}</span>
                  <v-row dense>
                    <v-col align="center" cols="12" v-if="workout.duration">
                      Duration: {{ workout.duration }}
                    </v-col>
                    <v-col cols="12" v-if="workout.intervals">
                      Interval: {{ workout.interval }}
                    </v-col>
                    <v-col cols="12" v-if="workout.reps">
                      Reps: {{ workout.reps }}
                    </v-col>
                    <v-col cols="12" v-if="workout.sets">
                      Sets: {{ workout.sets }}
                    </v-col>
                    <v-col cols="12" v-if="workout.rest">
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
