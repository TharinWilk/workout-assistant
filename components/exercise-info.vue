<template lang="html">
  <div class="">
    <v-card
      v-for="item in $store.state.exercise"
      ref="exerciseInfo"
      :key="item.name"
      elevation="5"
      max-width="1160px"
      class="mx-auto my-4"
    >
      <!-- Exercise Title -->
      <v-card-title>
        <h2 class="text-h5 text-sm-h3 font-weight-bold mx-auto">
          {{ item.name }}
        </h2>
      </v-card-title>
      <v-card-text>
        <!-- Exercise Intensity -->
        <p v-if="item.intensity">
          Intensity Level: {{ item.intensity }}
        </p>
        <!-- Exercise Img -->
        <v-img
          v-if="item.img"
          :src="item.img"
          max-width="300px"
          max-height="300px"
          contain
          class="mx-auto"
        />
        <!-- Exercise Tags -->
        <div v-if="item.tags">
          <span>Tags:</span>
          <span v-for="tags in item.tags" :key="tags" class="text-caption">{{ tags }}, </span>
        </div>
        <!-- Exercise Description -->
        <div v-if="item.description" class="my-4">
          <h4 class="text-center text-h6 text-decoration-underline">
            Exercise Description
          </h4>
          <p>{{ item.description }}</p>
        </div>
        <!-- Exercise Progression -->
        <v-list v-if="item.progression" min-height="20px">
          <v-list-item class="d-flex flex-column">
            <v-list-item-title class="text--h3 font-weight-bold align-self-start">
              Progression
            </v-list-item-title>
            <v-list-item-content>
              <v-list-item-title>Beginner</v-list-item-title>
              <p class="grey--text text--darken-2">
                {{ item.progression[0].beginner }}
              </p>
              <v-list-item-title>Intermidiate</v-list-item-title>
              <p class="grey--text text--darken-2">
                {{ item.progression[1].intermidiate }}
              </p>
              <v-list-item-title>Advanced</v-list-item-title>
              <p class="grey--text text--darken-2">
                {{ item.progression[2].advanced }}
              </p>
            </v-list-item-content>
          </v-list-item>
        </v-list>
        <!-- Exercise Tips -->
        <v-list v-if="item.tips">
          <v-list-item-title>Tips</v-list-item-title>
          <v-list-item v-for="tip in item.tips" :key="tip">
            <ul>
              <li>{{ tip }}</li>
            </ul>
          </v-list-item>
        </v-list>
        <!-- Exercise Variations -->
        <div v-if="item.variations" class="my-4">
          <h4 class="text-center text-h6 text-decoration-underline">
            Exercises Variations
          </h4>
          <v-layout align-center justify-center column>
            <span v-for="variations in item.variations" :key="variations"> {{ variations }} </span>
          </v-layout>
        </div>
        <!-- Exercise Alternatives -->
        <div v-if="item.alternatives" class="my-4">
          <h4 class="text-center text-h6 text-decoration-underline">
            Alternative Exercises
          </h4>
          <v-layout align-center justify-center wrap>
            <v-btn v-for="alternatives in item.alternatives" :key="alternatives" elevation="0" class="ma-1" @click="selectExercise">
              <span>{{ alternatives }}</span>
            </v-btn>
          </v-layout>
        </div>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import exercises from '~/data/exercises.json'

export default {
  asyncData ({ params }) {
    return {
      exercises
    }
  },
  methods: {
    selectExercise (e) {
      const exercise = exercises.filter(exercise => exercise.name === e.target.textContent)
      this.$store.dispatch('selectedExercise', exercise)
    }
  }
}
</script>
