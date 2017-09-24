/*
 * @Author: zhanghuiming
 * @Date:   2017-09-18 06:46:51
 * @Last Modified by:   zhanghuiming
 * @Last Modified time: 2017-09-18 07:00:12
 */
/**
 * Streams
 * 当编写依赖于网络访问或访问磁盘上的文件的应用程序时，  了解和优化数据的传输非常重要，  这是Node.js的一个很好的用例。
 *
 * Stream:
 * -流就像通道，数据流过
 * -有两种主要的不同类型：可读写
 * -可读流：从EventEmitter继承
 */

var http = require('http');

//'request'是可读流
//'response'是一个可写的流

http.createServer(function(request, response) {
	//通过以下示例，我们向控制台打印我们从客户端获取的数据
	response.writeHead(200);
	request.on('readable', function() {
		var chunk = null;
		while (null !== (chunk = request.read())) {
			response.write(chunk);
			console.log(chunk);
		}
	});

	request.on('end', function() {
		response.end('-end of request');
	});


	// response.writeHead(200);
	// request.pipe(response);
}).listen(3000);

console.log('Listening on port 3000...');

/**
 * 运行：
 * node Streams.js
 * curl -d 'from client' http://localhost:3000
 */