// miniprogram/pages/qrcode/qrcode.js
import drawQrcode from "../../repositories/weapp.qrcode.esm"

var app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    text:"../index/index"

  },

  onLoad(options){
    // console.log(options)
    var workname = options.workname
    var worktime = options.worktime
    var completed = options.completed
    var workid = options.workid
    var workamount = options.workamount
    var price = options.price
    var order = options.order
    var _year = options._year
    var _month = options._month
    var _day = options._day

    console.log(_month,_day)



    this.setData({
      workname,
      worktime,
      completed,
      workid,
      workamount,
      price,
      order,
      _year,
      _month,
      _day
    })

    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onReady: function (options) {
    // console.log(this.data.completed,this.data.workname)
    var jumpurl = "/pages/piecework/piecework?workname="+this.data.workname+"&worktime="+this.data.worktime+"&completed="+this.data.completed+"&workid="+this.data.workid//绝对地址加斜杆，不然会报错，也可以从全局定义好再加入
    drawQrcode({
      width:200,
      height:200,
      canvasId:"qrcode",
      text:jumpurl
    })
  },

})