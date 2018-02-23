const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry: {
        demoMinimalMenu: './src/demo/minimal-map-ui.js',
        main: './src/index.js',
    },
    devtool: 'source-map',
    devServer: {contentBase: './dist'},
    plugins: [

        new HtmlWebpackPlugin({
            title: 'Demo minimal menu',
            template: './src/index.html',
            filename: './dist/demo/minimal-map-ui.html',
            chunks: ['demoMinimalMenu']
        })
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.json/,
                use: [
                    'json-loader'
                ]
            },
            {
                test: /\.css$/,
                use: [
                    {loader: 'style-loader'},
                    {loader: 'css-loader',options:{url:false}}
                ]
            }]
    }
};