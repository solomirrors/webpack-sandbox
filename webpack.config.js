const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: "development",
    module: {
        rules: [
            // Loading JavaScript
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            // Loading Images
            {
                test: /\.(png|jpg|jpeg|gif|ico)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            outputPath: 'images',
                            name: '[name]-[sha1:hash:7].[ext]'
                        }
                    }
                ]
            },
            //Loading Fonts
            {
                test: /\.(ttf|otf|eot|woff|woff2)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            outputPath: 'images',
                            name: '[name].[ext]'
                        }
                    }
                ]
            },
            //Loading CSS
            {
                test: /\.(css)$/,
                use: ["style-loader", "css-loader"]
            },
            //Loading SASS/SCSS
            {
                test: /\.(s[ca]ss)$/,
                use: [ "style-loader", "css-loader", "sass-loader"]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Webpack World",
            buildTime: new Date().toString(),
            template: "public/index.html"
        })
    ]
}