var app = getApp()
const db = wx.cloud.database()
const _ = db.command
var res
Page({

  onLoad(e){
    
  },

  async onShow(){
    var identity = await this.onLoad()
  }


})