<template>
  <v-container>
    <v-form>
      <v-card min-width="320px" flat>
        <!-- Inputs -->
        <v-row>
          <!-- Email -->
          <v-col
            cols="12"
            class="py-2"
          >
            <v-text-field
              v-model="email"
              placeholder="E-mail"
              autofocus
              dense
              required
            />
          </v-col>
          <!-- Password -->
          <v-col
            cols="12"
            class="py-2"
          >
            <v-text-field
              v-model="password"
              placeholder="Password"
              dense
              required
            />
          </v-col>
        </v-row>
        <!-- Links -->
        <v-row justify="space-around" align="center" align-content="center">
          <!-- Button -->
          <v-btn small @click="changeUsername">
            Submit
          </v-btn>
          <!-- Forgot Password Link -->
          <a href="#" class="text-decoration-none">Forgot Password</a>
        </v-row>
      </v-card>
    </v-form>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
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
