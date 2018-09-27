Page({
  data: {
    text: 'Hello World',
    num: 0,

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
    this.animation
      .rotateY(360)
      .step({ duration: 1000 })
      .rotateY(0)
      .step({ duration: 0 })
    this.setData({ animation: this.animation.export() })
  }
})
