<template>
  <v-app>
    <AppHeader></AppHeader>
    <v-content class="green lighten-5">
      <router-view/>
    </v-content>
    <AppFooter></AppFooter>
  </v-app>
</template>

<script>
import AppHeader from "@/components/AppHeader";
import AppFooter from "@/components/AppFooter";

export default {
  components: {
    AppHeader,
    AppFooter
  }
};
</script>
