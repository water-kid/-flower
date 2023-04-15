// components/movie/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
      movie:Object
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
    handleMovieDetails(){
      console.log(this.properties.movie)
      wx.navigateTo({
        url: '/pages/movie-details/movie-details?mid='+this.properties.movie.id,
      })
    }
  }
})
