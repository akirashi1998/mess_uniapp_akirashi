// miniprogram/pages/employdetails/employdetails.js
var db = wx.cloud.database()
var _ = db.command

Page({



  async onLoad(options){
    var name = this.options.loginname
    var loginname = this.options.name
    this.setData({
      loginname,
      name
    })
    console.log("name is",name)

    await db.collection('tasks').where({
      name:this.data.name
    }).get().then(
      res => {
        this.setData({
          result : res
        })
        console.log("这是当前的result",this.data.result)


        var workorder = new Array()
        //分割日期
        for(let i = 0;i<res.data.length;i++){
          var _date = String(res.data[i].worktime)
          var day = _date.split(" ")
          var _year = day[3] + "年"
          var _month = day[1]
          var monthstr = ["","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
          for(let j = 1;j<monthstr.length;j++){
            if(_month == monthstr[j]){
              _month = String(j) + "月"
            }
          }
          var _day = day[2] + "日"

          workorder[i] = _year + _month + _day + res.data[i].order
        }

        this.setData({
          workorder
        })


      }
    )

  }

})