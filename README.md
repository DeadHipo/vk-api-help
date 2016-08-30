##Start
```sh
npm install vk-api-help
```

##Get started
```js
var VK = require('vk_api');

//Request to any VK api method
var vkRequest = new VK.VkRequest(USER_TOKEN);
vkRequest.method('audio.get', { owner_id: USER_ID, count: COUNT, offset: OFFSET })
.then(function(json) {
	console.log(json);
})
.catch(VK.VkApiError, function(error) {
	console.log(`VKApi error ${error.error_code} ${error.error_msg}`);
	switch(error.error_code) {
		case 14:
			console.log('Captcha error');
		break;	
		case 5:
			console.log('No auth');
		break;
	}
})
.catch(function(error) {
	console.log(`Other error ${error}`);
});

//Reqeust to VK api for get access token by user code
var vkToken = new VK.VkToken(CLIENT_ID, CLIENT_SECRET);
vkToken.getTokenFromCode(USER_CODE)
.then(function(json) {
	console.log(json);
})
.catch(function(error) {
	console.log(error);
});
```