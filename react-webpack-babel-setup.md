<!--

npm install react react-dom --save

npm install webpack webpack-cli webpack-dev-server path html-webpack-plugin style-loader css-loader sass-loader node-sass image-webpack-loader file-loader @babel/plugin-proposal-class-properties @babel/core @babel/node @babel/preset-env @babel/preset-react babel-loader --save-dev

.webpack.config.js

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: path.join(__dirname, "src", "index.js"),
    output: { path: path.join(__dirname, "build"), filename: "index.bundle.js" },
    mode: process.env.NODE_ENV || "development",
    resolve: { modules: [path.resolve(__dirname, "src"), "node_modules"] },
    devServer: { contentBase: path.join(__dirname, "src") },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            },
            {
                test: /\.(css|scss)$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
                use: ["file-loader"]
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "src", "index.html"),
        }),
    ],
};

.babelrc

{
    "presets": [
        "@babel/env",
        "@babel/react"
    ],
}
-->
