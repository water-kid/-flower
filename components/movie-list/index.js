// components/movie-list/index.js
Component({
  /**
   * 组件的属性列表
   */
  externalClasses:["f-class","f-container-class"],
  properties: {
    title:String,
    movieList:Array,
    type:String
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleMore(event){
      console.log(event,999)
      let type = event.currentTarget.dataset.type
      wx.navigateTo({
        url: '/pages/movie-more/movie-more?type='+type,
      })
    }
  }
})
