import Vue from 'vue';

import LanguageSearchFieldComponent from './components/LanguageSearchFieldComponent.vue';
import LanguageTypeListComponent from './components/LanguageTypeListComponent.vue';

new Vue({
    el: '#app',
    components: {
        LanguageSearchFieldComponent,
        LanguageTypeListComponent
    }
});