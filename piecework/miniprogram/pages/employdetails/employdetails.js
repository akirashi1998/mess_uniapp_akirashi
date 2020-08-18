// miniprogram/pages/employdetails/employdetails.js
var db = wx.cloud.database()
var _ = db.command

Page({

  async onLoad(options){
    var name = this.options.loginname
    var loginname = this.options.name
    this.setData({
      loginname,
      name
    })
    console.log("name is",name)

    await db.collection('tasks').where({
      name:this.data.name
    }).get().then(
      res => {
        this.setData({
          result : res
        })
        console.log("这是当前的result",this.data.result)
      }
    )

  }

})