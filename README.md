[![NPM](https://nodei.co/npm/vk-api-help.png?downloads=true&downloadRank=true)](https://nodei.co/npm/vk-api-help/)

##Start
```sh
npm install vk-api-help
```

##Get started
```js
var VK = require('vk-api-help');

//Request to any VK api method 
var vkRequest = new VK.VkRequest('USER_TOKEN');
vkRequest.method('audio.get', { owner_id: 1, count: 2, offset: 1 })
.then(function(json) {
    console.log(json);
})
.catch({ name: 'VkApiError' }, function(error) {
    console.log(`VKApi error ${error.error_code} ${error.error_msg}`);
    switch(error.error_code) {
        case 14:
            console.log('Captcha error');
        break;	
        case 5:
            console.log('No auth');
        break;
        default:
        	console.log(error.error_msg);
    }
})
.catch(function(error) {
    console.log(`Other error ${error.error_msg}`);
});

//Reqeust to VK api for get access token by user code 
var vkToken = new VK.VkToken('CLIENT_ID', 'CLIENT_SICRET');
vkToken.getTokenFromCode('USER_CODE')
.then(function(json) {
    console.log(json);
})
.catch(function(error) {
    console.log(error);
});
```
