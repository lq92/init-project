const merge = require('webpack-merge')
const commen = require('./webpack.commen.js')

module.exports = merge(commen, {
	mode: 'development',
	devtool: 'inline-source-map',
	devServer: {
		contentBase: '../dist'
	}
})