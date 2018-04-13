const merge = require('webpack-merge')
const commen = require('./webpack.commen.js')
const UglifyJs = require('uglifyjs-webpack-plugin')

module.exports = merge(commen, {
	mode: 'production',
	plugins: [
		new UglifyJs()
	]
})