const path = require('path');
const webpack = require('webpack');

module.exports = {
	configureWebpack: {
		resolve: {
		},
		plugins: [
			new webpack.DefinePlugin({
				envVars: {
					BASE_URL: JSON.stringify(process.env.BASE_URL ? process.env.BASE_URL : '')
				}
			})
		],
	}
};
