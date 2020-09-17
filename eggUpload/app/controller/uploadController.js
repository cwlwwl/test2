// app/controller/uploadController.js
const Controller = require('egg').Controller;
//加入node.js自带的文件处理模块
const fs = require('fs');
//加入node.js自带的路径处理模块
const path  = require("path");

class uploadController extends Controller {
  async upload() {
	/**
	得到的file对象的值为:
	{
	  field: 'file',
	  filename: 'aab.jpg',//被上传的文件名
	  encoding: '7bit',
	  mime: 'image/jpeg',
	  fieldname: 'file',
	  transferEncoding: '7bit',
	  mimeType: 'image/jpeg',
	  filepath: 'C:\\Users\\ADMINI~1\\AppData\\Local\\Temp\\egg-multipart-tmp\\updatefile\\2019\\12\\18\\14\\e6fd6a98-b374-4
	  c3d-81bb-8da3319d42be.jpg'
	}
	 */
    const file = this.ctx.request.files[0];
	//                 "/public/upload/32413432432aab.jpg"
	const toFileName = '/public/upload/'+Date.now()+file.filename;
	/**
	 * 1,全局变量__dirname的值为"<路径>\项目名\app\controller",即为当前文件所在的目录
	 * 2,path.dirname(...)的使用是去掉最后一级,
	 * 所以path.dirname(__dirname)后的值为"<路径>\项目名\app"
	 * 3, 最后得到to的值为 "<路径>\项目名\app/public/upload/保存时的文件名字" 
	 */  
	let to = path.dirname(__dirname)+toFileName;
	//file.filepath是上传的临时文件路径
	//把临时文件写入到文件to
	await fs.copyFileSync(file.filepath, to);
	//删除临时文件
	await fs.unlinkSync(file.filepath);
	
	//上传好的文件的网络访问url,实计开发项目中，该路径多数情况下要保存到数据库
	const newUrl = "http://localhost:7001"+toFileName;
	
	//返回文件的网络访问 url
    this.ctx.response.body = newUrl; 
  }
};

module.exports = uploadController