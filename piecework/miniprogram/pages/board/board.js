var db = wx.cloud.database()
Page({
  board(e){
    var newboard = e.detail.value
    this.setData({
      newboard
    })
  },

  newboard(){
    console.log(this.data.newboard)
    var newvalue = String(this.data.newboard)
    

    db.collection('others').where({
      name:"board"
    }).update({
      data:{
        board:newvalue
      }
    })

    wx.showToast({
      title: '通知发布成功',
      icon:'success'
    })
  }
})