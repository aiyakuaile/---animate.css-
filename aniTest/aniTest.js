Page({

  /**
   * 页面的初始数据
   */
  data: {
    animationType:"animated bounce",
    animationName:"bounce",
    infinite:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  },
  //按钮点击
  clickBtn:function(){
    // "animated bounce infinite"
    if (this.data.infinite){
      console.log("打开循环")
      this.setData({
        animationType: "animated " + this.data.animationName +" infinite"
      })
    }else{
      console.log("取消循环")
      this.setData({
        animationType: "animated " + this.data.animationName
      })
    }
  },
  checkboxChange: function (e) {
    
    this.data.infinite = this.data.infinite ? false : true

  },
  clickAniBtn:function(e){
    // console.log("冒泡：" + e.target.dataset.btnname);
   var aniName = e.target.dataset.btnname;
    this.setData({
      animationName: aniName      
    })
  }
})
