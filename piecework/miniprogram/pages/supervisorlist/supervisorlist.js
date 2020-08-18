var app = getApp()
var db = wx.cloud.database()
var _ = db.command
Page({

  data: {

  },

  async onLoad() {
    await db.collection('login').where({
      administ:"supervisor"
    }).get().then(
      res=>{
        this.setData({
          result:res
        })

        console.log("这是res",res)
      }
    )
  },

  onReady: function () {
 
  },

  toemploy(e){
    let loginname = e.currentTarget.dataset.loginname
    let name = e.currentTarget.dataset.name


    wx.navigateTo({
      url: '/pages/employdetails/employdetails?loginname='+loginname+'&name='+name
    })
  }
})