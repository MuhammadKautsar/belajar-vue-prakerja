<template>
  <div>
    <hello-world />
    <v-row justify="center">
      <v-btn
        href="/cat"
        color="primary"
      >
        <span>Ayo Lihat</span>
      </v-btn>
    </v-row>
  </div>
</template>

<script>
  import HelloWorld from '../components/HelloWorld'

  export default {
    name: 'HomeView',

    components: {
      HelloWorld,
    },
  }
</script>
