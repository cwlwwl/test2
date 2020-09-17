let Controller = require("egg").Controller;
class AjaxController extends Controller {
	async getString() {
		let id = this.ctx.request.query.id;
		let name = this.ctx.request.query.name;
		this.ctx.response.body = "这是字符串"+id+name;
	}
	
	async getNumber() {
		let id = this.ctx.request.body.id;
		let name = this.ctx.request.body.name;
		console.log(id, name);
		this.ctx.response.body = 100;
	}
	
	async getStu() {
		let stu = {
			id: 22,
			name: '贾宝玉',
			age: 17
		}
		this.ctx.response.body = stu
	}
	async getStringArray() {
		let s = ['aa','bb', 'cc', 'dd'];
		this.ctx.response.body = s;
	}
	
	async getObjectArray() {
		let a = [
			{id: 1, name: '比达哥拉斯', age: 30},
			{id: 2, name: '伽例略', age: 40},
			{id: 3, name: '来布尼兹', age: 50},
			{id: 4, name: '高斯', age: 50}
		];
		this.ctx.response.body = a;
	}
}
module.exports=AjaxController;