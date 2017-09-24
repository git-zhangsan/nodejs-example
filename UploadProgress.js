/*
 * @Author: zhanghuiming
 * @Date:   2017-09-18 07:26:07
 * @Last Modified by:   zhanghuiming
 * @Last Modified time: 2017-09-18 07:36:33
 */

var fs = require('fs');
var http = require('http');

http.createServer(function(request, response) {
	var writeFile = fs.createWriteStream('largeFile_up');
	//从请求获取文件的大小
	var fileBytes = request.headers['content-length'];
	//该变量用于跟踪上传了多少个字节
	var uploadedBytes = 0;
	request.on('readable', function() {
		var chunk = null;
		while (null !== (chunk = request.read())) {
			uploadedBytes += chunk.length;
			var progress = (uploadedBytes / fileBytes) * 100;
			response.write('progress: ' + parseInt(progress, 10) + "%\n")
		}
	});
	request.pipe(writeFile);

	request.on('end', function() {
		response.end();
	})
}).listen(3000);