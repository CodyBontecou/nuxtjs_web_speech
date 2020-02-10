<template>
  <v-app class="primary">

    <v-app-bar
      app
      color="transparent"
      flat
    >
      <v-spacer></v-spacer>
      <v-toolbar-title>Voice Cards</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-content>
      <nuxt/>
    </v-content>

  </v-app>
</template>

<script>
  import {mapGetters} from 'vuex'

  export default {
    computed: {
      ...mapGetters([]),
      drawer: {
        get() {
          return this.$store.state.drawer
        },
        set(boolean) {
          this.$store.commit('setDrawer', boolean)
        }
      }
    },
  }
</script>
