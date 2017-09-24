/*
 * @Author: zhanghuiming
 * @Date:   2017-09-18 07:11:45
 * @Last Modified by:   zhanghuiming
 * @Last Modified time: 2017-09-18 07:22:56
 */

var fs = require('fs');
var http = require('http');

http.createServer(function(request, response) {
	var writeFile = fs.createWriteStream('README_copy.md');
	request.pipe(writeFile);

	request.on('end', function() {
		response.end('uploaded');
	})
}).listen(3000);
console.log('Listening on port 3000...');