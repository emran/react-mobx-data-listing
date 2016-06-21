var path = require('path');
var webpack = require('webpack');

module.exports = {
    //devtool: 'eval',
    entry: [
        //'react-hot-loader/patch',
        //'webpack-dev-server/client?http://localhost:3011',
        //'webpack/hot/only-dev-server',
        './app/app'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                drop_debugger: true
            },
            output: {
                ascii_only: true,
                comments: false
            }
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"production"'
        })
    ],
    module: {
        loaders: [{
            test: /\.js$/,
            loaders: ['babel'],
            include: path.join(__dirname, 'app')
        }]
    }
};