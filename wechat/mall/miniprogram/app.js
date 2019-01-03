//app.js
const {
  getType
} = require('./utils/type.js')

App({
  onLaunch: function(options) {
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        traceUser: true,
      })

      this.db = wx.cloud.database({
        env: 'lutz-8e6d51'
      })
    }
  },

  onShow: function(options) {
    // console.log('onShow', options)
  },

  onHide: function() {
    // console.log('onHide')
  },

  onError: function(msg) {
    // console.log('onError', msg)
  },

  // 页面不存在时触发
  onPageNotFound(res) {
    // 如果是 tabbar 页面，需要使用 wx.switchTab
    wx.redirectTo({
      url: 'pages/index/index',
    })
  },

  /* 自定义函数 */
  bindGetUser: function() { // 判断是否登陆
    if (getType(this.userInfo) === 'null') {
      // 关闭所有页面，打开到 login 页面
      wx.reLaunch({
        url: '/pages/login/login'
      })
    }
  },

  /* 自定义变量 */
  userInfo: null, // 授权登陆用户
})