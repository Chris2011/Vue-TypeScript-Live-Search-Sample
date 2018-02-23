<template>
    <div>
        <div>Test</div>
        <ul id="languageTypes" v-bind="LanguageTypes">
            <li v-on:click="setExt">
                <div class="icon" v-bind:class="`svg-${Icon}`"></div>
                <div v-bind="LanguageName"></div>
                <div class="file-ext" v-bind="FileExt && `(.${FileExt})`"></div>
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import {Component, Prop} from 'vue-property-decorator';

//    import FileType from './model/FileType';

    @Component
    export default class LanguageTypeListComponent extends Vue {
        @Prop()
        LanguageTypes: Array<string>;

        constructor() {
            super();

            this.LanguageTypes = ["Test", "123"];
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