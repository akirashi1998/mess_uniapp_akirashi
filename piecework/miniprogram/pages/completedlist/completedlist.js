var app = getApp()
var db = wx.cloud.database()
var _ = db.command
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  async onLoad(){
    await db.collection('tasks').where({
      completed:true
    }).get().then(
      res=>{
        console.log("这是已经完成的工作记录：",res)
        this.setData({
          result:res
        })
      }
    )
  }
})