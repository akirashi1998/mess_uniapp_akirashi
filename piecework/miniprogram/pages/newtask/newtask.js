// miniprogram/pages/newtask/newtask.js
var db = wx.cloud.database()

Page({

  data:{
    order:"白班"
  },







  getname(e){
    var name = e.detail.value
    this.setData({
      name
    })
  },


  getamount(e){
    var amount = parseInt(e.detail.value)
    this.setData({
      amount
    })
    console.log(amount)
  },


  getprice(e){
    var price = parseFloat(e.detail.value)

    this.setData({
      price
    })
  },


  getid(e){
    var id = parseInt(e.detail.value)

    this.setData({
      id
    })
  },



  getremark(e){
    var remark = e.detail.value

    this.setData({
      remark
    })
  },


  gettime(e){
    var wtime = e.detail.value

    this.setData({
      wtime
    })

    console.log("时间是",wtime)
  },


  changeorder(){
    if(this.data.order == "白班"){
      this.setData({
        order:"夜班"
      })
    }else if(this.data.order == "夜班"){
      this.setData({
        order:"白班"
      })
    }

    
    console.log(this.data.order)
  },



  newtask(){
    if(this.data.name==null||this.data.amount==null||this.data.price==null||this.data.id==null){
      wx.showToast({
        title: '请填写完整任务说明',
        icon:'none'
      })
    }else{
      
      db.collection('tasks').add({
        data:{
          administ:"employ",
          completed:false,
          worktime:new Date(this.data.wtime),
          workname:this.data.name,
          workamount:this.data.amount,
          price:this.data.price,
          remark:this.data.remark,
          name:this.data.id,
          order:this.data.order
        }
      }).then(
        res=>{
          wx.showToast({
            title: '任务发布成功',
            icon:'success'
          })
        }
      )
    }
  }
})