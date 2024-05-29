import {createStoreBindings} from 'mobx-miniprogram-bindings';
import {login} from '../../store/login';
import {store} from '../../store/store';
// pages/my/my.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    serviceList:[
      {
        "url":"/static/images/my/06.png",
        "name":"客服服务"
      },
      {
        "url":"/static/images/my/07.png",
        "name":"寄件服务"
      },
      {
        "url":"/static/images/my/08.png",
        "name":"主题换肤"
      },
      {
        "url":"/static/images/my/09.png",
        "name":"闲置换钱"
      },
      {
        "url":"/static/1.png",
        "name":"售后管理"
      },
      {
        "url":"/static/2.png",
        "name":"电话咨询"
      },
      {
        "url":"/static/3.png",
        "name":"上门服务"
      },
      {
        "url":"/static/4.png",
        "name":"二手回收"
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    createStoreBindings(this,{
        store: login,
        fields:['accounts'],
        actions:['clearAccount']
      }),
      createStoreBindings(this,{
        store: store,
        fields: ['itemList','cartList','checkedGoodsAmount']
      })
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

  },
  loginOut(){
    login.clearAccount()
    store.checkedGoodsAmount=0
    store.cartList=[]
  }
})