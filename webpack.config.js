const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'docs')
    },
    devtool: 'source-map',
    module: {
        rules:
            [
                {
                    test: /\.html/,
                    use: {
                        loader: 'html-loader',
                        options: {
                            minimize: true,
                            interpolate: true
                        }
                    }
                },
                {
                    test: /\.(scss|css)$/,
                    use: [
                        {
                            loader: MiniCssExtractPlugin.loader,
                            options: {
                                // hmr: process.env.NODE_ENV === 'development'
                            },
                        },
                        'css-loader',
                        {
                            loader: 'postcss-loader',
                            options: {
                                sourceMap: true,
                                config: {
                                    path: 'postcss.config.js'
                                }
                            }
                        },
                        'sass-loader'
                    ],
                },
                {
                    test: /\.(png|jp(e*)g|svg)$/,
                    use: [
                        {
                            loader: 'url-loader',
                            options: {
                                name: '[name].[ext]',
                                limit: 8192,
                                outputPath: 'assets/images'
                            }
                        }]
                },
                {
                    test: /\.pdf$/,
                    use: [{
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'assets'
                        }
                    }]
                }
            ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css'
        }),
        new HtmlWebpackPlugin({
            template: './src/home.html',
            filename: 'index.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/menu.html',
            filename: 'menu.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/about.html',
            filename: 'about.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/offers.html',
            filename: 'offers.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/gallery.html',
            filename: 'gallery.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/find-us.html',
            filename: 'find-us.html'
        })
    ]
}