var path = require('path')

module.exports = {
	resolveLoader: { 
		fallback: path.join(__dirname, "node_modules") 
	},
	entry: './app.es6',
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'build.js'
	},
	module:  {
		loaders: [
			{ test:   /\.css$/, loader: "style-loader!css-loader" }, 
			{ test: /\.es6$/, loader: "babel-loader"},
			{ test: /\.jade/, loader: 'html!jade-html' }
		]
	}
}
