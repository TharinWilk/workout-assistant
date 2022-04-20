<template lang="html">
  <article class="">
    <exercise-search-bar :exercises="exercises" />
    <exercise-info />
    <v-container>
      <h2>Exercise categories</h2>
      <v-row class="flex flex-wrap">
        <v-card
          v-for="category in categories"
          :key="category.name"
          hover
          router
          :to="category.route"
          class="my-5 pa-0 col-md-6 col-xl-4"
        >
          <v-img :src="category.img" height="200px" gradient="rgba(0, 0, 0, .4), rgba(0, 0, 0, .5)" dark>
            <v-card-title class="font-weight-bold text-h3">
              {{ category.name }}
            </v-card-title>
            <v-card-text class="subtitle-1">
              {{ category.examples }}
            </v-card-text>
          </v-img>
        </v-card>
      </v-row>
    </v-container>
  </article>
</template>

<script>
import exercises from '~/data/exercises.json'

export default {
  layout: 'exercise-guide-layout',
  asyncData ({ params }) {
    return {
      exercises
    }
  },
  data () {
    return {
      categories: [
        { name: 'Cardio', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa8goXfcMCDdQIsPUqPacLgKr8SZSVr3JqPg&usqp=CAU', examples: 'Running, Biking, Swimming, and more...', route: '/exercise-guide/cardio-exercises' },
        { name: 'Resistance', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOEGRPZFraUGMg-k_yjuX8NjAod9THhTY8Cg&usqp=CAU', examples: 'Calisthenics, Free Weights, Resistance Bands, and more...', route: '/exercise-guide/resistance-exercises' },
        { name: 'Mobility', img: 'https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1024-512,f_auto,q_auto:best/newscms/2018_33/2533921/180816-stock-yoga-stretch-hands-back-ew-443p.jpg', examples: 'Static Stretchs, Yoga, Dynamic Stretchs, and more...', route: '/exercise-guide/mobility-exercises' },
        { name: 'Agility', img: 'https://www.rigsfitness.co.uk/wp-content/uploads/2018/10/agility.jpeg', examples: 'Ladder Drills, Plyometrics, Dot Drills, and more...', route: '/exercise-guide/agility-exercises' },
        { name: 'Balance', img: 'https://usantc.com/wp-content/uploads/2019/10/iStock-651470728.jpg', examples: ' Yoga, Tai Chi, Stability Ball, and more...', route: '/exercise-guide/balance-exercises' },
        { name: 'Power', img: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2VpZ2h0JTIwbGlmdGluZ3xlbnwwfHwwfHw%3D&w=1000&q=80', examples: ' Olympic Lifting, Plyometrics,  Kettlebell, and more...', route: '/exercise-guide/power-exercises' }
      ]
    }
  }
}
</script>
