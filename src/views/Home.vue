<template>
  <div class="home">
    <v-container grid-list-md>
      <v-layout row wrap>
        <v-flex xs12 sm6 md offset-sm1 offset-md3>
          <v-container fluid>
            <v-layout row>
              <v-flex xs12 md12>
                <v-text-field label="Поиск" v-model="searchTerm" color="teal darken-2"></v-text-field>
              </v-flex>

            </v-layout>
          </v-container>
        </v-flex>
        <v-flex v-for="worker in filteredStaff" :key="worker.id" xs12 sm8 md offset-sm1 offset-md2>
          <staff :worker="worker"></staff>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import Staff from '../components/Staff.vue'

export default {
  data() {
    return {
      searchTerm: null
    }
  },

   computed: {
    staff() {
      return this.$store.getters.getStaff;
    },
    filteredStaff() {
      let staff = this.staff;
      if (this.searchTerm)
        staff = staff.filter(
          b =>
            b.name.toLowerCase().indexOf(this.searchTerm.toLowerCase()) >= 0 ||
            b.position
              .toLowerCase()
              .indexOf(this.searchTerm.toLowerCase()) >= 0
        )
      return staff;
    }
  },

  components: {
    Staff
  },
  
};
</script>
