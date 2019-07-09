import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators';
import { Module as Mod } from 'vuex';

import ILanguageType from '../model/LanguageType';
import store from '.';
import SearchState from './SearchState';

@Module({
    dynamic: true,
    name: 'SearchStore',
    store,
})
export default class SearchStore extends VuexModule {
    private readonly searchState: SearchState;

    constructor(module: Mod<ThisType<{}>, any>) {
        super(module);

        this.searchState = {
            SearchTerm: '',
            SelectedElem: null
        } as SearchState;
    }

    @Action
    public updateSearchTermAction(searchTerm: string): void {
        this.updateSearchTerm({ searchTerm: searchTerm });
    }

    @Action
    public updateSelectedElementAction(selectedElem: ILanguageType): void {
        this.updateSelectedElement({selectedElem: selectedElem});
    }

    public get SearchState(): SearchState {
        return this.searchState;
    }

    @Mutation
    private updateSearchTerm(payload: { searchTerm: string }): void {
        this.searchState.SearchTerm = payload.searchTerm;
    }

    @Mutation
    private updateSelectedElement(payload: { selectedElem: ILanguageType }): void {
        this.searchState.SelectedElem = payload.selectedElem;
    }
}