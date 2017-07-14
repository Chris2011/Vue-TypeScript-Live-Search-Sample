/**
 *
 * @author Chrl
 */
export class LanguageType {
    private icon: string;
    private languageName: string;
    private fileExt: string;
    private isPluginRequired: boolean;

    constructor(languageName: string, fileExt: string, isPluginRequired: boolean) {
        this.icon = fileExt;
        this.languageName = languageName;
        this.fileExt = fileExt;
        this.isPluginRequired = isPluginRequired;
    }

    public get LanguageName(): string {
        return this.languageName;
    }

    public set LanguageName(value: string) {
        this.languageName = value;
    }
}