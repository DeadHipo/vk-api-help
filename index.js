module.exports = {
	VkRequest: require('./lib/vkRequest'),
	VkToken: require('./lib/vkToken')
}

/*
var a = require('./lib/vkRequest');
var b = require('./lib/vkToken');

var d = new b('5484003', 'h3eFqpC0IFZwo3uS6NAa');
d.getTokenFromCode('789e12c040d18b31a8')
.then(function(json) {
	console.log(json);
})
.catch(function(error) {
	console.log(error);
});

var c = new a('b9edf7a22aff282e050705b5dabf6d0f3446812be76c3aa1a50c66607d6f1510e596871c88da20716b831');

c.method('audio.search', {count: 1})
.then(function(json) {
	//console.log(json);
})
.catch(function(error) {
	console.log(error);
});
*/