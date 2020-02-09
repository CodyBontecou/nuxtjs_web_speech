<template>
  <v-container fluid class="fill-height">
    <v-row align="center"
           justify="around"
           style="background-color: blue;"
    >
      <v-col class="shrink" style="background-color: red;">
        <v-card
          class="mx-auto"
          max-width="344"
        >
          <v-card-text>
            <div>Word of the Day</div>
            <p class="display-1 text--primary">
              be•nev•o•lent
            </p>
            <p>adjective</p>
            <div class="text--primary">
              well meaning and kindly.<br>
              "a benevolent smile"
            </div>
          </v-card-text>
          <v-card-actions>
            <v-btn
              text
              color="deep-purple accent-4"
            >
              Learn More
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col class="shrink" style="background-color: green;">
        <v-card
          class="mx-auto"
          max-width="344"
        >
          <v-card-text>
            <div>Word of the Day</div>
            <p class="display-1 text--primary">
              be•nev•o•lent
            </p>
            <p>adjective</p>
            <div class="text--primary">
              well meaning and kindly.<br>
              "a benevolent smile"
            </div>
          </v-card-text>
          <v-card-actions>
            <v-btn
              text
              color="deep-purple accent-4"
            >
              Learn More
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import {mapGetters} from 'vuex'

  export default {
    layout: 'vuetify',
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
    created() {
      this.$vuetify.theme.dark = true
    },
  }
</script>
