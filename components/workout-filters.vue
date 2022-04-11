<template lang="html">
  <v-list max-width="300px" class="mx-auto">
    <v-list-group :value="false">
      <template #activator>
        <v-list-item-title>Filters</v-list-item-title>
      </template>
      <v-list-item v-for="filter in filters" :key="filter.category">
        <v-list-item-content>
          <v-list-item-title>
            {{ filter.category }}
          </v-list-item-title>
          <v-list-item-group multiple>
            <v-list-item v-for="items in filter.filters" :key="items.name" @click="items.checked = !items.checked">
              <template>
                <v-list-item-action>
                  <v-checkbox :input-value="items.checked" @click="changeAdditionalFilters(items.stateName)" />
                </v-list-item-action>
              </template>
              <v-list-item-content>
                {{ items.name }}
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list-item-content>
      </v-list-item>
    </v-list-group>
  </v-list>
</template>

<script>
export default {
  data () {
    return {
      filters: [
        {
          category: 'Resistance Filters',
          filters: [
            { name: 'Upper Body Exercises', checked: true, stateName: 'upperBody' },
            { name: 'Lower Body Exercises', checked: true, stateName: 'lowerBody' },
            { name: 'Core Exercises', checked: true, stateName: 'core' },
            { name: 'Push Exercises', checked: true, stateName: 'push' },
            { name: 'Pull Exercises', checked: true, stateName: 'pull' }
          ]
        },
        {
          category: 'Equipment Filters',
          filters: [
            { name: 'Calithetics', checked: true, stateName: 'calithetics' },
            { name: 'Treadmill', checked: true, stateName: 'treadmill' },
            { name: 'Stationary Bike', checked: true, stateName: 'stationaryBike' },
            { name: 'Bike', checked: true, stateName: 'bike' },
            { name: 'Dumbbells', checked: true, stateName: 'dumbbells' },
            { name: 'Barbells', checked: true, stateName: 'barbells' },
            { name: 'Kettlebells', checked: true, stateName: 'kettlebells' },
            { name: 'Weight Machines', checked: true, stateName: 'weightMachines' },
            { name: 'Cable Machine', checked: true, stateName: 'cableMachine' },
            { name: 'Full Rack', checked: true, stateName: 'fullRack' },
            { name: 'Half Rack', checked: true, stateName: 'halfRack' },
            { name: 'Agility Ladder', checked: true, stateName: 'agilityLadder' },
            { name: 'Stability Ball', checked: true, stateName: 'stabilityBall' },
            { name: 'Pool', checked: true, stateName: 'pool' },
            { name: 'Eliptical', checked: true, stateName: 'eliptical' },
            { name: 'Arc Trainier', checked: true, stateName: 'arcTrainier' },
            { name: 'Stair Machine', checked: true, stateName: 'stairMachine' },
            { name: 'Ladder Machine', checked: true, stateName: 'ladderMachine' },
            { name: 'Rowing Machine', checked: true, stateName: 'rowingMachine' },
            { name: 'Arm Cycle', checked: true, stateName: 'armCycle' }
          ]
        }
      ]
    }
  },
  methods: {
    changeAdditionalFilters (e) {
      this.$store.dispatch('selectedWorkoutAdditionalFilters', e)
      console.log(this.$store.state.additionalFilters)
    }
  }
}
</script>

<style lang="css" scoped>
</style>
