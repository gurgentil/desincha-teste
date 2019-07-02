window.Vue = require('vue');

import Navigation from './components/Navigation.vue';
import Carousel from 'vue-owl-carousel';
import { VLazyImagePlugin } from 'v-lazy-image';

Vue.use(VLazyImagePlugin);

let app = new Vue({
    el: '#app',

    components: {
        Carousel,
        Navigation
    }
});
