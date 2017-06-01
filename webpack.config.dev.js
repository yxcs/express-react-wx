let webpack = require("webpack");
let path = require('path');

var hotMiddlewareScript = 'webpack-hot-middleware/client?reload=true';

module.exports = {
    // 页面入口文件配置
    entry: [
	  './views/index.js',
      hotMiddlewareScript
	],
    // 入口文件输出配置
    output : {
        path : '/public/dist/',
        publicPath: '/dist/',
        filename : 'bundle.js'
    },
    module: {
        // 加载器配置
        loaders: [
          {
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/
          },
          {
            test: /\.css$/,
            loader: 'style-loader!css-loader'
          },
          {
            test: /\.less$/,
            loader: 'style-loader!less-loader'
          },
          {
　　　　　　test: /\.(png|jpg|gif)$/,
　　　　　　loader: 'url-loader?limit=8192&name=assets/[hash:8].[name].[ext]'
　　　　  }
        ]        
    },
    // 其他解决方案配置
    resolve: {
        extensions: ['.js', '.jsx', '.css', '.json'],
    },
    // 插件项
    plugins : [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.DefinePlugin({
          'process.env':{
            'NODE_ENV': JSON.stringify('dev')
          }
       })
    ]
}