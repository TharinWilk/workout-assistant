<template lang="html">
  <v-list max-width="300px" class="mx-auto" flat>
    <v-list-group :value="false" class="d-block d-md-none">
      <template #activator>
        <v-list-item-title>Fitness Level</v-list-item-title>
      </template>
      <v-list-item-group>
        <v-list-item v-for="level in levels" :key="level" @click="changeWorkoutFitnessLevel">
          <v-list-item-content>
            <v-list-item-title>
              {{ level }}
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
