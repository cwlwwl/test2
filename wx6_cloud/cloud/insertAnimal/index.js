// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init()

//得到数据库
const db = cloud.database({
  env: 'wgr-42c92d'
})
  
// 云函数入口函数
exports.main = async (event, context) => {
  try{
    const animal = db.collection("animal");//得到animal集合
    let r = await animal.add({
      data: {
        name: event.myName,
        age: event.myAge
      }
    })
    return r;
  }catch(e) {
    return "e";
  }
}