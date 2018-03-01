<template>
    <div>
        <ul id="languageTypes">
            <li @click="languageType.setExt(languageType)" v-for="languageType in LanguageTypes">
                <div class="icon" :class="'svg-' + languageType.Icon"></div>
                <div>{{languageType.LanguageName}}</div>
                <div class="file-ext">{{languageType.FileExt && '(.' + languageType.FileExt + ')'}}</div>
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import {Component} from 'vue-property-decorator';

    import {LanguageType} from './model/LanguageType';

    @Component
    export default class LanguageTypeListComponent extends Vue {
//        @Prop()
//        public LanguageTypes: Array<LanguageType>;

        constructor() {
            super();
        }

        public data(): Object {
            return {
                LanguageTypes: [
                    new LanguageType('JavaScript', 'js'),
                    new LanguageType('Java', 'java')
                ]
            };
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