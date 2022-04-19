<template lang="html">
  <v-expansion-panel>
    <v-expansion-panel-header>
      Additional Filters
    </v-expansion-panel-header>
    <v-expansion-panel-content>
      <v-list>
        <v-list-item v-for="filter in filters" :key="filter.category">
          <v-list-item-content>
            <v-list-item-title>
              {{ filter.category }}
            </v-list-item-title>
            <v-list-item-group multiple>
              <v-list-item v-for="items in filter.filters" :key="items.name" @click="items.checked = !items.checked">
                <template>
                  <v-list-item-action>
                    <v-checkbox :input-value="items.checked" @click="changeAdditionalFilters(items.name)" />
                  </v-list-item-action>
                </template>
                <v-list-item-content>
                  {{ items.name }}
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-expansion-panel-content>
  </v-expansion-panel>
</template>

<script>
export default {
  data () {
    return {
      filters: [
        {
          category: 'Resistance Filters',
          filters: [
            { name: 'Upper Body', checked: true },
            { name: 'Lower Body', checked: true },
            { name: 'Core', checked: true },
            { name: 'Push', checked: true },
            { name: 'Pull', checked: true }
          ]
        },
        {
          category: 'Equipment Filters',
          filters: [
            { name: 'Calithetics', checked: true },
            { name: 'Treadmill', checked: true },
            { name: 'Stationary Bike', checked: true },
            { name: 'Bike', checked: true },
            { name: 'Dumbbells', checked: true },
            { name: 'Barbells', checked: true },
            { name: 'Kettlebells', checked: true },
            { name: 'Weight Machines', checked: true },
            { name: 'Cable Machine', checked: true },
            { name: 'Full Rack', checked: true },
            { name: 'Half Rack', checked: true },
            { name: 'Agility Ladder', checked: true },
            { name: 'Stability Ball', checked: true },
            { name: 'Pool', checked: true },
            { name: 'Eliptical', checked: true },
            { name: 'Arc Trainer', checked: true },
            { name: 'Stair Machine', checked: true },
            { name: 'Ladder Machine', checked: true },
            { name: 'Rowing Machine', checked: true },
            { name: 'Arm Cycle', checked: true }
          ]
        }
      ]
    }
  },
  methods: {
    changeAdditionalFilters (e) {
      this.$store.dispatch('selectedWorkoutAdditionalFilters', e)
    }
  }
}
</script>
