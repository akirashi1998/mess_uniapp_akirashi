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
    wx.navigateTo({
      url: '../qrcode/qrcode?workname='+workname+'&worktime='+worktime+'&completed='+completed+'&workid='+workid
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