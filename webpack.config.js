const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')



module.exports = (env = {}) => {
    const { mode = 'development' } = env;
    const isProd = env.mode === 'production';
    const isDev = env.mode === 'development'

    const getStyleLoaders = () => {
        return [
            isProd ? MiniCssExtractPlugin.loader : 'style-loader', 'css-loader'
        ]
    }

    const getPlugins = () => {
        const plugins = [
            new HtmlWebpackPlugin({
                title: "Webpack World",
                buildTime: new Date().toString(),
                template: "public/index.html"
            })
        ];
        if (isProd) {
            plugins.push(new MiniCssExtractPlugin({
                filename: isProd ? 'main-[hash:8].css' : undefined
            }));
        };

        return plugins;
    };

    return {
        mode: isProd ? 'production' : isDev && 'development',
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
                    use: getStyleLoaders()
                },
                //Loading SASS/SCSS
                {
                    test: /\.(s[ca]ss)$/,
                    use: [ ...getStyleLoaders(), "sass-loader"]
                }
            ]
        },
        plugins: getPlugins()
    }
}