var path = require('path');
var HTMLPlugin = require('html-webpack-plugin');

var DEV = path.resolve(__dirname, 'src');

var config = {
	entry: {
		index: DEV,
		html: [
			'webpack-dev-server/client?http://localhost:8080'
		]
	},
	output: {
		publicPath: '/build/',
		filename: '[name].js'
	},
	devServer: {
		historyApiFallback: true,
		stats: 'errors-only'
	},
	module: {
		rules: [
			{
				test: /\.html$/,
				use: 'raw-loader'
			},
			{
				test: /\.js$/,
				include: DEV,
				use: 'babel-loader'
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader', 'postcss-loader']
			},
			{
				test: /\.(png|jpg|jpeg|gif)$/,
				use: 'file-loader'
			}
		]
	},
	plugins: [
		new HTMLPlugin({
			template: './index.html'
		})
	],
	devtool: 'eval-source-map'
};

module.exports = config;
