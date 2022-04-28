<template lang="html">
  <v-app>
    <navbar />

    <v-main>
      <h1 class="text-h1 font-weight-bold text-center">
        404
      </h1>
      <v-card class="d-flex justify-center" elevation="0">
        <v-card-title>Oops! Page not found</v-card-title>
      </v-card>
      <v-card elevation="0" max-width="800px" class="mx-auto">
        <v-card-text class="px-10 text-center">
          The page you were looking for doesn't exist. Please try retyping the address or click the link below to return to the home page.
        </v-card-text>
      </v-card>
      <nuxt-link to="/" class="d-flex justify-center text-decoration-none">
        <v-btn>Back to Home</v-btn>
      </nuxt-link>
    </v-main>
  </v-app>
</template>

<script>
export default {
}
</script>
