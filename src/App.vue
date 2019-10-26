<template>
  <v-app>
    <Header></Header>

    <v-content>
      <Home />
      <v-snackbar color="green" v-model="snackbar">
        {{ $t('LNG_WIP')}}
        <v-btn text>Close</v-btn>
      </v-snackbar>
    </v-content>
  </v-app>
</template>

<script>
import Header from "@/components/Header";
import Home from "@/views/Home";
export default {
  name: "App",
  components: {
    Header,
    Home
  },
  data: () => ({
    snackbar: true
  })
};
</script>
