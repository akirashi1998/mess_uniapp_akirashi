var app = getApp()
var db = wx.cloud.database()
var _ = db.command
Page({

  /**
   * 页面的初始数据
   */
  data: {
    selectorder:"请选择班次",
    isselected:false

  },

  async onLoad(){
    await db.collection('tasks').where({
      completed:false
    }).get().then(
      res => {
        this.setData({
          result:res.data,
          tempres:res.data
        })
        console.log("这是未完成的工作记录：",this.data.result)
        var workorder = new Array()
        var temporder = new Array()
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
          temporder[i] = _year + _month + _day + res.data[i].order
        }
    
        this.setData({
          workorder,
          temporder
        })
      }
     
    )
  },



  selectorder(){
    this.setData({
      isselected:true
    })
  },


  selorder(e){
    var index = e.currentTarget.dataset.selnum
    var thisorder = this.data.workorder[index]
    this.setData({
      isselected:false,
      selectorder:thisorder
    })

    var temporder = new Array()
    var tempres = new Array()
    var res = this.data.result
    var j = 0
    for(let i = 0;i<res.length;i++){
      if(this.data.workorder[i]==thisorder){
        tempres[j] = res[i]
        temporder[j] = this.data.workorder[i]
        j++
      }
    }

    console.log(tempres)
    this.setData({
      tempres,
      temporder
    })

  },


  originorder(){
    var result = this.data.result
    var workorder = this.data.workorder
    this.setData({
      isselected:false,
      tempres:result,
      temporder:workorder,
      selectorder:"请选择班次"
    })
  },


  workdetails(){
    wx.navigateTo({
      url: '/pages/workdetails/workdetails'
    })
  }
})