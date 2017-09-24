/*
* @Author: zhanghuiming
* @Date:   2017-09-25 06:58:36
* @Last Modified by:   zhanghuiming
* @Last Modified time: 2017-09-25 07:33:09
*/
/**
 * 数据持久化
 * Node支持很多的数据库
 * 大多数数据库都有非阻塞驱动程序
 *
 * Redis
 * Redis是一个开源（BSD许可），内存数据结构存储，用作数据库，缓存和消息代理
 *
 * 安装命令
 * npm install redis --save
 */

var redis = require('redis');

var client = redis.createClient();

//通过设置键值对在数据库中设置命令
//
client.set("1", "one");
client.set("2", "two");
client.set("3", "three");

//从数据库中检查索引
client.get("1", function (err, reply) {
    //命令是非阻塞的
    console.log(reply);
});