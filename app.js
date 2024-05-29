// app.js
App({
    globalData:{
        userInfo: null,
        music:'/static/music.mp3',//背景音乐地址
        bgrAudioContext:'',
        isPlay:false //是否播放
    },
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    this.createMusic()

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  },
  createMusic(){
      this.globalData.bgrAudioContext=wx.createInnerAudioContext();
      this.globalData.bgrAudioContext.src=this.globalData.music;
      this.globalData.bgrAudioContext.loop=true;
      this.globalData.isPlay=false;//默认暂停
  }
})
