const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
    entry: './src/index.js',
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
                    test: /\.(sa|sc|c)ss$/,
                    use: [
                    //   {
                    //     loader: MiniCssExtractPlugin.loader,
                    //     options: {
                    //     },
                    //   },
                      'style-loader',
                      'css-loader',
                      'sass-loader',
                    ],
                  },
                {
                    test: /\.(png|jp(e*)g|svg)$/,
                    use: ['url-loader']
                }
            ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css',
          }),
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