<template>
  <v-container grid-list-md v-if="worker">
    <v-layout row wrap>
      <v-flex xs12 xs10 offset-sm1>
        <v-card color="light-green lighten-5" class="mt-4">
          
          <!--  ↓↓↓  desctop version  ↓↓↓  -->
          <div class="hidden-sm-and-down">
            <v-layout row>
              <v-flex xs4 md2 class="align-center">
                <v-img>
                  <v-icon style="font-size:145px">perm_identity</v-icon>
                </v-img>
              </v-flex>

              <v-flex xs-8 md10>
                <v-card-title>
                  <div>
                    <div class="headline font-weight-medium mb-2">{{ worker.name }}</div>
                    <div>
                      <span class="body-2">Position:</span>
                      {{ worker.position }}
                    </div>
                    <div>
                      <span class="body-2">Phone:</span>
                      {{ worker.phone }}
                    </div>
                    <div v-if="worker.programmingLanguages">
                      <span class="body-2">Skills:</span>
                      {{ getWorkerLenguages(worker.programmingLanguages) }}
                    </div>
                    <div>
                      <span class="body-2">Date of Birth:</span>
                      {{ worker.dob }}
                    </div>
                  </div>
                </v-card-title>
              </v-flex>
            </v-layout>
            <v-divider></v-divider>

            <v-layout>
              <v-flex md12>
                <v-card-title>
                  <div>
                    <span class="body-2">Description:</span>
                    <div style="text-align:justify">{{ worker.description }}</div>
                  </div>
                </v-card-title>
              </v-flex>
            </v-layout>
          </div>

          <!--  ↓↓↓  mobile version  ↓↓↓  -->
          <div class="hidden-md-and-up">
            <v-layout row>
              <v-flex xs4 md3>
                <v-img>
                  <v-icon style="font-size:130px">perm_identity</v-icon>
                </v-img>
              </v-flex>
              <v-flex xs-8 md9>
                <v-card-title>
                  <div>
                    <div class="headline">{{ worker.name }}</div>
                    <div>{{ worker.position }}</div>
                    <div v-if="worker.programmingLanguages">
                      <span class="body-2">Skills:</span>
                      {{ getWorkerLenguages(worker.programmingLanguages) }}
                    </div>
                  </div>
                </v-card-title>
              </v-flex>
            </v-layout>
          </div>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  props: {
    id: {
      required: true
    }
  },
  computed: {
    worker() {
      return this.$store.getters.getStaff.find(w => w.id == this.id);
    }
  },
  methods: {
    getWorkerLenguages: programmingLanguages => {
      return programmingLanguages.join(", ");
    }
  }
};
</script>
