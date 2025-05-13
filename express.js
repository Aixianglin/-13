//导入url模块
const url = require('url');

//解析URL字符串并返回一个URL对象
const urlStr1 = 'http://www.example.test:8080/index.html?username=xiaoming';
const urlObj1 = url.parse(urlStr1);
console.log('协议名：'+urlObj1.protocol);
console.log('主机名：'+urlObj1.hostname);
console.log('端口号：'+urlObj1.port);
console.log('路径：'+urlObj1.pathname);
console.log('查询字符串：'+urlObj1.query);

//将URL对象格式化成一个URL字符串
const urlObj2 = urlObj1;
const urlStr2 = url.format(urlObj2);
console.log(urlStr2);
