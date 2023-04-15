// pages/welcome/welcome.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  onTap:function(params){
      console.log(params)
      // wx.navigateTo({
      //   url: '/pages/posts/posts',
      // })
      wx.switchTab({
        url: '/pages/posts/posts',
      })
      // wx.redirectTo({
      //   url: '/pages/posts/posts',
      // })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    // console.log(test,1111)
    console.log(app)
    console.log(app.test)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {
    console.log("hide welcome")
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {
console.log("unload  welcome")
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})