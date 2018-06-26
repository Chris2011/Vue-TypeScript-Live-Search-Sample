<template>
    <ul id="languageTypes">
        <li @click="chooseExt($event, languageType)" v-bind:key="languageType.LanguageName" v-for="languageType in filteredLanguageTypes">
            <div class="icon" :class="'svg-' + languageType.Icon"></div>
            <div>{{languageType.LanguageName}}</div>
            <div class="small">{{languageType.FileExt && '(.' + languageType.FileExt + ')'}}</div>
            <div class="small" v-if="languageType.IsPluginRequired"> - plugin is required</div>
        </li>
    </ul>
</template>

<script lang="ts">
    import Vue from 'vue';
    import {Component, Watch, Prop} from 'vue-property-decorator';

    import {LanguageType} from './model/LanguageType';
    
    import {KeyCode} from './model/KeyCode';
    
//    this.languageTypesListModel.init();
//        this.languageTypesListModel.handleItemSelectionWithArrowKeys();
//        this.languageTypesListModel.selectFirstElem();

    @Component
    export default class LanguageTypeListComponent extends Vue {
        private languageTypeList: HTMLUListElement | null;
        private languageTypeListItems: NodeListOf<HTMLLIElement> | null;
        private firstListElem: HTMLLIElement | null;
        private lastListElem: HTMLLIElement | null;
        private previousListElem: HTMLLIElement | null;
        private nextListElem: HTMLLIElement | null;
        private selectedElem: HTMLLIElement | null;
            
        @Prop()
        public searchTerm: string;

        public LanguageTypes: Array<LanguageType>;
        public filteredLanguageTypes: Array<LanguageType>;

        constructor() {
            super();

            this.LanguageTypes = [
                new LanguageType('ANTLRv3', 'g', true),
                new LanguageType('ANTLRv4', 'g4', true),
                new LanguageType('Assembler', 'asm', false),
                new LanguageType('Batch', 'bat', false),
                new LanguageType('C', 'c', false),
                new LanguageType('C#', 'cs', true),
                new LanguageType('C++', 'cpp', false),
                new LanguageType('CSS', 'css', false),
                new LanguageType('Clojure', 'clj', true),
                new LanguageType('CoffeeScript', 'coffee', true),
                new LanguageType('Dockerfile', '', false),
                new LanguageType('Freemarker', 'ftl', true),
                new LanguageType('Galen', 'gspec', true),
                new LanguageType('GLSL', 'glsl', true),
                new LanguageType('Go', 'go', true),
                new LanguageType('Groovy', 'groovy', true),
                new LanguageType('HAML', 'haml', true),
                new LanguageType('Handlebars', 'hbs', true),
                new LanguageType('HTML', 'html', false),
                new LanguageType('Ini', 'ini', false),
                new LanguageType('Jade/Pug', 'pug', false),
                new LanguageType('Java', 'java', false),
                new LanguageType('JavaScript', 'js', false),
                new LanguageType('JavaScript React', 'jsx', false),
                new LanguageType('JSP', 'jsp', false),
                new LanguageType('JSON', 'json', false),
                new LanguageType('Kotlin', 'kt', true),
                new LanguageType('Less', 'less', false),
                new LanguageType('LISP', 'lisp', true),
                new LanguageType('Lua', 'lua', true),
                new LanguageType('Makefile', '', false),
                new LanguageType('Markdown', 'md', true),
                new LanguageType('Perl', 'pl', true),
                new LanguageType('PHP', 'php', false),
                new LanguageType('Plain Text', 'txt', false),
                new LanguageType('PLSQL', 'plsql', true),
                new LanguageType('Puppet', 'pp', true),
                new LanguageType('Python', 'py', true),
                new LanguageType('R', 'r', true),
                new LanguageType('Ruby', 'rb', true),
                new LanguageType('Rust', 'rs', true),
                new LanguageType('Sass', 'sass', false),
                new LanguageType('Scala', 'scala', true),
                new LanguageType('Scss', 'scss', false),
                new LanguageType('Smarty', 'tpl', false),
                new LanguageType('SQL', 'sql', false),
                new LanguageType('Shell Script', 'sh', true),
                new LanguageType('Tex', 'tex', true),
                new LanguageType('Twig', 'twig', false),
                new LanguageType('TypeScript', 'ts', true),
                new LanguageType('TypeScript React', 'tsx', true),
                new LanguageType('Vue', 'vue', true),
                new LanguageType('XML', 'xml', false),
                new LanguageType('XSL', 'xsl', false),
                new LanguageType('YAML', 'yaml', false)
            ];

            this.filteredLanguageTypes = this.LanguageTypes;
        }
        
//        public get List(): HTMLUListElement {
//            return this.languageTypeList;
//        }
//
//        public get LanguageTypeListItems(): NodeListOf<HTMLLIElement> {
//            return this.languageTypeListItems;
//        }
//

//        public get FirstListElem(): HTMLLIElement {
//            return this.firstListElem;
//        }
//
//        public get LastListElem(): HTMLLIElement {
//            return this.lastListElem;
//        }
        
        public chooseExt($event: MouseEvent, selectedLanguageType: LanguageType): void {
            this.setSelectedClass($event);
            
            selectedLanguageType.setExt(selectedLanguageType);
        }

        @Watch('searchTerm')
        public filterList(): void {
            this.filteredLanguageTypes = this.LanguageTypes
                .filter((language: LanguageType) => language.LanguageName.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1);
                
            // TODO: Select the first element of the filtered list.
        }

        public mounted(): void {
            this.languageTypeList = this.$el as HTMLUListElement;
            this.languageTypeListItems = this.$el.querySelectorAll('li') as NodeListOf<HTMLLIElement>;
            this.firstListElem = this.$el.firstChild as HTMLLIElement;
            this.lastListElem = this.$el.lastChild as HTMLLIElement;

            this.handleItemSelectionWithArrowKeys();
        }
        
        private moveUp(): void {
            if(this.selectedElem) {
                if(!this.previousListElem) {
                    this.selectedElem.classList.remove('selected');

                    this.selectedElem = this.lastListElem;

                    this.selectedElem.classList.toggle('selected');
                    this.languageTypeList.scrollTop = 800;
                } else {
                    if(this.selectedElem.offsetTop < 450) {
                        this.languageTypeList.scrollTop = (this.getIndexOfElem(this.selectedElem) / this.selectedElem.offsetHeight);
                    }

                    this.selectedElem.classList.remove('selected');

                    this.selectedElem = this.previousListElem;

                    this.selectedElem.classList.toggle('selected');
                }
            } else {
                this.selectedElem = this.lastListElem;

                this.selectedElem.classList.toggle('selected');
                this.languageTypeList.scrollTop = 800;
            }
        }

        private moveDown(): void {
            if(this.selectedElem) {
                if(this.selectedElem.offsetTop > 400) {
                    this.languageTypeList.scrollTop = (this.getIndexOfElem(this.selectedElem) * this.selectedElem.offsetHeight);
                }
                
                if(!this.nextListElem) {
                    this.selectedElem.classList.remove('selected');

                    this.selectedElem = this.firstListElem;

                    this.selectedElem.classList.toggle('selected');
                    this.languageTypeList.scrollTop = 0;
                } else {
                    this.selectedElem.classList.remove('selected');
                    
                    this.selectedElem = this.nextListElem;

                    this.selectedElem.classList.toggle('selected');
                }
            } else {
                this.selectedElem = this.firstListElem;

                this.selectedElem.classList.toggle('selected');
            }
        }
        
        private setSelectedClass($event: MouseEvent): void {
            this.selectedElem = this.$el.querySelector('.selected') as HTMLLIElement;

            if(this.selectedElem) {
                this.selectedElem.classList.toggle('selected');
            }

            this.selectedElem = $event.target as HTMLLIElement;
            this.selectedElem.classList.toggle('selected');
        }
        
        private handleItemSelectionWithArrowKeys(): void {
            document.querySelector('body').addEventListener('keydown', (evt: KeyboardEvent) => {
                this.selectedElem = this.$el.querySelector('.selected') as HTMLLIElement;
                this.previousListElem = this.selectedElem.previousElementSibling as HTMLLIElement;
                this.nextListElem = this.selectedElem.nextElementSibling as HTMLLIElement;
                
                if(evt.key === KeyCode.Up) {
                    evt.preventDefault();

                    this.moveUp();
                } else if(evt.key === KeyCode.Down) {
                    evt.preventDefault();

                    this.moveDown();
                }
            });
        }
        
        private getIndexOfElem(selectedElem: HTMLLIElement): number {
            return [].findIndex.call(this.languageTypeListItems, (elem: HTMLLIElement) => {
                return elem === selectedElem;
            });
        }
        
//        public selectFirstElem(): void {
//            this.inputField.addEventListener('keyup', e => {
//                if(e.key !== KeyCode.Down && e.key !== KeyCode.Up) {
//                    this.selectedElem = document.querySelector('.selected') as HTMLLIElement;
//
//                    if(this.selectedElem) {
//                        this.selectedElem.classList.remove('selected');
//                    }
//
//                    if(!!this.inputField.value) {
//                        this.firstListElem && this.firstListElem.classList.add('selected');
//                    } else {
//                        this.firstListElem && this.firstListElem.classList.remove('selected');
//                    }
//                }
//            });
//        }
    }
</script>

<style lang="scss">
    ul {
        list-style: none;
        margin: 0;
        color: darkslategrey;
        padding: 0;
        padding-bottom: 5px;
        overflow-y: scroll;
        max-height: 385px;

        li {
            padding: .25em 0 0 .75em;
            transition: background-color 100ms ease, color 100ms ease;
            display: flex;
            align-items: center;
            
            div {
                pointer-events: none;
            }

            .icon {
                width: 16px;
                height: 16px;
                margin-right: .5em;
            }

            .small {
                color: grey;
                font-size: 80%;
                margin-left: .3em;
            }

            &:hover {
                background-color: #f5f5f5;
                cursor: pointer;
            }

            &.selected {
                background-color: #2665e5;
                color: #fff;

                .file-ext {
                    color: #ccc;
                }
            }
        }
    }
</style>