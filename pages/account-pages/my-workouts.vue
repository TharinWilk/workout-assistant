<template lang="html">
  <article class="">
    <v-container>
      <h2>My Workouts</h2>
      <v-list three-line>
        <template v-for="workout in savedWorkouts">
          <v-card :key="workout.id">
            <v-list-item :key="workout.title">
              <v-list-item-content>
                <v-list-item-title>
                  {{ workout.title }}
                </v-list-item-title>
                <v-list-item-subtitle v-for="type in workout.types" :key="type">
                  {{ type }}
                </v-list-item-subtitle>
                <v-list-item-text>
                  {{ workout.date }}
                </v-list-item-text>
              </v-list-item-content>
            </v-list-item>
          </v-card>
        </template>
      </v-list>
    </v-container>
  </article>
</template>

<script>
export default {
  data () {
    return {
      savedWorkouts: [
        { id: 1, title: 'Power Workout', types: ['resistance', 'power'], date: '1/1/22' },
        { id: 2, title: 'Resistance Workout', types: ['resistance'], date: '2/13/22' },
        { id: 3, title: 'Run Workout', types: ['cardio'], date: '1/5/22' },
        { id: 4, title: 'Stretching Routine', types: ['mobility'], date: '2/3/22' }
      ]
    }
  }
}
</script>

<style lang="css">
</style>
