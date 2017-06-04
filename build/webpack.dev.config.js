/**
 * 本地开发环境的构建脚本
 */

var path = require('path')
var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	// 教程: https://doc.webpack-china.org/configuration/entry-context/#entry
	entry: {													// 入口配置
		app: './src/app.main.js',				// 入口脚本
		vendor: ['vue', 'vuex', 'vue-router', 'element-ui'],	// 公共基础脚本
	},
	// 教程: https://doc.webpack-china.org/configuration/output/
	output: {													// 输出配置
		path: path.resolve(__dirname, '../dist'),			// 输出目录
		filename: '[name].js',												// entry脚本的输出的文件名
		publicPath: '/',															// 此输出目录对应的公开 URL
		sourceMapFilename: '[file].map'								// 将sourcemap单独导出
	},
	// 教程: https://doc.webpack-china.org/configuration/resolve/
	resolve: {																			// 配置模块如何解析
		alias: {																			// 创建 import 或 require 的别名
			'vue$': 'vue/dist/vue.esm.js',							// 补充修复vue2与webpack2集成时的bug
			'@': path.resolve(__dirname, '../src')			// 配置绝对地址 basePath
		}
	},
	// 教程: https://doc.webpack-china.org/configuration/module/
	module: {
		rules: [											// 给不同类型的模块文件分配对应的解析器
			{
				test: /\.css$/,
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
				include: [
					path.resolve(__dirname, '../src'),
					path.resolve(__dirname, '../test')
				]
			},
			{
				test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
				loader: 'file-loader',
				options: {
					name: 'assets/images/[name].[ext]'
				}
			},
			{
				test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
				loader: 'file-loader',
				options: {
					name: 'assets/fonts/[name].[ext]'
				}
			},
			{
				test: /favicon\.ico/,
				loader: 'file-loader',
				options: {
					name: '[name].[ext]'
				}
			}
		]
	},
	plugins: [

		// 教程: https://doc.webpack-china.org/plugins/extract-text-webpack-plugin/
		new ExtractTextPlugin('assets/styles/styles.css'),		// 提取样式文件

		// 教程: https://doc.webpack-china.org/guides/code-splitting-libraries/#commonschunkplugin
		new webpack.optimize.CommonsChunkPlugin({	// 内部插件(提取公共 bundle )
			names: ['vendor'] 							// 指定公共 bundle 的名称
		}),

		// 教程: https://doc.webpack-china.org/guides/code-splitting-libraries/#manifest-
		new webpack.optimize.CommonsChunkPlugin({
			name: 'manifest' 								// 优化: 用于公共 bundle 的缓存生效
		}),

		// 教程: https://doc.webpack-china.org/plugins/html-webpack-plugin/
		new HtmlWebpackPlugin({						// 首页模板
			template: path.resolve(__dirname, '../src/index.html'),
			inject: true
		}),
	],

	// 教程: https://doc.webpack-china.org/configuration/devtool/
	// 	    http://www.ruanyifeng.com/blog/2013/01/javascript_source_map.html
	devtool: '#source-map',							// 生成 source map

	// 教程: https://doc.webpack-china.org/configuration/dev-server/
	devServer: {											// 启动本地调试服务器
		contentBase: path.resolve(__dirname, "../dist"),	// 配置根目录
		historyApiFallback: true,					// 使用HTML5 History API
		compress: true,										// 启动gzip压缩
		host: "0.0.0.0",									// 支持局域网访问
		port: 9000,												// 访问端口
		inline: true											// 热部署方式
	}
}
