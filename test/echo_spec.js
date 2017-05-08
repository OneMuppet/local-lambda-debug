'use strict';

const assert = require('chai').assert,
	echoModule = require('../echo/index');

describe('echo handler', () => {
	it('should echo stuff ', (done) => {
		const input = { "bold": "statement" };

		echoModule.echo({ body: input }, {}, (error, data) => {
			assert.isNull(error, `An error was returned ${error}`);
			assert.isDefined(data, 'Data is missing');
			assert.equal(data.body, JSON.stringify(input), 'Did not return what was sent in.');
			done();
		})

	});
});