// components/post/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    text:{
      type:String,
      value:"123"
    },
    item:Object
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
    handleTap(event){
      let pid = this.properties.item.postId
      console.log(pid)
      // 监听tapDetails 事件
      this.triggerEvent("tapDetails",{
        pid
      })
    }
  }
})
