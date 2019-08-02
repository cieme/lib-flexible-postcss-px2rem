const path = require('path');
const ExtractPlugin = require('extract-text-webpack-plugin')
module.exports = {
    mode: "development",
    entry: "./js/index.js",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'dist.js'
    },
    module: {
        rules: [{
            test: /\.scss$/,
            use: ExtractPlugin.extract({
                fallback: "style-loader",
                use: [
                    'css-loader',
                    {
                        loader: 'px2rem-loader',
                        options: {
                            remUni: 75,
                            remPrecision: 8
                        }
                    },
                    'sass-loader',
                ]
            })
        }],

    },
    plugins: [
        new ExtractPlugin('style.css'),
    ],
}