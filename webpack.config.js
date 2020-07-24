const path = require('path');
module.exports = {
    entry: './src/index.tsx',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
    },
    // devtool: 'cheap-module-eval-source-map',
    resolve: {
        extensions: ['*', '.js', '.ts', '.tsx']
    },
    module: {
        rules: [
            { 
                test: /\.tsx?$/, 
                loader: "ts-loader" 
            },
            {
                test: /\.scss$/,
                use: [{
                    loader: 'style-loader'
                }, {
                    loader: 'postcss-loader',
                    options:{
                        config: {
                            path: 'postcss.config.js'
                          }
                    }
                }, {
                    loader: 'sass-loader'
                }]
            }
        ]
    },
    devServer: {
        port: 9000,
        open: true,
        historyApiFallback: true
    }
}