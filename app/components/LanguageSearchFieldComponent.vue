<template>
    <div class="wrapper">
        <input id="languageSearch" v-model="Language" type="text" placeholder="Search available languages..." />
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
//    import {FileType} from '../model/FileType';

    export default class LanguageSerchFieldComponent extends Vue {
    }
</script>

<style lang="scss">
    .wrapper {
        padding: 10px;

        input {
            padding-left: 8px;
            border: 1px solid #c8ccd0;
            border-radius: 2px;
            box-sizing: border-box;
            box-shadow: inset 0 0 1px rgba(145, 153, 161, 0.2), 0 0 0 rgba(255, 255, 255, 0);
            width: 100%;
            color: #6a737c;
            font-size: 16px;
            outline: none;
            height: 32px;
        }
    }
</style>