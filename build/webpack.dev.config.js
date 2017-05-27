var path = require('path')
var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var utils = require('./utils')
var config = require('../config')

// var vueLoaderConfig = require('./vue-loader.conf')

module.exports = {
	// devtool: 'cheap-eval-source-map',
	entry: {
		app: './src/app.main.js',
		vendor: ['vue', 'vuex', 'vue-router']
	},
	output: {
		path: path.resolve(__dirname, '../dist'),
		filename: '[name].js',
		publicPath: '/'
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				// use: [ 'style-loader', 'css-loader' ]
				use: ExtractTextPlugin.extract({
					fallback: "style-loader",
					use: 'css-loader'
            	})
			},
			{
				test: /\.vue$/,
				loader: 'vue-loader'
			},
			{
				test: /\.js$/,
				loader: 'babel-loader',
				include: [path.resolve(__dirname, '../src'), path.resolve(__dirname, '../test')]
			},
			{
				test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
				loader: 'file-loader',
				options: {
					name: path.resolve(__dirname, '../dist/[path][name].[ext]')
				}
			},
			{
				test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
				loader: 'url-loader',
				options: {
					name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
				}
			}
		]
	},
	plugins: [

		// 教程: https://doc.webpack-china.org/plugins/extract-text-webpack-plugin/
		new ExtractTextPlugin('styles.css'),		// 提取文本

		// 教程: https://doc.webpack-china.org/guides/code-splitting-libraries/#commonschunkplugin
		new webpack.optimize.CommonsChunkPlugin({	// 内部插件(提取公共 bundle )
			name: 'vendor' 							// 指定公共 bundle 的名称
		}),

		// 教程: https://doc.webpack-china.org/guides/code-splitting-libraries/#manifest-
		new webpack.optimize.CommonsChunkPlugin({
			name: 'manifest' 						// 优化: 用于公共 bundle 的缓存生效
		}),

		// 教程: https://doc.webpack-china.org/plugins/html-webpack-plugin/
		new HtmlWebpackPlugin({						// index模板
			filename: 'index.html',
			template: path.resolve(__dirname, '../src/index.html'),
			favicon: path.resolve(__dirname, '../src/favicon.png'),
			title: 'Webpack App',
			inject: true
		}),
	]
	// resolve: {
	// 	extensions: ['.js', '.vue', '.json'],
	// 	alias: {
	// 		'vue$': 'vue/dist/vue.esm.js',
	// 		'@': resolve('src')
	// 	}
	// },
	// // cheap-module-eval-source-map is faster for development
	// devtool: '#cheap-module-eval-source-map',
	// plugins: [
	// 	// https://github.com/glenjamin/webpack-hot-middleware#installation--usage
	// 	new webpack.HotModuleReplacementPlugin(),
	// 	new webpack.NoEmitOnErrorsPlugin(),
	// 	// https://github.com/ampedandwired/html-webpack-plugin
	// 	new FriendlyErrorsPlugin()
	// ]
}
