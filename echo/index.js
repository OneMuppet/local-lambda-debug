'use strict';

const echo = function (event, context, callback) {
	console.log(event, context);
	return callback(null, {
		statusCode: 200,
		body: JSON.stringify(event.body),
		headers: {
			'Access-Control-Allow-Origin': '*'
		}
	});
};

module.exports.echo = echo;