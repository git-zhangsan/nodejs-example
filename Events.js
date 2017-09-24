/*
 * @Author: zhanghuiming
 * @Date:   2017-09-15 08:20:30
 * @Last Modified by:   zhanghuiming
 * @Last Modified time: 2017-09-18 06:45:31
 */

/**
 * 关于 Node Event
 * - 类似于DOM的工作原理，Node.js触发事件并处理回调函数
 * — Node中的许多对象都会发出事件，一般来说，这些对象将继承自EventEmitter构造函数
 */

//加载EventEmitter构造函数

var EventEmitter = require('events').EventEmitter;

//这个例子，将记录器通过添加监听器来发出事件

var logger = new EventEmitter();

//以下代码演示了监听错误事件的语法，
logger.on('error', function(message) {
	console.log('ERR: ' + message);
});

//以下代码触发“错误”事件
logger.emit('error', 'This is the first error');
logger.emit('error', 'This is the second error');