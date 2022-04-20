<template lang="html">
  <article class="">
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
