
window.Vue = require('vue');
window.axios = require('axios');

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
let token = document.head.querySelector('meta[name="csrf-token"]');
if (token) {
    window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
}

import Vuetify from 'vuetify';

Vue.use(Vuetify);

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component('example-header', require('./components/ExampleHeader.vue').default);
Vue.component('admin-layout', () => import('./components/AdminLayout.vue'));
Vue.component('breadcrumbs', () => import('./components/Breadcrumbs.vue'));

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
    vuetify: new Vuetify(),
    mounted: function () {
        this.endPreload()
    },
    methods: {
        endPreload(){
            document.querySelector('#loader .preloader-wrapper').classList.remove('active');
            document.querySelector('#loader').classList.add('loaded');
        }
    },
});