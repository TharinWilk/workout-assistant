<template>
  <v-container>
    <v-form>
      <v-card min-width="320px" flat>
        <v-row>
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
        <v-row justify="space-around" align="center" align-content="center">
          <v-btn small @click="changeUsername">
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
