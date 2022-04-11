<template lang="html">
  <div class="">
    <v-card v-for="item in $store.state.exercise" ref="exerciseInfo" :key="item.name" elevation="1">
      <!-- Exercise Title -->
      <v-card-title>
        <h2 class="text-h5 text-sm-h4 font-weight-bold">
          {{ item.name }}
        </h2>
      </v-card-title>
      <v-card-text>
        <!-- Exercise Intensity -->
        <p v-if="item.intensity">
          Intensity Level: {{ item.intensity }}
        </p>
        <!-- Exercise Img -->
        <v-img v-if="item.img" :src="item.img" max-width="288px" height="160px" />
        <!-- Exercise Description -->
        <p v-if="item.description">
          {{ item.description }}
        </p>
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
        <div v-if="item.variations" class="d-block">
          <span v-for="variations in item.variations" :key="variations" class="text-caption">{{ variations }}</span>
        </div>
        <!-- Exercise Alternatives -->
        <div v-if="item.alternatives">
          <v-btn v-for="alternatives in item.alternatives" :key="alternatives" elevation="0" @click="selectExercise">
            <span>{{ alternatives }}</span>
          </v-btn>
        </div>
        <!-- Exercise Tags -->
        <div v-if="item.tags">
          <span>Tags:</span>
          <span v-for="tags in item.tags" :key="tags" class="text-caption">{{ tags }}, </span>
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
