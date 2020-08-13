//index.js
const app = getApp()
const db = wx.cloud.database()
const _ = db.command

Page({
  data:{

  },
  getloginname(e){
    // console.log("工号",e.detail.value)
    this.setData({
      loginname:e.detail.value
    })
  },
  getpasscode(e){
    // console.log("密码",e.detail.value)
    this.setData({
      loginpasscode:e.detail.value
    })
  },
  
  login(){
    var username = this.data.loginname
    var password = this.data.loginpasscode
    var svname,svpassword
    console.log(username,password)

    if(username == undefined || password == undefined){
      wx.showToast({
        title: '请输入工号和密码',
        icon:'none'
      })
    }else{

      db.collection('login').where({
        loginname:_.eq(username)
      }).get().then(
        res=>{

          
          svname = res.data[0].loginname
          svpassword = res.data[0].loginpasscode

          
          console.log(res.data[0].loginname,res.data[0].loginpasscode)
          console.log(svname,svpassword)
          if(username == svname && password == svpassword){
            
            wx.switchTab({
              url: '../work/work',
              success(){
                app.globalData.username = svname
                app.globalData.password = svpassword
              }
            })
            
          }else{
            wx.showToast({
              title: '工号或者密码错误，请检查或联系管理员',
              icon:'none'
            })
          }
        }
        
      )

    }

  }


})