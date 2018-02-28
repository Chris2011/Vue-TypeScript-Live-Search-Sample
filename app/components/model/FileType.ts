//import Vue from 'vue';
import {LanguageType} from './LanguageType';

/**
 *
 * @author Chris
 */
export class FileType {
    private language: LanguageType;
    private languageTypes: Array<LanguageType>;

    constructor(languageTypes: Array<LanguageType>) {
        this.languageTypes = languageTypes;
    }

    //    public bindViewModel(): Vue {
    //        return new Vue({
    //            el: '.wrapper',
    //            data: {
    //                language: this.language,
    //                languageTypes: this.languageTypes
    //            }
    //        });
    //    }

    //        this.languageTypes = () => {
    //            var searchTerm = this.language.toLowerCase();
    //
    //            return ko.utils.arrayFilter(languageTypes, (languageType: LanguageType) => {
    //                return languageType.LanguageName.toLowerCase().indexOf(searchTerm) >= 0;
    //            }).sort((elem1: LanguageType, elem2: LanguageType) => {
    //                if(elem1.LanguageName > elem2.LanguageName) {
    //                    return 1;
    //                } else if(elem1.LanguageName < elem2.LanguageName) {
    //                    return -1
    //                }
    //
    //                return 0;
    //            });
    //            //            }).filter((languageType: LanguageType) => {
    //            //                languageType.LanguageName = this.manipulateString(languageType.LanguageName, searchTerm);
    //            //
    //            //                return languageType;
    //            //            });
    //        };
    //}

    //    private manipulateString(languageName: string, term: string): string {
    //        return term ? languageName.replace(term, `<strong>${term}</strong>`) : languageName
    //    }

    public get Language(): LanguageType {
        return this.language;
    }

    public get LanguageTypes(): Array<LanguageType> {
        return this.languageTypes;
    }
}