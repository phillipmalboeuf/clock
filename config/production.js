const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: './scripts/app.js',
	output: {
		filename: 'app.js',
		path: path.resolve(__dirname, '../files')
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: ['babel-loader?presets[]=es2015&presets[]=react&plugins[]=transform-object-rest-spread']
			},
			{
				test: /\.scss$/,
				loaders: ExtractTextPlugin.extract({use: ["css-loader", "sass-loader"]})
			}
		]
	},
	plugins: [
		new ExtractTextPlugin("all.css"),
		new webpack.LoaderOptionsPlugin({
			minimize: true,
			debug: false
		}),
		new webpack.optimize.UglifyJsPlugin({
			beautify: false,
			mangle: {
			screw_ie8: true,
			keep_fnames: true
		},
			compress: {
			screw_ie8: true
		},
			comments: false
		})
	]
}


