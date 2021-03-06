const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const path = require("path");

module.exports = {
    entry: {
        index: "./src/scripts/index.js",
        home: "./src/scripts/home-page-index.js",
        gallery: "./src/scripts/gallery-index.js"
    },
    output: {
        filename: "[name].bundle.js?v=[contenthash]",
        path: path.resolve(__dirname, "docs"),
    },
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.html$/,
                use: {
                    loader: "html-loader?attrs[]=video:src",
                    options: {
                        minimize: true,
                        interpolate: true,
                    },
                },
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
                    "css-loader",
                    {
                        loader: "postcss-loader",
                        options: {
                            sourceMap: true,
                            config: {
                                path: "postcss.config.js",
                            },
                        },
                    },
                    "sass-loader",
                ],
            },
            {
                test: /\.(mov|mp4)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "[name].[ext]",
                            outputPath: "assets/video"
                        },
                    },
                ],
            },
            {
                test: /\.(png|jp(e*)g|svg)$/,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            name: "[folder]/[name].[ext]",
                            limit: 8192,
                            outputPath: "assets/images",
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].css?v=[contenthash]",
        }),
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: "index.html",
            excludeChunks: ["gallery"]
        }),
        // new HtmlWebpackPlugin({
        //     template: "./src/legacy-landing.html",
        //     filename: "index.html",
        // }),
        new HtmlWebpackPlugin({
            template: "./src/about.html",
            filename: "about.html",
            excludeChunks: ["home", "gallery"]
        }),
        new HtmlWebpackPlugin({
            template: "./src/gallery.html",
            filename: "gallery.html",
            excludeChunks: ["home"]
        }),
        new HtmlWebpackPlugin({
            template: "./src/find-us.html",
            filename: "find-us.html",
            excludeChunks: ["home", "gallery"]
        }),
        new HtmlWebpackPlugin({
            template: "./src/openside.html",
            filename: "openside.html",
            excludeChunks: ["home", "gallery"]
        }),
        new CleanWebpackPlugin(),
    ],
};
