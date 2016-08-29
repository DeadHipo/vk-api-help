var VK = require('vk_api');

//vkRequest
var vkRequest = new VK.VkRequest(USER_TOKEN);
vkRequest.method('audio.get', { owner_id: 4375519, count: 10, offset: 20})
.then(function(json) {
	console.log(json);
})
.catch(function(error) {
	console.log(error);
});

//vkGetTokenFromCode
var vkToken = new VK.VkToken(CLIENT_ID, CLIENT_SECRET);
vkToken.getTokenFromCode(USER_CODE)
.then(function(json) {
	console.log(json);
})
.catch(function(error) {
	console.log(error);
});