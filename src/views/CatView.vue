<template>
  <div>
    <v-container>
      <v-row class="text-center" justify="center">
        <v-col class="mb-4">
          <h1 class="display-2 font-weight-bold mb-3">
            Cat Page
          </h1>
        </v-col>

        <v-layout row wrap>
          <v-flex 
            v-for="cat in listCats"
            :key="cat.id"
            xs12 
            sm6 
            md4
          >
            <v-card class="cat-item">
              <v-img
                :src="cat.url"
                :alt="cat.id"
                class="cat-image"
              ></v-img>
            </v-card>
          </v-flex>
        </v-layout>

        <v-col class="mt-2">
          <v-btn color="primary" @click="fetchMoreCats">
            fetch more
          </v-btn>
        </v-col>

      </v-row>
    </v-container>  
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  name: 'CatView',
  computed: {
    ...mapState('cat', ['listCats']),
  },
  methods: {
    ...mapActions('cat', ['fetchCats', 'fetchMoreCats']),
  },
  mounted() {
    this.fetchCats();
  },
};
</script>

<style>
.cat-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.cat-item {
  margin-right: 10px;
  margin-left: 10px;
  margin-bottom: 10px;
}

.cat-image {
  width: 100%;
  height: 200px;
}
</style>
