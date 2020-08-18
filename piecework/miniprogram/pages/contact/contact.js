// miniprogram/pages/contact/contact.js
var db = wx.cloud.database()
var _ = db.command
Page({

  data:{

  },

  async onLoad(){
    await db.collection('contact').get().then(
      res =>{
        console.log(res)
        this.setData({
          phone:res.data[0].phone,
          email:res.data[0].email
        })
      }
    )
  },

  onReady(){

  }
})