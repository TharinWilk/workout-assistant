<template lang="html">
  <v-container>
    <!-- Input Field -->
    <v-text-field
      v-model="search"
      outlined
      placeholder="Search Exercises"
      rounded
      prepend-inner-icon="mdi-magnify"
      clearable
    />
    <!-- Output Field -->
    <v-list v-show="filteredExercises">
      <v-card v-for="exercise in filteredExercises" :key="exercise.name" @click="selectExercise">
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>
              {{ exercise.name }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-card>
    </v-list>
  </v-container>
</template>

<script>
export default {
  props: {
    exercises: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
      search: ''
    }
  },
  computed: {
    filteredExercises () {
      if (this.search !== '' && this.search !== null) {
        return this.exercises.filter((exercise) => {
          return exercise.name.toLowerCase().match(this.search.toLowerCase())
        })
      } else {
        return false
      }
    }
  },
  methods: {
    selectExercise (e) {
      this.exercise = this.exercises.filter(exercise => exercise.name === e.target.innerText)
      this.$store.dispatch('selectedExercise', this.exercise)
    }
  }
}
</script>

<style lang="css" scoped>
</style>
