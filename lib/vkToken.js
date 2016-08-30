var request = require('request-promise');
var url = require('url');

var Promise = require('bluebird');

var VkApiError = require('./VkApiError');

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
	
	var options = {
		url: url.format({
			protocol: Api.protocol,
			host: Api.host,
			pathname: '/access_token'
		}),
		qs: this1._vkQueryParameters(code),
		simple: false,
		resolveWithFullResponse: true,
		forever: true
	}
	
	return new Promise(function (resolve, reject) {
		request(options)
		.promise()
		.then(function(response) {
			if (response.statusCode !== 200) {
				return reject(new Error(`${response.statusCode} ${response.body}`));
			}
			const json = this1._parseJson(response.body);
			if (json.error) return reject(new VkApiError(json.error));
			return resolve(json);
		})
		.catch(function(error) {
			return reject(error);
		});
	});
}

VkToken.prototype._parseJson = function(json) {
	try {
		return JSON.parse(json);
	} catch (error) {
		throw new Error(`VK json parse error ${json}`);
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