/*
 * @Author: zhanghuiming
 * @Date:   2017-09-18 07:54:57
 * @Last Modified by:   zhanghuiming
 * @Last Modified time: 2017-09-18 08:07:44
 */

var http = require('http');

var makeRequest = function(message) {

	var options = {
		host: 'localhost',
		port: 3000,
		path: '/',
		method: 'POST'
	}

	var request = http.request(options, function(response) {
		response.on('data', function(data) {
			console.log(data.toString());
		});
	});

	request.write(message);
	request.end();
}

module.exports = makeRequest;