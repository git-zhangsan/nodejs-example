/*
 * @Author: zhanghuiming
 * @Date:   2017-09-15 07:53:43
 * @Last Modified by:   zhanghuiming
 * @Last Modified time: 2017-09-15 08:19:27
 */
/**
 * NodeJs 简介
 * -通过使用服务器端的JavaScript构建可扩展的网络应用程序。 
 * -运行在V8 JavaScript运行时（与Chrome浏览器上运行的相同）
 *
 * 通过NodeJs可以构建：
 * - Web socket 服务
 * - 文件上传客户端
 * — 服务器
 * - 实时数据应用
 *
 * 关于NodeJs的误区
 * — Node.js不是一个Web框架
 * — Node.js不是多线程的
 *
 * 关于 Event Loop (事件循环)
 * — node首先会解析js代码并执行它，然后会注册它发现的事件
 * — 执行脚本后，节点启动事件循环，连续检查事件
 * — 一旦Node发现新事件，它将触发与此类事件关联的回调
 * — Node允许我们编写非阻塞的代码
 *
 * 关于 Event Queue (事件队列)
 * — 为事件循环排队事件
 * — 处理事件，一次一个
 */

//以下例子中，我们将创建一个node服务器并提供HTTP响应
//
//No.1 使用'require'关键字加载模块

var http = require('http');
//通常，我们需要使用Node模块方法指定回调函数

http.createServer(function(request, response) {
	response.writeHead(200) //在Header设置状态码
	response.write('This is NodeJs Server Run.....')
	response.write('*********NoeJs Introduction***********'); //设置返回response响应信息
	response.end(); //关闭服务连接
}).listen(3000); //Node将监听连接的3000端口

console.log('Listening on port 3000...');


/**
 * 在终端运行以下命令启动node并运行服务器
 * node Introdution.js
 */

/**
 * 终端运行以下命令来向本地服务器发出HTTP请求（应该得到响应）  
 * curl http：// localhost：3000
 */