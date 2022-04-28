<template lang="html">
  <v-container>
    <v-form>
      <v-card min-width="320px" flat>
        <v-row>
          <!-- First Name -->
          <v-col
            cols="12"
            class="py-2"
          >
            <v-text-field
              v-model="firstName"
              label="First name"
              autofocus
              dense
              required
            />
          </v-col>
          <!-- Last Name -->
          <v-col
            cols="12"
            class="py-2"
          >
            <v-text-field
              v-model="lastName"
              label="Last name"
              dense
              required
            />
          </v-col>
          <!-- Email -->
          <v-col
            cols="12"
            class="py-2"
          >
            <v-text-field
              v-model="email"
              label="E-mail"
              dense
              required
            />
          </v-col>
          <!-- Passowrd -->
          <v-col
            cols="12"
            class="py-2"
          >
            <v-text-field
              v-model="password"
              label="Passowrd"
              dense
              required
            />
          </v-col>
        </v-row>
        <!-- Submit Button -->
        <v-row justify="space-around" align="center" align-content="center">
          <v-btn small @click="changeUsername">
            Submit
          </v-btn>
        </v-row>
      </v-card>
    </v-form>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    }
  },
  methods: {
    changeUsername () {
      this.$store.dispatch('changeUsername', this.email)
    }
  }
}
</script>
