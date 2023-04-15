// pages/movie-more/movie-more.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    movies:[],
    _type:"" // 更多movie的类型
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    console.log(options)
    let type = options.type
    this.data._type = type;
    let base_url = app.gBaseUrl
    wx.request({
      url: `${base_url}/${type}`,
      data:{
        start:0,
        count:12
      },
      success:(res)=>{
        console.log(res)
        this.setData({
          movies:res.data.subjects
        })
      }
    })
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

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {
    console.log("pull down")
    // wx.startPullDownRefresh()
    wx.request({
      url: app.gBaseUrl+"/"+this.data._type,
      data:{
        start:0,
        count:12
      },
      success:(res)=>{
        this.setData({
          movies:res.data.subjects
        })
        wx.stopPullDownRefresh()
      }
    })
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {
    console.log("到底了...")

  let baseUrl = app.gBaseUrl;
    // 往下翻刷新
    wx.showNavigationBarLoading()
    wx.request({
      url: `${baseUrl}/${this.data._type}`,
      data:{
        start:this.data.movies.length,
        count:12
      },
      success:(res)=>{
        console.log(res)
        this.setData({
          movies:[...this.data.movies,...res.data.subjects]
        })

        wx.hideNavigationBarLoading()
      }
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})