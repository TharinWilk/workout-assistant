<template lang="html">
  <section>
    <h2 class="d-none d-md-block mx-auto">
      Choose your Workout
    </h2>
    <v-list max-width="300px" class="mx-auto" flat>
      <v-list-group :value="false" class="d-block d-md-none">
        <template #activator>
          <v-list-item-title>Choose your Workout</v-list-item-title>
        </template>
        <v-list-item-group multiple>
          <v-list-item v-for="box in boxes" :key="box.name" @click="box.checked = !box.checked; changeWorkoutFilters()">
            <v-list-item-content>
              <v-list-item-title>
                {{ box.name }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list-group>
    </v-list>
    <v-list class="d-none d-md-flex">
      <v-list-item v-for="box in boxes" :key="box.name">
        <v-list-item-content>
          <v-list-item-title>
            {{ box.name }}
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </section>
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
        { name: 'Balance', checked: false },
        { name: 'Power', checked: false }
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
