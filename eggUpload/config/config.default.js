exports.keys = "dfbgffdsafddgfd";

//文件上传必须要设置的
exports.multipart = {
	mode: 'file',
};

//加上后post请求才能成功,文件上传才能成功
exports.security = {
	csrf: {
		enable: false,
		ignoreJSON: true
	} 
};
