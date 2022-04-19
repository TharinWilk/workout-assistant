<template lang="html">
  <article class="">
    <v-container>
      <v-list>
        <v-list-title>
          My Favorites
        </v-list-title>
        <v-list-item v-for="item in favorites" :key="item">
          <v-list-item-content  v-text="exercises[item].name">
          </v-list-item-content>

          <v-list-item-action>
            <v-icon
              color="red darken-1"
              size="20px"
            >
              mdi-close-circle
            </v-icon>
          </v-list-item-action>
        </v-list-item>
      </v-list>
    </v-container>
    <v-container>
        <v-toolbar
          color="blue"
          dark
        >
          <v-toolbar-title>Select Favorites</v-toolbar-title>
          <v-spacer />
          <v-btn icon>
            <v-icon>mdi-magnify</v-icon>
          </v-btn>
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
  </article>
</template>

<script>
import exercises from '~/data/exercises.json'

export default {
  asyncData ({ params }) {
    return {
      exercises,
      search: '',
      favorites: [2]
    }
  }
}
</script>
