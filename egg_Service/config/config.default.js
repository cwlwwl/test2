//设置cookie加密的盐
exports.keys = "sdfdshlkfdsakdfsahdsfakjfhasfkdsa";

//设置可以文件上传
exports.multipart = {
	mode: 'file',
};

//两个功能，1支持post请求，2支持文件上传
exports.security = {
	csrf: {
		enable: false,
		ignoreJSON: true
	} 
};

//大文件上传时，要在multipart中配置上传文件最大值，本示例配置成以下,有缺省值，所以可以不配置
exports.multipart = {
	mode: 'file',
	fileSize:1048576000,
};

//设置端口号, 有缺省值，所以可以不配置
exports.cluster = {
      listen: {
        port: 7001
      }
};

//设置跨域
exports.cors = {
	  origin: '*',
	  allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
};