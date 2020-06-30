// var path = require('path');
// var HtmlWebpackPlugin = require('html-webpack-plugin');
// var MiniCssExtractPlugin = require('mini-css-extract-plugin');
//
// module.exports = {
// 	mode: 'none', // production, development, none
// 	entry: './src/index.js',
// 	devServer: {
// 		port: 9000,
// 	},
// 	output: {
// 		path: path.resolve(__dirname, 'dist'),
// 		filename: 'main.bundle.js',
// 	},
// 	module: {
// 		rules: [
// 			{
// 				test: /\.m?js$/,
// 				exclude: /(node_modules|bower_components)/,
// 				use: {
// 					loader: 'babel-loader',
// 					options: {
// 						presets: ['@babel/preset-env'],
// 						plugins: ['@babel/plugin-proposal-class-properties'],
// 					},
// 				},
// 			},
// 			{
// 				test: /\.css$/,
// 				use: [{ loader: MiniCssExtractPlugin.loader }, 'css-loader'],
// 			},
// 		],
// 	},
// 	plugins: [
// 		new HtmlWebpackPlugin({
// 			template: 'index.html',
// 		}),
// 		new MiniCssExtractPlugin(),
// 	],
// 	resolve: {
// 		alias: {},
// 		extensions: ['*', '.js', '.json'],
// 	},
// 	stats: {
// 		colors: true,
// 	},
// 	devtool: 'source-map',
// };
