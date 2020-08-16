// miniprogram/pages/profile/profile.js
var app = getApp()
var db = wx.cloud.database()
var _ = db.command
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  async onReady() {
    this.setData({
      username:app.globalData.username,
      password:app.globalData.password
    })
    await db.collection('tasks').where({
      name:this.data.username
    }).get().then(
      res=>{
        // console.log(res)
        this.setData({
          result : res
        })
      }
    )


  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  todetails(){
    wx.navigateTo({
      url: '/pages/details/details'
    })
  },

  tosettings(){
    wx.navigateTo({
      url: '/pages/settings/settings'
    })
  }
})