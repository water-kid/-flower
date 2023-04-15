// pages/movie/movie.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inTheaters:[],
    comingSoon:[],
    top250:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
   onLoad(options) {
     const baseUrl = app.gBaseUrl
   wx.request({
        url: `${baseUrl}/in_theaters`,
        data:{
          start:0,
          count:3
        },
        success:(res)=>{
          console.log(res)
          this.setData({
            inTheaters:res.data.subjects
          })
        }
      })


      wx.request({
        url: `http://t.talelin.com/v2/movie/coming_soon?start=3&count=3`,
        success:(res)=>{
          this.setData({
            comingSoon:res.data.subjects
          })
        }
      })

      wx.request({
        url: 'http://t.talelin.com/v2/movie/top250?start=6&count=3',
        success:(res)=>{
          this.setData({
            top250:res.data.subjects
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