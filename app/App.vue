<template>
    <div>
        <language-search></language-search>
        <language-list></language-list>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import {Component} from 'vue-property-decorator';

    import LanguageSearchFieldComponent from './components/LanguageSearchFieldComponent.vue';
    import LanguageTypeListComponent from './components/LanguageTypeListComponent.vue';

    @Component({
        components: {
            'language-search': LanguageSearchFieldComponent,
            'language-list': LanguageTypeListComponent
        }
    })
    export default class App extends Vue {
        constructor() {
            super();
        }
    }
</script>