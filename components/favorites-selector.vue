<template lang="html">
  <v-container>
    <v-toolbar
      color="blue"
      dark
    >
      <v-toolbar-title>Select Favorites</v-toolbar-title>
      <v-spacer />
      <v-tooltip left>
        <template #activator="{ on, attrs }">
          <v-btn icon @click="toggleSelectAll" v-bind="attrs" v-on="on">
            <v-icon>mdi-checkbox-multiple-outline</v-icon>
          </v-btn>
        </template>
        <span v-if="favorites.length < exercises.length">Select All</span>
        <span v-if="favorites.length === exercises.length">Unselect All</span>
      </v-tooltip>
    </v-toolbar>
    <v-list two-line>
      <v-list-item-group
        v-model="favorites"
        active-class="blue--text"
        multiple
      >
        <template v-for="exercise in exercises">
          <v-list-item :key="exercise.name">
            <template #default="{ active }">
              <v-list-item-content>
                <v-list-item-title v-text="exercise.name" />
                <v-list-item-subtitle
                  class="text--primary"
                  v-text="exercise.tags[0]"
                />
                <v-list-item-subtitle v-for="item in exercise.variations" :key="item">
                  <span v-if="!item.name">{{ item }}</span>
                  <span v-if="item.name">{{ item.name }}</span>
                </v-list-item-subtitle>
              </v-list-item-content>
              <v-list-item-action>
                <v-icon
                  v-if="!active"
                  color="grey lighten-1"
                >
                  mdi-star-outline
                </v-icon>
                <v-icon
                  v-else
                  color="yellow darken-3"
                >
                  mdi-star
                </v-icon>
              </v-list-item-action>
            </template>
          </v-list-item>
          <v-divider
            v-if="exercise < exercise.length - 1"
            :key="exercise"
          />
        </template>
      </v-list-item-group>
    </v-list>
  </v-container>
</template>

<script>
export default {
  props: ['exercises'],
  data () {
    return {
      toggleSearch: false,
      search: ''
    }
  },
  computed: {
    favorites: {
      get () {
        return this.$store.state.favorites
      },
      set (selected) {
        return this.$store.dispatch('updateFavorites', selected)
      }
    }
  },
  methods: {
    toggleSelectAll () {
      if (this.$store.state.favorites.length === this.exercises.length) {
        const array = []
        this.$store.dispatch('updateFavorites', array)
      } else {
        const array = []
        let i = 0
        this.exercises.forEach((exercise) => {
          array.push(i)
          i++
        })
        this.$store.dispatch('updateFavorites', array)
      }
    }
  }
}
</script>

<style lang="css" scoped>
</style>
