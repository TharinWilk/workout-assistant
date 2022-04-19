<template lang="html">
  <nav>
    <v-toolbar dense class="mt-13 d-flex justify-center">
      <v-sheet max-width="100vw" class="d-block d-sm-none">
        <v-slide-group show-arrows>
          <v-slide-item v-for="link in categories" :key="link.route">
            <v-btn text router :to="link.route">
              {{ link.name }}
            </v-btn>
          </v-slide-item>
        </v-slide-group>
      </v-sheet>
      <v-list class="d-none d-sm-flex pa-0" min-height="48px">
        <v-list-item v-for="link in categories" :key="link.route" router :to="link.route">
          <v-list-item-title>
            {{ link.name }}
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-toolbar>
  </nav>
</template>

<script>
export default {
  data () {
    return {
      categories: [
        { name: 'Cardio', route: '/exercise-guide/cardio-exercises' },
        { name: 'Resistance', route: '/exercise-guide/resistance-exercises' },
        { name: 'Mobility', route: '/exercise-guide/mobility-exercises' },
        { name: 'Agility', route: '/exercise-guide/agility-exercises' },
        { name: 'Balance', route: '/exercise-guide/balance-exercises' },
        { name: 'Power', route: '/exercise-guide/power-exercises' }
      ]
    }
  }
}
</script>
