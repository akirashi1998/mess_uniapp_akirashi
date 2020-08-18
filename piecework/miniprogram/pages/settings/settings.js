var app = getApp()
var db = wx.cloud.database()
var _ = db.command

Page({
  data:{

  },

  onLoad(){

  },

  onReady(){
    this.setData({
      username : app.globalData.username
    })

     
  }




})