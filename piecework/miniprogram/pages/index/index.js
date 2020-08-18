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
    var svname,svpassword //从server传回的数据相比对
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
              success(){
                app.globalData.username = svname
                app.globalData.password = svpassword
                console.log(app.globalData.username,app.globalData.password)
              },
              url: '../work/work'
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

  },

  onLoad(){
    wx.request({
      url: 'https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=wx53cd558ae28e1f6b&secret=5eeb350c0da65612fb356b397f782b0d',
      success(res){
        app.globalData.access_token = res.data.access_token
        console.log(app.globalData.access_token)
      }     
    })







  },


  contactAdmin(){
    wx.navigateTo({
      url: '/pages/contact/contact',
    })
  }


})