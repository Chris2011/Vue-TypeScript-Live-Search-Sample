const CopyWebpackPlugin = require('copy-webpack-plugin'),
SpriteLoaderPlugin = require('svg-sprite-loader/plugin'),
path = require('path');

module.exports = {
    entry: './app/app.ts',
    output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: '/generated/',
        filename: 'app.js'
    },
    module: {
        rules: [{
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        // Since sass-loader (weirdly) has SCSS as its default parse mode, we map
                        // the "scss" and "sass" values for the lang attribute to the right configs here.
                        // other preprocessors should work out of the box, no loader config like this necessary.
                        'scss': 'vue-style-loader!css-loader!sass-loader',
                        'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax',
                        ts: 'babel-loader!ts-loader'
                    }
                    // other vue-loader options go here
                }
            }, {
                // all files with a '.ts' extension will be handled by 'ts-loader'
                test: /\.ts$/,
                loader: 'ts-loader',
                options: {
                    appendTsSuffixTo: [/\.vue$/]
                }
            }, {
                // https://github.com/kisenka/svg-sprite-loader
                test: /\.svg$/,
                loader: 'svg-sprite-loader',
                options: {
                    extract: true,
                    dest: 'dist',
                    spriteFilename: 'sprite.svg'
                }
            }]
    },
    resolve: {
        // Add '.ts' as a resolvable extension.
        extensions: ['.ts', '.js', '.vue', '.json']
    },
    devtool: 'source-map',
    plugins: [
        new CopyWebpackPlugin([{
                from: 'app/index.html',
                to: 'index.html'
            }]),
        new SpriteLoaderPlugin()
    ],
    devServer: {
        compress: true,
        inline: true,
        port: 9000
    }
};