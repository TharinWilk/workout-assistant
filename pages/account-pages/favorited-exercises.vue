<template lang="html">
  <article class="">
    <v-card class="py-10 grey darken-4" dark>
      <h1 class="text-center text-h2 font-weight-bold">
        Favorited Exercises
      </h1>
    </v-card>
    <favorites-list :exercises="exercises" />
    <favorites-selector :exercises="exercises" />
  </article>
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
    removeFavorite (item) {
      this.favorites = this.favorites.filter((number) => {
        return item !== number
      })
      this.updateFavorites()
    },
    updateFavorites () {
      this.$store.dispatch('updateFavorites', this.favorites)
    }
  }
}
</script>
