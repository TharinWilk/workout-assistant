<template lang="html">
  <v-card width="95%" elevation="5">
    <v-card-title class="justify-center text-h4">
      Workout
    </v-card-title>
    <workout-plan-agility v-if="workout.agility" />
    <workout-plan-balance v-if="workout.balance" />
    <workout-plan-cardio v-if="workout.cardio" />
    <workout-plan-mobility v-if="workout.mobility" />
    <workout-plan-power v-if="workout.power" />
    <workout-plan-resistance v-if="workout.resistance" />
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
