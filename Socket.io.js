/*
 * @Author: zhanghuiming
 * @Date:   2017-09-18 08:47:06
 * @Last Modified by:   zhanghuiming
 * @Last Modified time: 2017-09-19 05:40:17
 */

var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

io.on('connection', function(client) {
	console.log('Client connected....');

	client.emit('message', {
		socket: 'i.o'
	});

	client.on('fromClient', function(data) {
		console.log(data);
		client.broadcast.emit('fromServer', {
			fromServer: 'fromServer'
		});
	});
});

app.get('/', function(req, res) {
	res.sendFile(__dirname + '/socket.html');
});
server.listen(3000);