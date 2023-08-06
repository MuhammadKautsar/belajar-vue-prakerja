<template>
  <v-container>
    <v-row class="text-center">
      <v-col class="mt-4" cols="12">
        <v-img
          :src="require('../assets/cat1.png')"
          class="my-3"
          contain
          height="200"
        />
      </v-col>

      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          Welcome to <span class="caturday-text">Caturday</span>
        </h1>

        <p class="subheading font-weight-regular">
          Ingin melihat gambar-gambar kucing yang lucu dan mengemaskan
          <br>disinilah tempatnya
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'HelloWorld',
  }
</script>

<style>
.caturday-text {
  color: #ff6600;
}
</style>
