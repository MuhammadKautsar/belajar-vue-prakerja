<template>
  <!-- <div class="about">
    <h1>This is an about page</h1>
  </div> -->
  <about-component />
</template>

<script>
  import AboutComponent from '../components/AboutComponent'

  export default {
    name: 'AboutView',

    components: {
      AboutComponent,
    },
  }
</script>