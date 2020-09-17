// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init()
//得到数据库
const db = cloud.database({
  env: 'wgr-42c92d'
})
const _ = db.command;
// 云函数入口函数
exports.main = async (event, context) => {
   let r = await db.collection("animal")
   .where({
     age: _.lt(101)
   })
   .remove();
   return r;
}