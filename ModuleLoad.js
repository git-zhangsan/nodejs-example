/*
 * @Author: zhanghuiming
 * @Date:   2017-09-18 08:02:05
 * @Last Modified by:   zhanghuiming
 * @Last Modified time: 2017-09-18 08:06:36
 */
var moduleFunc = require('./Modules');
moduleFunc();

var makeRequest = require('./HttpModule');

makeRequest('http req 1');
makeRequest('http req 2')