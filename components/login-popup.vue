<template lang="html">
  <v-form v-model="valid">
    <v-container min-width="320px">
      <v-row>
        <v-col
          cols="12"
          class="py-2"
        >
          <v-text-field
            v-model="email"
            :rules="emailRules"
            placeholder="E-mail"
            autofocus
            dense
            required
          />
        </v-col>
        <v-col
          cols="12"
          class="py-2"
        >
          <v-text-field
            v-model="password"
            :rules="passwordRules"
            placeholder="Password"
            dense
            required
          />
        </v-col>
      </v-row>
      <v-row justify="space-around" align="center" align-content="center">
        <v-btn small>
          Submit
        </v-btn>
        <a href="#" class="text-decoration-none">Forgot Password</a>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
export default {
}
</script>
