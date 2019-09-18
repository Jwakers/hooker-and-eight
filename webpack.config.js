const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: {
        main: './src/index.js'
    },
    output: {
        filename: '[name].js',
        path: __dirname + '/docs',
        publicPath: '/'
    },
    module: {
        rules:
            [
                {
                    test: /\.html$/,
                    use: {
                        loader: 'html-loader',
                        options: {
                            minimize: true,
                            interpolate: true }
                    }
                },
                {
                    test: /\.(css|scss)$/,
                    use: ['style-loader', 'css-loader', 'sass-loader']
                },
                {
                    test: /\.(png|jp(e*)g|svg)$/,
                    use: ['url-loader']
                }
            ]
    },
    plugins: [
            new HtmlWebpackPlugin({
                template: './src/index.html',
                filename: 'index.html'
            }),
            new HtmlWebpackPlugin({
                template: './src/menu.html',
                filename: 'menu.html'
            })
    ]
}