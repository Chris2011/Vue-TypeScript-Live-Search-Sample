<template>
    <div>
        <ul id="languageTypes" v-for="languageType in LanguageTypes">
            <!--<li v-on:click="setExt">-->
            <li>
                <div class="icon" v-bind:class="`svg-${languageType.Icon}`"></div>
                <div>{{languageType.LanguageName}}</div>
                <div class="file-ext">{{languageType.FileExt && `(.${languageType.FileExt})`}}</div>
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import {Component, Prop} from 'vue-property-decorator';

    import {FileType} from './model/FileType';
    import {LanguageType} from './model/LanguageType';

    @Component
    export default class LanguageTypeListComponent extends Vue {
        @Prop()
        public LanguageTypes: Array<{LanguageName: string}>;

        constructor() {
            super();
            
            const fileType = new FileType([
                new LanguageType('JavaScript', 'js'),
                new LanguageType('Java', 'java')
            ]);

            this.LanguageTypes = fileType.LanguageTypes;
        }
    }
</script>

<style lang="scss">
    ul {
        list-style: none;
        margin: 0;
        color: darkslategrey;
        padding: 0;
        overflow-y: scroll;
        height: 385px;

        li {
            padding: .25em 0 0 .75em;
            transition: background-color 100ms ease, color 100ms ease;
            display: flex;
            align-items: center;

            .icon {
                width: 16px;
                height: 16px;
                margin-right: .5em;
            }

            .file-ext {
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