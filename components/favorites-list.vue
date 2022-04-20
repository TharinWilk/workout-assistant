<template lang="html">
  <v-container>
    <v-list v-if="favorites.length > -1">
      <v-list-title class="">
        <h2 class="text-h4 text-center py-2">
          My Favorites
        </h2>
      </v-list-title>
      <v-card v-for="item in favorites" :key="item" class="my-1">
        <v-list-item>
          <v-list-item-content v-text="exercises[item].name" />
          <v-list-item-action>
            <v-icon
              color="red darken-1"
              size="20px"
              @click="removeFavorite(item)"
            >
              mdi-close-circle
            </v-icon>
          </v-list-item-action>
        </v-list-item>
      </v-card>
    </v-list>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  props: ['exercises'],
  computed: {
    ...mapGetters({
      favorites: 'favorites'
    })
  },
  methods: {
    removeFavorite (item) {
      const newList = this.favorites.filter((number) => {
        return item !== number
      })
      this.updateFavorites(newList)
    },
    updateFavorites (list) {
      this.$store.dispatch('updateFavorites', list)
    }
  }
}
</script>

<style lang="css" scoped>
</style>
