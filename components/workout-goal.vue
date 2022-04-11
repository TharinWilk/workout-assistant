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
              {{ goal.name }}
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
        { name: 'Weight Loss', category: 'Cardio' },
        { name: 'Cardiovascular Endurance', category: 'Cardio' },
        { name: 'Muscular Strength', category: 'Resistance' },
        { name: 'Muscular Endurance', category: 'Resistance' },
        { name: 'Build Muscle Mass', category: 'Resistance' },
        { name: 'Muscular Power', category: 'Resistance' },
        { name: 'Foot Speed', category: 'Agility' },
        { name: 'Directional Change', category: 'Agility' }
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
