<template lang="html">
  <v-card elevation="3" class="border mx-auto" width="90%">
    <v-card-subtitle class="text-h5">
      Balance
    </v-card-subtitle>
    <v-card-text>
      <v-row>
        <v-col v-for="item in layout" :key="item" align="center" cols="4">
          <span class="text-decoration-underline">{{ item }}</span>
        </v-col>
        <v-col align="center" cols="4">
          {{ balance }}
        </v-col>
        <v-col v-for="item in workoutMetrics" :key="item" align="center" cols="4">
          {{ item }}
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      layout: [
        'Exercise',
        'Min.',
        'Sets'
      ]
    }
  },
  computed: {
    ...mapGetters({
      balance: 'balance'
    })
  }
}
</script>
