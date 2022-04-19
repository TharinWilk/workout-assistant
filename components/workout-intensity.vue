<template lang="html">
  <v-expansion-panel>
    <v-expansion-panel-header>
      Intensity Level
    </v-expansion-panel-header>
    <v-expansion-panel-content>
      <v-list>
        <v-list-item-group>
          <v-list-item v-for="level in levels" :key="level" @click="changeWorkoutIntensity">
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
        'Low',
        'Moderate',
        'High'
      ]
    }
  },
  methods: {
    changeWorkoutIntensity (e) {
      const intensity = e.target.innerText
      this.$store.dispatch('selectedWorkoutIntensity', intensity)
    }
  }
}
</script>
