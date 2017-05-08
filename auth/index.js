'use strict'

var generatePolicy = function (principalId, effect) {
	return {
		principalId: principalId,
		policyDocument: {
			Version: '2012-10-17',
			Statement: [{
				Action: '*',
				Effect: effect,
				Resource: '*'
			}]
		}
	};
};

const mockUser = {
	userId: "onemuppet",
	name: "David Borgenvik"
}

const authorize = function (event, context, callback) {
	console.log(event, context);

	if (event.authorizationToken === 'magic-token') {
		const allowPolicy = generatePolicy(JSON.stringify(mockUser), 'Allow');
		callback(null, allowPolicy);
	} else {
		const denyPolicy = generatePolicy(JSON.stringify(mockUser), 'Deny');
		callback(null, denyPolicy)
	}
};

module.exports.generatePolicy = generatePolicy;
module.exports.authorize = authorize;