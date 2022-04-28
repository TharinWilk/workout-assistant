<template lang="html">
  <v-expansion-panel>
    <!-- Header -->
    <v-expansion-panel-header>
      Choose your Workout
    </v-expansion-panel-header>
    <!-- Exercise Type List -->
    <v-expansion-panel-content>
      <v-list max-width="300px" class="mx-auto" flat>
        <v-list-item v-for="box in boxes" :key="box.name" @click="box.checked = !box.checked; changeWorkoutFilters()">
          <v-list-item-content>
            <v-list-item-title>
              {{ box.name }}
            </v-list-item-title>
          </v-list-item-content>
          <v-list-item-action>
            <v-checkbox :input-value="box.checked" @click="changeWorkoutFilters(box.name)" />
          </v-list-item-action>
        </v-list-item>
      </v-list>
    </v-expansion-panel-content>
  </v-expansion-panel>
</template>

<script>
export default {
  data () {
    return {
      boxes: [
        { name: 'Cardio', checked: false },
        { name: 'Agility', checked: false },
        { name: 'Resistance', checked: false },
        { name: 'Mobility', checked: false },
        { name: 'Balance', checked: false }
      ]
    }
  },
  methods: {
    changeWorkoutFilters () {
      const typeSelected = []
      this.boxes.forEach((box) => {
        if (box.checked) {
          typeSelected.push(box.name)
        }
      })
      this.$store.dispatch('selectedWorkoutTypes', typeSelected)
    }
  }
}
</script>
