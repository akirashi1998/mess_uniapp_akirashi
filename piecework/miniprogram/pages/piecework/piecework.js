// miniprogram/pages/piecework/piecework.js
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
    this.setData({
      workname:options.workname,
      worktime:options.worktime,
      completed:options.completed,
      workid:options.workid
    })
    console.log(options)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  checkout(){
    var workid = this.data.workid
    db.collection('tasks').where({
      _id:workid
    }).update({
      data:{
        completed:true
      }
    })
  }
})