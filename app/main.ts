import Vue from 'vue';
//import App from './App.vue';

import App from './App.vue';
//import LanguageTypeListComponent from './components/LanguageTypeListComponent.vue';

new Vue({
    el: '#app',
    render(h) {
        return h('App');
    },
    components: {
        App
    }
});