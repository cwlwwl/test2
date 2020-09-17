// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init()
//得到数据库
const db = cloud.database({env: 'wgr-42c92d'})
// 云函数入口函数
exports.main = async (event, context) => {
   let r = await db.collection("animal")
   .where({
      age:100
   })
   .update({
     data:{
       name:'人',
       age:123
     }
   });
   return r;
}