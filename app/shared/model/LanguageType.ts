/**
 *
 * @author Chrl
 */
 
export interface ILanguageType {
     Icon: string;
     LanguageName: string;
     FileExt: string;
     IsPluginRequired: boolean;
     IsSelected: boolean;
 }
 
export class LanguageType implements ILanguageType {
    private icon: string;
    private languageName: string;
    private fileExt: string;
    private isPluginRequired: boolean;
    private isSelected: boolean;

    constructor(languageName: string, fileExt: string, isPluginRequired: boolean = false) {
        this.icon = fileExt || languageName;
        this.languageName = languageName;
        this.fileExt = fileExt || languageName;
        this.isPluginRequired = isPluginRequired;
    }

    public get Icon() {
        return this.icon.toLowerCase();
    }

    public get LanguageName(): string {
        return this.languageName;
    }

    public set LanguageName(value: string) {
        this.languageName = value;
    }

    public get FileExt(): string {
        return this.fileExt.toLowerCase();
    }

    public get IsPluginRequired(): boolean {
        return this.isPluginRequired;
    }
    
    public get IsSelected(): boolean {
        return this.isSelected;
    }
    
    public set IsSelected(value: boolean) {
        this.isSelected = value;
    }

    public setExt(languageType: LanguageType): void {
        console.log(`Chosen extension - ${languageType.FileExt}`);
    }
}