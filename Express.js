/*
 * @Author: zhanghuiming
 * @Date:   2017-09-18 08:13:20
 * @Last Modified by:   zhanghuiming
 * @Last Modified time: 2017-09-18 08:25:00
 */

var express = require('express');
var app = express();

app.get('/', function(request, response) {
	response.sendFile(__dirname + '/README.md');
});

app.listen(3000);