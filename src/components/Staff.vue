<template>  
  <v-card color="light-green lighten-5">
    <v-container fluid>

      <!--  ↓↓↓  desctop version  ↓↓↓  -->
      <v-layout row class="hidden-sm-and-down">
        <v-flex xs4 md3>
          <v-img>
            <v-icon style="font-size:145px">perm_identity</v-icon>
          </v-img>
        </v-flex>

        <v-flex xs-8 md9>
          <v-card-title>
            <div>
              <div class="headline font-weight-medium">{{ worker.name }}</div>
              <div> <span class="body-2 ">Position:</span> {{ worker.position }}</div>
              <div v-if="worker.programmingLanguages">
                <span class="body-2">Skills:</span> {{ getWorkerLenguages(worker.programmingLanguages) }}
              </div>
            </div>
          </v-card-title>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn round small dark color="teal darken-2" :to="{name: 'worker', params: {id: worker.id}}">Открыть</v-btn>
          </v-card-actions>
        </v-flex>
      </v-layout>

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
                <span class="body-2">Skills:</span> {{ getWorkerLenguages(worker.programmingLanguages) }}
              </div>
              </div>
            </v-card-title>
            <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn round small dark color="teal darken-2" :to="{name: 'worker', params: {id: worker.id}}">Открыть</v-btn>
          </v-card-actions>
          </v-flex>
        </v-layout>
      </div>

    </v-container>
  </v-card>

</template>

<script>
export default {
  props: {
    worker: {
      type: Object,
      required: true
    }
  },
  methods: {
    getWorkerLenguages: (programmingLanguages) => {
      return programmingLanguages.join(", ")
    }
  }
};
</script>
