##Start
```sh
npm install vk-api-help
```

##Get started
```js
var VK = require('vk_api');

//Request to any VK api method
var vkRequest = new VK.VkRequest(USER_TOKEN);
vkRequest.method('audio.get', { owner_id: 4375519, count: 10, offset: 20})
.then(function(json) {
	console.log(json);
})
.catch(function(error) {
	console.log(error);
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