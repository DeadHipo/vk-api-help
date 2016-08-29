//https://oauth.vk.com/authorize?client_id=5484003&scope=audio&response_type=code&v=5.53

//https://oauth.vk.com/access_token?client_id=5484003&client_secret=h3eFqpC0IFZwo3uS6NAa&code=95169ecf7556f0094b

var request = require('request-promise');
var url = require('url');

var Promise = require('bluebird');

const Api = {
	protocol: 'https',
	host: 'oauth.vk.com',
	v: '5.53'
}

var VkToken = function(clientId, clientSecret) {

	if (!clientId || !clientSecret) {
		throw new Error('VkToken clientId or clientSecret is null');
	}

	this.clientId = clientId;
	this.clientSecret = clientSecret;
}

VkToken.prototype.clientId = {};
VkToken.prototype.clientSecret = {};

VkToken.prototype.getTokenFromCode = function(code) {

	var this1 = this;

	if (!code) {
		throw new Error('VkToken code is null');
	}

	var arguments = this._vkQueryParameters(code);

	var options = {
		url: url.format({
			protocol: Api.protocol,
			host: Api.host,
			pathname: '/access_token'
		}),
		qs: arguments,
		simple: false,
		resolveWithFullResponse: true,
		forever: true
	}
	
	return new Promise(function (resolve, reject) {
		request(options)
		.promise()
		.then(function(response) {
			if (response.statusCode !== 200) {
				throw new Error(`${response.statusCode} ${response.body}`);
			}
			const json = this1._parseJson(response.body);
			if (json.error) {
				return reject(json);
			}
			return resolve(json);
		});
	});
}

VkToken.prototype._parseJson = function(json) {
	try {
		return JSON.parse(json);
	} catch (error) {
		throw new Error('Json parse error');
	}	
}

VkToken.prototype._vkQueryParameters = function(code) {
	var arg = arg ? arg : {};
	arg.client_id = this.clientId;
	arg.client_secret = this.clientSecret;
	arg.code = code;
	return arg;
}

module.exports = VkToken;