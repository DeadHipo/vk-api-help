var util = require('util');

function VkApiError(json) {
	this.error_code = json.error_code;
	this.error_msg = json.error_msg;
	this.request_params = json.request_params;
	Error.captureStackTrace(this, VkApiError);
}

util.inherits(VkApiError, Error);

VkApiError.prototype.name = 'VkApiError';

module.exports = VkApiError;