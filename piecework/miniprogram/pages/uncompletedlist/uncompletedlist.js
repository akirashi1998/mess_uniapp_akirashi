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
      completed:false
    }).get().then(
      res=>{
        console.log("未完成的工作记录有：",res)
        this.setData({
          result:res
        })
      }
    )
  }
})