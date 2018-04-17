/* eslint no-process-env: "off" */

module.exports = (req, res) => {
	const response = {
		version: process.env.npm_package_version,
		env: process.env.NODE_ENV,
		message: 'pong',
		service_name: process.env.SERVICE_NAME
	};
	res.json(response);
};
