/*
 * @Author: zhanghuiming
 * @Date:   2017-09-18 07:01:21
 * @Last Modified by:   zhanghuiming
 * @Last Modified time: 2017-09-18 07:10:10
 */
/**
 * File
 * 使用Node从File文件系统中读取文件
 */

//需要文件系统模块
var fs = require('fs');
//从原始文件创建一个“read”流
var readFile = fs.createReadStream('README.md');
//创建一个“write”流到目标文件
var writeFile = fs.createWriteStream('README_copy.md')
	//流式传输通过 pipe 函数
	//pipe 函数将所有数据从可读流中抽出，并将其写入提供的目标，
	//自动管理流程，使目的地不被一个快速可读的流淹没
readFile.pipe(writeFile);