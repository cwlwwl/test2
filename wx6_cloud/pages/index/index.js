const app = getApp();
const _ =  app.db.command;
Page({
  async callcloud() {
    //调用add云函数
    let res = await wx.cloud.callFunction({
      name: 'add',
      data: {
        a: 100,
        b: 20
      }
    })
    
    console.log(res.result);
  },

  calljian() {
    wx.cloud.callFunction({
      name:"jian"
    }).then(res=>{
      console.log(res.result);
    })
  },

  //增加一条记录
  insertAnimal() {
     
    //2得到集合
    const animal = app.db.collection("animal");
    //3使用集合增加
    animal.add({
      data: {
        type:'人类',
        name: '小络',
        age: [3,2,4,100],
        looks: {
          id:1,
          name: '科学与自然'
        },
        time: Date()
      } 
    })
    .then(r=>{
      console.log(r);
    })
  },

  //云函数增加数据
  // insertAnimalByCloud() {
  //   wx.cloud.callFunction({
  //     name: 'insertAnimal'
  //   }).then(r=>{
  //     console.log(r.result);
  //   })
  // }

  //云函数增加数据
  async insertAnimalByCloud() {
    let r = await wx.cloud.callFunction({
      name: 'insertAnimal',
      data: {
        myName: '汪才',
        myAge: 100
      }
    }) 
    console.log(r.result);
  },

  async getById() {
    //2得到集合
    const animal = app.db.collection("animal");
    //3根据id查询
    let _id = "b5416b755f56e40a0158c8534be05294";
    let r = await animal.doc(_id).get() 
    console.log(r.data);
     
    console.log(new Date(r.data.time).getFullYear());
  },
  async getAll() {
    let r = await app.db.collection("animal").get();
    this.setData({
      list:r.data
    })
  },
  async getByWhere(){
   
    let r = await app.db.collection("animal")
    .where({
      name:'汪才',
      age: _.lt(31)
    })
    .get();

    this.setData({
      list:r.data
    })
  },

  async delByWhere() {
    let r = await wx.cloud.callFunction({
      name:'del'
    })
    console.log(r.result);
  },

  async updateMul() {
    let r = await wx.cloud.callFunction({
      name:'updateMul'
    });
    console.log(r.result);
  }
})
