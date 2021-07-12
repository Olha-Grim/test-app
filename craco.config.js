const path = require('path');
const CracoAntDesignPlugin = require('craco-antd');

module.exports = {
	webpack: {
		alias: {
			module: path.resolve('./src/module'),
			react: path.resolve('./node_modules/react'),
			'react-intl': path.resolve('./node_modules/react-intl'),
		}
	},
	babel: {
		loaderOptions: {
			babelrc: true,
		},
	},
	plugins: [{ plugin: CracoAntDesignPlugin }]
};
