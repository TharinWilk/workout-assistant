<template lang="html">
  <v-container>
    <v-form v-model="valid">
      <v-card min-width="320px" flat>
        <v-row>
          <v-col
            cols="12"
            class="py-2"
          >
            <v-text-field
              v-model="firstname"
              :rules="nameRules"
              label="First name"
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
              v-model="lastname"
              :rules="nameRules"
              label="Last name"
              dense
              required
            />
          </v-col>
          <v-col
            cols="12"
            class="py-2"
          >
            <v-text-field
              v-model="email"
              :rules="emailRules"
              label="E-mail"
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
              label="Passowrd"
              dense
              required
            />
          </v-col>
        </v-row>
        <v-row justify="space-around" align="center" align-content="center">
          <v-btn small>
            Submit
          </v-btn>
        </v-row>
      </v-card>
    </v-form>
  </v-container>
</template>

<script>
export default {
}
</script>
