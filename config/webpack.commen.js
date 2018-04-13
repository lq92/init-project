const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
	entry: {
		index: './src/index.js'
	},
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, '../dist')
	},
	plugins: [
		new CleanWebpackPlugin([ 'dist' ]),
		new HtmlWebpackPlugin()
	],
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [ 'style-loader', 'css-loader' ]
			},
			{
				test: /\.(jpg|png|gif|svg)$/,
				use: [ 'file-loader' ]
			},
			{
				test: /\.(woff|tff|svg)$/,
				use: [ 'file-loader' ]
			}
		]
	}
}