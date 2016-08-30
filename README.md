##Start
```sh
npm install vk-api-help
```

##Get started
```js
var VK = require('vk-api-help');

//Request to any VK api method 
var vkRequest = new VK.VkRequest('b9edf7a22aff282e050705b5dabf6d0f3446812be76c3aa1a50c66607d6f1510e596871c88da20716b831');
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
var vkToken = new VK.VkToken('5484003', 'h3eFqpC0IFZwo3uS6NAa');
vkToken.getTokenFromCode('789e12c040d18b31a8')
.then(function(json) {
    console.log(json);
})
.catch(function(error) {
    console.log(error);
});
```