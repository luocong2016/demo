const {
  getType
} = require('../../utils/type.js')
const app = getApp()

Page({
  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    if (getType(app.userInfo) !== 'null') {
      wx.switchTab({
        url: '/pages/index/index'
      })
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {
  },

  bindWxLogin: function(event) {
    const {
      errMsg,
      rawData
    } = event.detail
    if (!rawData) {
      wx.showModal({
        title: '提示',
        content: '登陆错误,请重试。',
        showCancel: false,
      })
      return
    }
    let userInfo = {}
    try {
      userInfo = JSON.parse(rawData);
    } catch (err) {
      userInfo = {}
    }
    app.userInfo = userInfo
    wx.switchTab({
      url: '/pages/index/index'
    })
  },

})