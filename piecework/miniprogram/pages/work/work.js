var app = getApp()
const db = wx.cloud.database()
const _ = db.command
Page({
  data:{
    isemploy:false,
    isadminist:false,
    issupervisor:false
  },
  onReady:function(){
    var username = app.globalData.username

    console.log("当前的username是",username)
    db.collection('tasks').where({
      name:username
    }).get().then(
      res => {
        console.log(res.data[0])
        this.setData({
          result:res.data
        })


        console.log("当前globaldata的值为",app.globalData.username)
        if(res.data[0].administ == "administ"){
          this.setData({
            isadminist:true,
            isemploy:false,
            issupervisor:false
          })
        }else if(res.data[0].administ == "supervisor"){
          this.setData({
            issupervisor:true,
            isemploy:false,
            isadminist:false
          })
        }else if(res.data[0].administ == "employ"){
          this.setData({
            isemploy:true,
            isadminist:false,
            issupervisor:false
          })
        }
      }
    )
  },

  //点击工作清单中的某一项触发qrcode函数，进入到qrcode页面绘制二维码
  toQRCode(e){
    // console.log(e.currentTarget.dataset.index)
    let index = e.currentTarget.dataset.index
    // console.log(this.data.result[index],this.data.result[index]._id)
    var workname = this.data.result[index].workname
    var worktime = this.data.result[index].worktime
    var completed = this.data.result[index].completed
    var workid = this.data.result[index]._id
    var workamount = this.data.result[index].workamount
    var price = this.data.result[index].price
    var order =  this.data.result[index].order
    var _date = String(worktime)
    var day = _date.split(" ")
    console.log("这是切割日期的测试",day)
    var _year = day[3] + "年"
    var _month = day[1]
    var monthstr = ["","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
    for(let i = 1;i<monthstr.length;i++){
      if(_month == monthstr[i]){
        _month = String(i) + "月"
      }
    }
    var _day = day[2] + "日"

    console.log(price,workamount)
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

    app.globalData.currentname = workname
    app.globalData.currenttime = worktime
    app.globalData.currentcompleted = completed
    app.globalData.currentid = workid
    app.globalData.workamount = workamount
    app.globalData.price = price
    app.globalData.order = order
    app.globalData._day = _day
    app.globalData._month = _month
    app.globalData._year = _year
    wx.navigateTo({
      url: '../qrcode/qrcode?workname='+app.globalData.currentname+'&worktime='+app.globalData.currenttime+'&completed='+app.globalData.currentcompleted+'&workid='+app.globalData.currentid+'&workamount='+app.globalData.workamount+'&price='+app.globalData.price+'&order='+app.globalData.order+'&_year='+app.globalData._year+'&_month='+app.globalData._month+'&_day='+app.globalData._day
    })

  },

  scancode(){
    wx.scanCode({
      onlyFromCamera: true,
      success(res){
        console.log("success",res)
        wx.navigateTo({
          url: res.result
        })
      },
      fail(res){
        console.log("failed",res)
      }
    })
  }

})