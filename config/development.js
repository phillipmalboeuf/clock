const webpack = require("webpack");

module.exports = [{
	name: "js",
	entry: "./scripts/app.js",
	output: {
		filename: "app.js",
		publicPath: "http://localhost:8091/"
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loaders: ["react-hot-loader", "babel-loader?presets[]=es2015&presets[]=react&plugins[]=transform-object-rest-spread"]
			},
			{
				test: /\.scss$/,
				loaders: ["style-loader", "css-loader", "sass-loader"]
			},
			{
				test: /\.html$/,
				loaders: ["file-loader?emitFile=false"]
			}
		]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.ProvidePlugin({
            "React": "react",
            "ReactDOM": "react-dom",
        })
	],
	devServer: {
		hot: true,
		inline: true,
		port: 8091
	}
}]