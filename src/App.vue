<template>
  <v-app>
    <v-main class="blue-grey darken-1 lighten-1">
      <appbar></appbar>
    <!-- <v-main> -->
      <router-view></router-view>
    <!-- </v-main> -->
    </v-main>
    <footerr></footerr>
  </v-app>
</template>

<script>
import Appbar from '../src/components/Appbar.vue';
import Footerr from '../src/components/Footer.vue';
export default {
  name: 'App',
  components:{
    Appbar,
    Footerr
    // Cards
  },
  data: () => ({
    //
  }),
};
</script>
