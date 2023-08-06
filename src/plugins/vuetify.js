import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import colors from 'vuetify/es5/util/colors';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
          light: {
            primary: colors.orange.darken1, // Ubah warna primer di sini
            secondary: colors.teal.darken2, // Ubah warna sekunder di sini
          },
        },
    },
});
