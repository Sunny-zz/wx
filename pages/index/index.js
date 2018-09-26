Page({
  data: {
    text: 'Hello World',
    num: 0,
    array: [
      {
        id: 1,
        text: 'git'
      },
      {
        id: 2,
        text: 'git-1'
      },
      {
        id: 3,
        text: 'git-2'
      }
    ],
    isRotate: false,
    animation: {}
  },
  onReady() {
    this.animation = wx.createAnimation()
  },
  add() {
    const { num } = this.data
    // wx.navigateTo({
    //   url: '../../pages/info/info'
    // })
    this.setData({
      num: num + 1
    })
  },
  sub() {
    const { num } = this.data
    this.setData({
      num: num - 1
    })
  },
  xuanzhuan() {
    this.setData({
      isRotate: true
    })
  },
  rotate: function() {
    const that = this
    that.animation.rotate(360).step({ duration: 1000 })
    that.setData({ animation: that.animation.export() })
  }
})