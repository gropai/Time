var path = require('path');
var webpack = require('webpack');
var CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CleanPlugin = require('clean-webpack-plugin');

var extractCSSPlugin = new ExtractTextPlugin({
	filename: '[name].css'
});

var DEV = path.resolve(__dirname, 'src');
var BUILD = path.resolve(__dirname, 'build');

var config = {
	entry: {
		index: DEV,
		vendor: [
			'react',
			'react-dom'
		]
	},
	output: {
		path: BUILD,
		filename: '[name].js'
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: extractCSSPlugin.extract({
					use: ['css-loader', 'postcss-loader'],
					fallback: 'style-loader'
				})
			},
			{
				test: /\.js$/,
				use: 'babel-loader'
			},
			{
				test: /\.(png|jpg|jpeg|gif)$/,
				use: {
					loader: 'file-loader',
					options: {
						publicPath: './',
						name: '[path][name].[ext]'
					}
				}
			}
		]
	},
	plugins: [
		extractCSSPlugin,
		new CleanPlugin(BUILD),
		new CommonsChunkPlugin({
			name: 'vendor'
		})
	]
};

module.exports = config;
