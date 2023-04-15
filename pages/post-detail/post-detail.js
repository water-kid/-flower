// pages/post-detail/post-detail.js
import {postList} from "../../data/data.js"
let app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isPlaying:false,
    post:{},
    isCollection:false,
    pid:null,
    // 不做数据绑定 加下划线
    _collectionList:{},
    _manager:null
  },
  handleCollection(){
    console.log("collection",this.data.isCollection)

    this.data._collectionList[this.data.pid] =  !this.data._collectionList[this.data.pid]
 
    wx.setStorageSync('collectionList', this.data._collectionList)
    this.setData({
      isCollection:!this.data.isCollection
    })


    wx.showToast({
      title: this.data.isCollection?"收藏成功":"取消收藏",
      duration:1000 //停留多长时间 
    })

  },
  handleMusicClose(){
    // 直接关闭
    this.setData({
      isPlaying:false
    })
    app.gIsPlayingAudio = false
    this.data._manager.stop()
  },
  handleMusicStart(){
    this.data._manager.src = postList[this.data.pid].music.url
    this.data._manager.title = postList[this.data.pid].music.title
    this.data._manager.coverImgUrl = postList[this.data.pid].music.coverImgUrl
    this.data._manager.play()
    this.setData({
      isPlaying : true
    })
    app.gIsPlayingAudio = true
    app.gIsPlayingPostId = this.data.pid
  }, 
  handleMusicStop(){
    this.data._manager.pause()
    this.setData({
      isPlaying:false
    })
    app.gIsPlayingAudio = false
    
  },
  handleShare(){
    wx.showActionSheet({
      itemList: ["分享到QQ","分享到微信"],
      success(res){
        console.log(res)// {errMsg: "showActionSheet:ok", tapIndex: 1}
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    let manager = wx.getBackgroundAudioManager()


    let collectionList = wx.getStorageSync('collectionList')
  
    
    let pid = options.pid


    this.data._manager = manager

    manager.onPlay(this.handleMusicStart)
    manager.onPause(this.handleMusicStop)
    manager.onStop(this.handleMusicClose)

    console.log(app.gIsPlayingPostId)
    this.setData({
      post:postList[pid],
      pid:pid,
      isCollection:collectionList[pid],
      _collectionList : collectionList?collectionList:this.data._collectionList,
      isPlaying:app.gIsPlayingPostId===pid?app.gIsPlayingAudio:false
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