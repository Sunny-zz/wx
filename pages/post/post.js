// pages/post/post.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    id: '',
    post: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    const that = this
    const { id } = that.options
    that.setData({
      id
    })

    wx.request({
      url: `https://cnodejs.org/api/v1/topic/5ba5fd6237a6965f59051bd1`, //仅为示例，并非真实的接口地址
      success(res) {
        console.log(res.data.data)
        that.setData({
          post: res.data.data
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {}
})
