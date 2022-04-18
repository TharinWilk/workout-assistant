<template lang="html">
  <v-list max-width="300px" class="mx-auto" flat>
    <v-list-group :value="false" class="d-block d-md-none">
      <template #activator>
        <v-list-item-title>Fitness Goal</v-list-item-title>
      </template>
      <v-list-item-group>
        <v-list-item v-for="goal in goals" :key="goal.name" @click="changeWorkoutGoal">
          <v-list-item-content>
            <v-list-item-title>
              {{ goal }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list-group>
  </v-list>
</template>

<script>
export default {
  data () {
    return {
      goals: [
        'Weight Loss',
        'Cardiovascular Endurance',
        'Muscular Strength',
        'Muscular Endurance',
        'Build Muscle Mass',
        'Muscular Power',
        'Foot Speed',
        'Directional Change'
      ]
    }
  },
  methods: {
    changeWorkoutGoal (e) {
      const goal = e.target.innerText
      this.$store.dispatch('selectedWorkoutGoal', goal)
    }
  }
}
</script>
