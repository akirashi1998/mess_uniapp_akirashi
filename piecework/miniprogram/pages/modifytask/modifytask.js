var db = wx.cloud.database()
Page({

  data:{


  },

  onReady(){
    db.collection('tasks').where({
      completed:false
    }).get().then(
      res=>{
        this.setData({
          result:res.data
        })


        var order = new Array()
        for(let i = 0;i<res.data.length;i++){
          var worktime = String(res.data[i].worktime)
          var day = new Array()
          day = worktime.split(" ")
          var _year = day[3] + "年"
          var _month = day[1] 
          var _day = day[2] + "日"
          var monthstr = ["","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
          for(let j = 1;j<monthstr.length;j++){
            if(_month == monthstr[j]){
              _month = String(j) + "月"
            }
          }
          order[i] = _year + _month + _day + res.data[i].order
        }
      
        this.setData({
          order
        })
      }
    )
    
    


  },


  modify(e){
    console.log(e.currentTarget.dataset.index)
    var index = e.currentTarget.dataset.index
    console.log(this.data.result[index]._id)
    var workid = this.data.result[index]._id

    wx.navigateTo({
      url: '/pages/modifydetails/modifydetails?workid='+workid,
    })
  }


})