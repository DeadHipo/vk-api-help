var request = require('request-promise');
var url = require('url');

var Promise = require('bluebird');

var VkApiError = require('./vkApiError');

const Api = {
	protocol: 'https',
	host: 'api.vk.com',
	v: '5.53'
}

var VkRequest = function(token) {
	if (!token) {
		throw new Error('VkRequest token is null');
	}
	this.token = token;
}

VkRequest.prototype.token = {};

VkRequest.prototype.method = function(method) {
	var this1 = this;

	if (!method) {
		throw new Error('Method is not defined');
	}

	var options = {
		url: url.format({
			protocol: Api.protocol,
			host: Api.host,
			pathname: `/method/${method}`
		}),
		qs: this1._vkQueryParameters(arguments[1]),
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

VkRequest.prototype._parseJson = function(json) {
	try {
		return JSON.parse(json);
	} catch (error) {
		throw new Error(`VK json parse error ${json}`);
	}
}

VkRequest.prototype._vkQueryParameters = function(arg) {
	var arg = arg ? arg : {};
	arg.v = Api.v;
	arg.access_token = this.token;
	return arg;
}

module.exports = VkRequest;
