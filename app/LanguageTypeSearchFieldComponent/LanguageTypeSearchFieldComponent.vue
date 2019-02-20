<template>
    <div class="wrapper">
        <input id="languageSearch" v-model="searchTerm" type="text" @keyup="emitSearchTerm" @keydown.enter="deleteValue" placeholder="Search available languages..." />
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import {Component, Emit, Prop} from 'vue-property-decorator';
    
    import {ILanguageType} from '../shared/model/LanguageType';

    @Component
    export default class LanguageTypeSerchFieldComponent extends Vue {
        private searchTerm: string;
        private searchField: HTMLInputElement;
        
        @Prop()
        public selectedElem: ILanguageType;

        constructor() {
            super();
            
            this.searchTerm = '';
        }

        public mounted(): void {
            this.searchField = this.$el.querySelector('#languageSearch') as HTMLInputElement;
            
            this.searchField.focus();
            this.alwaysSetFocusOnClick();
            this.alwaysSetFocusOnArrowNavigation();
        }

        @Emit('search-for-lang')
        public emitSearchTerm(): string {
            return this.searchTerm;
        }

        private alwaysSetFocusOnClick(): void {
            window.addEventListener('click', (evt: MouseEvent) => {
                this.searchField.focus();

                if (this.selectedElem) {
                    this.searchField.value = '';
                }
            });
        }
        
        public deleteValue(): void {
//            console.log(this.selectedElem);
            if (this.selectedElem) {
//                this.searchField.value = '';
                this.searchTerm = '';
            }
        }
        
        private alwaysSetFocusOnArrowNavigation(): void {
//            const languageTypes: HTMLUListElement = document && document.querySelector('#languageTypes');
//            
//            if (languageTypes && languageTypes.querySelectorAll('li').length > 0) {
                window.addEventListener('keydown', (evt: KeyboardEvent) => {
                    this.searchField.focus();
                });
//            }
        }
    }
</script>

<style lang="scss">
    .wrapper {
        padding: 8px;

        input {
            padding-left: 8px;
            border: 1px solid #c8ccd0;
            border-radius: 2px;
            box-sizing: border-box;
            box-shadow: inset 0 0 1px rgba(145, 153, 161, 0.2), 0 0 0 rgba(255, 255, 255, 0);
            width: 100%;
            color: #6a737c;
            font-size: 14px;
            outline: none;
            height: 28px;
        }
    }
</style>