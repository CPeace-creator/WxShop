// pages/search/search.js
import {createStoreBindings} from 'mobx-miniprogram-bindings';
import {store} from '../../store/store';
Page({
  /**
   * 页面的初始数据
   */
  data: {
    kw:'',
    searchList:[],//搜索数据,
    historyList:[],//历史搜索数据
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    createStoreBindings(this,{
        store: store,
        fields: ['itemList','cartList'],
        actions:['getCartList']
      })
      this.setData({
          historyList:wx.getStorageSync('kw')|| ''
      })
  },
  input(e){
    clearTimeout(this.timer)
    this.timer=setTimeout(()=>{
        this.setData({
            kw:e.detail.value
        })
        this.getSearchList()
        this.saveHisList()
    },1000)
    // console.log(this.searchList.goods)
},
goToDetail(item){
    wx.navigateTo({
      url: '/pages/detail/detail?id='+item.currentTarget.dataset.index.id,
    })
},
 getSearchList(){
    if(this.data.kw==='' || this.data.kw.length===0){
        this.setData({
            searchList:[]
        })
        return 
    }
    this.setData({
        searchList: store.itemList.filter(d => d.pb.includes(this.data.kw))
    });    
    
},
saveHisList: function() {
    var historyList = wx.getStorageSync('kw') || []; // 从本地存储获取历史
    this.setData({
        historyList: Array.from(new Set([this.data.kw, ...historyList])).filter(item => item !== '')
    });    
    wx.setStorageSync('kw', this.data.historyList); // 将更新后的历史记录列表保存到本地存储
},
clickText(item){
    this.setData({
        searchList: store.itemList.filter(d => d.pb.includes(item.currentTarget.dataset.index))
    });    
},
clear(){
    this.setData({
        historyList:[]
    })
    wx.setStorageSync('kw','')
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