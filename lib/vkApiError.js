
var VkApiError = function(error) {
	this.error_code = error.error_code;
	this.error_msg = error.error_msg;
	this.request_params = error.request_params
}

VkApiError.prototype.error_code = {}
VkApiError.prototype.error_msg = {}
VkApiError.prototype.request_params = []
VkApiError.prototype = Object.create(Error.prototype);

module.exports = VkApiError;