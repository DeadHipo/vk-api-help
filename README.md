var VK = require('vk_api');\n\n

//vkRequest\n
var vkRequest = new VK.VkRequest(USER_TOKEN);\n
vkRequest.method('audio.get', { owner_id: 4375519, count: 10, offset: 20})\n
.then(function(json) {\n
	console.log(json);\n
})\n
.catch(function(error) {\n
	console.log(error);\n
});\n

//vkGetTokenFromCode\n
var vkToken = new VK.VkToken(CLIENT_ID, CLIENT_SECRET);\n
vkToken.getTokenFromCode(USER_CODE)\n
.then(function(json) {\n
	console.log(json);\n
})\n
.catch(function(error) {\n
	console.log(error);\n
});\n