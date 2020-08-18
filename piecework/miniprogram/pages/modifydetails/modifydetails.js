var db = wx.cloud.database()
Page({

  data:{
    
  },

  
  onLoad(options){
    var workid = options.workid
    this.setData({
      workid
    })

    db.collection('tasks').where({
      _id:workid
    }).get().then(
      res=>{
        this.setData({
          result:res.data[0]
        })

        console.log(res.data[0])
        this.setData({
          name:this.data.result.workname,
          amount:this.data.result.workamount,
          price:this.data.result.price,
          whom:this.data.result.name,
          order:this.data.result.order,
          remark:this.data.result.remark
          
        })
      },
    )
  },


  getname(e){
    this.setData({
      name:e.detail.name
    })
  },
  
  getamount(e){
    this.setData({
      amount:e.detail.amount
    })
  },


  getprice(e){
    this.setData({
      price:e.detail.price
    })
  },

  getwhom(e){
    this.setData({
      whom:e.detail.whom
    })
  },


  getorder(e){
    this.setData({
      order:e.detail.order
    })
  },


  getremark(e){
    this.setData({
      remark:e.detail.remark
    })
  },


  modify(){
    var name = this.data.name
    var amount = this.data.amount
    var price = this.data.price
    var whom = this.data.whom
    var order = this.data.order
    var remark = this.data.remark
    var workid = this.data.workid


    db.collection('tasks').where({
      _id:workid
    }).update({
      data:{
        workname:name,
        workamount:amount,
        price:price,
        name:whom,
        order:order,
        remark:remark
      }
    }).then(
      res=>{
        console.log(res)
      }
    )

    wx.showToast({
      title: '已提交修改',
      icon:'success'
    })
  }







})