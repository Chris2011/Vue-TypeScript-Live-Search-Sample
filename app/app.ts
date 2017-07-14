import {FileType} from "./model/FileType";
import {LanguageType} from "./model/LanguageType";
import {LanguageTypesDOMModel} from "./model/LanguageTypesDOMModel";

export class App {
    private fileTypeWindowViewModel: FileType;
    private languageTypesListModel: LanguageTypesDOMModel;

    constructor() {
        this.fileTypeWindowViewModel = new FileType([
            new LanguageType('Assembler', 'asm', false),
            new LanguageType('Batch', 'bat', false),
            new LanguageType('C', 'c', false),
            //            new LanguageType('C#', 'cs', true),
            new LanguageType('C++', 'cpp', false),
            new LanguageType('CSS', 'css', false),
            new LanguageType('Clojure', 'clj', true), // TODO: have to figure out, whether it is possible to have a plugin or not.
            new LanguageType('CoffeeScript', 'coffee', true), // http://plugins.netbeans.org/plugin/39007/coffeescript-netbeans
            new LanguageType('Dockerfile', '', false),
            new LanguageType('Freemarker', 'ftl', true),
            new LanguageType('GLSL', 'glsl', true),
            new LanguageType('Go', 'go', true), // http://plugins.netbeans.org/plugin/62162/go-project
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
            //            new LanguageType('LISP', 'lisp', true),
            new LanguageType('Lua', 'lua', true), // http://plugins.netbeans.org/plugin/52786/lua-glider-netbeans-edition
            new LanguageType('Makefile', '', false),
            new LanguageType('Markdown', 'md', true),
            new LanguageType('Perl', 'pl', true),
            new LanguageType('PHP', 'php', false),
            new LanguageType('PLSQL', 'plsql', true), // http://plugins.netbeans.org/plugin/20922/intelligent-pl-sql-editor
            new LanguageType('Puppet', 'pp', true),
            new LanguageType('Python', 'py', true),
            new LanguageType('R', 'r', true), // https://github.com/mcheung63/Netbeans-R
            new LanguageType('Ruby', 'rb', true),
            //            new LanguageType('Rust', 'rs', true), // https://github.com/drrb/rust-netbeans
            new LanguageType('Sass', 'sass', false),
            new LanguageType('Scala', 'scala', true),
            new LanguageType('Scss', 'scss', false),
            new LanguageType('Smarty', 'tpl', false),
            new LanguageType('SQL', 'sql', false),
            new LanguageType('Shell Script', 'sh', true),
            //            new LanguageType('Tex', 'tex', true),
            new LanguageType('Twig', 'twig', false),
            new LanguageType('TypeScript', 'ts', true),
            //            new LanguageType('TypeScript React', 'tsx', true),
            new LanguageType('Vue', 'vue', true),
            new LanguageType('XML', 'xml', false),
            new LanguageType('XSL', 'xsl', false),
            new LanguageType('YAML', 'yaml', false)
        ]);

        this.languageTypesListModel = new LanguageTypesDOMModel();
    }

    public main(): void {
        this.fileTypeWindowViewModel.Language.subscribe(() => {
            this.languageTypesListModel.init();
        });

        ko.applyBindings(this.fileTypeWindowViewModel);

        this.languageTypesListModel.init();
        this.languageTypesListModel.handleItemSelectionWithArrowKeys();
    }
}