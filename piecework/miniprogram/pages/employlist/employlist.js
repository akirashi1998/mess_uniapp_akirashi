var app = getApp()
var db = wx.cloud.database()
var _ = db.command
Page({

  data: {

  },

  async onLoad() {
    await db.collection('login').where({
      administ:"employ"
    }).get().then(
      res=>{
        this.setData({
          result:res
        })

        console.log(res)
      }
    )
  },

  onReady: function () {
 
  },
})