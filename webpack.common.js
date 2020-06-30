const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	entry: {
		app: './src/index.js',
	},
	module: {
		rules: [
			{
				test: /\.m?js$/,
				exclude: /(node_modules)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env'],
						plugins: ['@babel/plugin-proposal-class-properties'],
					},
				},
			},
			{
				test: /\.css$/,
				use: [{ loader: MiniCssExtractPlugin.loader }, 'css-loader'],
			},
			{
				test: /\.(png|jpg|jpeg|gif|svg)$/,
				loader: 'file-loader',
				options: {
					name: '[name].[ext]?[hash]',
				},
			},
			// {
			// 	test: /\.(ico|png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
			// 	loader: 'url-loader',
			// 	options: {
			// 		name: '[hash].[ext]',
			// 		limit: 10000,
			// 	},
			// },
		],
	},
	plugins: [
		// new CleanWebpackPlugin(['dist/*']) for < v2 versions of CleanWebpackPlugin
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			title: 'Production',
			template: 'index.html',
		}),
		new MiniCssExtractPlugin(),
	],
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist'),
	},
	resolve: {
		alias: {},
		extensions: ['*', 'css', '.js', '.json'],
	},
};
