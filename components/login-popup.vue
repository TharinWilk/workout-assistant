<template>
  <v-container>
    <v-form v-model="valid">
      <v-card min-width="320px" flat>
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
      </v-card>
    </v-form>
  </v-container>
</template>

<script>
export default {
}
</script>
