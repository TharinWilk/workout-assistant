<template lang="html">
  <v-expansion-panel>
    <v-expansion-panel-header>
      Fitness Goal
    </v-expansion-panel-header>
    <v-expansion-panel-content>
      <v-list>
        <v-list-item-group>
          <v-list-item v-for="goal in goals" :key="goal.name" @click="changeWorkoutGoal">
            <v-list-item-content>
              <v-list-item-title>
                {{ goal }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-expansion-panel-content>
  </v-expansion-panel>
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
        'Muscular Power'
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
