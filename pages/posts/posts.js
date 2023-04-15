// pages/posts/posts.js
// require不能使用绝对路径
// var postData = require("../../data/data.js")
// console.log(postData,222222222)

import {postList} from "../../data/data.js"
console.log(postList,11111111111)
Page({

  /**
   * 页面的初始数据
   */
  data: {
    a:"hello world",
    content:[{
      name:"cc",
      age:1
    },{
      name:"ww",
      age:2
    }]
  },
  handleJumpToDetail(event){
    console.log(event)
    let pid = event.detail.pid | event.currentTarget.dataset.postId
    // let pid = event.currentTarget.dataset.postId
    wx.navigateTo({
      url: '/pages/post-detail/post-detail?pid='+pid,
    })
  },
  handleMaxImage(){

    console.log("max image")
  },

  /**
   * 生命周期函数--监听页面加载
   */
  async onLoad(options) {

    let pages = getCurrentPages()
    console.log(pages,555)
  
  wx.setStorageSync('flag', 1)
   

    let flag = await wx.getStorage({
      key:"flag"
    })

    console.log(flag)

    this.setData({
      b:"2021"
    })
    console.log("onload...")
    let obj={name:"cc",age:18}
    this.setData({
      postList
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    console.log("onReady...")
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    // 异步操作
    console.log("onShow...")
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {
    console.log("on hide")
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {
    console.log("unload")
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {
    console.log("pull down refresh")
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {
    console.log("reach bottom")
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {
    console.log("share app message")
  }
})