<template lang="html">
  <v-expansion-panel>
    <!-- Header -->
    <v-expansion-panel-header>
      Fitness Level
    </v-expansion-panel-header>
    <v-expansion-panel-content>
      <!-- Fitness Level List -->
      <v-list>
        <v-list-item-group>
          <v-list-item v-for="level in levels" :key="level" @click="changeWorkoutFitnessLevel">
            <v-list-item-content>
              <v-list-item-title>
                {{ level }}
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
      levels: [
        'Beginner',
        'Intermediate',
        'Advanced'
      ]
    }
  },
  methods: {
    changeWorkoutFitnessLevel (e) {
      const fitLevel = e.target.innerText
      this.$store.dispatch('selectedWorkoutFitnessLevel', fitLevel)
    }
  }
}
</script>
