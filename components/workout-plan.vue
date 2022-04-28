<template lang="html">
  <v-card width="95%" elevation="5">
    <!-- Workout Plan Title -->
    <v-card-title class="justify-center text-h4">
      Workout
    </v-card-title>
    <!-- Workout Plan Components -->
    <workout-plan-agility v-if="workout.agility" class="my-4" />
    <workout-plan-balance v-if="workout.balance" class="my-4" />
    <workout-plan-cardio v-if="workout.cardio" class="my-4" />
    <workout-plan-mobility v-if="workout.mobility" class="my-4" />
    <workout-plan-power v-if="workout.power" class="my-4" />
    <workout-plan-resistance v-if="workout.resistance" class="my-4" />
  </v-card>
</template>

<script>
export default {
  data () {
    return {
      workout: this.$store.state.workout
    }
  }
}
</script>
