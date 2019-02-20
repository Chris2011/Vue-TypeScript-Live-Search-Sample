<template>
    <div>
        <language-search @search-for-lang="updateSearchTerm" :selectedElem="itemsAvailable"></language-search>
        <language-list :searchTerm="searchTerm" @clearSearch="clearSearchTerm"></language-list>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import {Component} from 'vue-property-decorator';

    import LanguageTypeSearchFieldComponent from './LanguageTypeSearchFieldComponent/LanguageTypeSearchFieldComponent.vue';
    import LanguageTypeListComponent from './LanguageTypeListComponent/LanguageTypeListComponent.vue';

    @Component({
        components: {
            'language-search': LanguageTypeSearchFieldComponent,
            'language-list': LanguageTypeListComponent
        }
    })
    export default class App extends Vue {
        public searchTerm: string;
        public itemsAvailable: boolean

        constructor() {
            super();

            this.searchTerm = '';
            this.itemsAvailable = true;
        }

        public updateSearchTerm(value: string): void {
            this.searchTerm = value;
        }
        
        public clearSearchTerm(): void {
            this.searchTerm = '';
            this.itemsAvailable = false;
        }
    }
</script>