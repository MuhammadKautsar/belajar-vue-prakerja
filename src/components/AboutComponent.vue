<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
      </v-col>

      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          About Page
        </h1>

        <p class="subheading font-weight-regular">
          Aplikasi web ini menampilkan gambar-gambar kucing dari The Cat API
        </p>

        <p class="subheading font-weight-regular">
          Dibuat oleh Muhammad Kautsar
        </p>
      </v-col>

      <v-col
        class="mb-5"
        cols="12"
      >
        <h2 class="headline font-weight-bold mb-3">
          Mari Terhubung
        </h2>

        <v-row justify="center">
          <a
            v-for="(next, i) in whatsNext"
            :key="i"
            :href="next.href"
            class="subheading mx-3"
            target="_blank"
          >
            {{ next.text }}
          </a>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'AboutComponent',

    data: () => ({
      whatsNext: [
        {
          text: 'Github',
          href: 'https://github.com/MuhammadKautsar',
        },
        {
          text: 'LinkedIn',
          href: 'https://www.linkedin.com/in/mhd-kautsar/',
        },
        {
          text: 'Instagram',
          href: 'https://www.instagram.com/muhamad_kausar/',
        },
      ],
    }),
  }
</script>
