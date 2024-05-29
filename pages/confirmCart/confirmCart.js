// pages/confirmCart/confirmCart.js
import {createStoreBindings} from 'mobx-miniprogram-bindings';
import {store} from '../../store/store';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    checkedGoodsAmount:0,
    address:"",
    name:"",
    phone:"",
    focus: true,
    inputValue: '',
    checked:true,
    payList:[
      {
        "name":"京东支付",
        "url":"/static/jd.png",
        "isChecked":false
      },
      {
        "name":"支付宝支付",
        "url":"/static/zfb.png",
        "isChecked":true
      },
      {
        "name":"微信支付",
        "url":"/static/wx.png",
        "isChecked":false
      },
    ]
  },
  checkName: function(e) {
    this.setData({
      name: e.detail.value // 更新输入的账号
    });
  },
  checkPhone: function(e) {
    this.setData({
      phone: e.detail.value // 更新输入的密码
    });
  },
  checkAddress: function(e) {
    this.setData({
      address: e.detail.value // 更新输入的密码
    });
  },
  bindKeyInput: function (e) {
    this.setData({
      inputValue: e.detail.value
    })
  },
  bindReplaceInput: function (e) {
    var value = e.detail.value
    var pos = e.detail.cursor
    var left
    if (pos !== -1) {
      // 光标在中间
      left = e.detail.value.slice(0, pos)
      // 计算光标的位置
      pos = left.replace(/11/g, '2').length
    }

    // 直接返回对象，可以对输入进行过滤处理，同时可以控制光标的位置
    return {
      value: value.replace(/11/g, '2'),
      cursor: pos
    }

    // 或者直接返回字符串,光标在最后边
    // return value.replace(/11/g,'2'),
  },
  bindHideKeyboard: function (e) {
    if (e.detail.value === '123') {
      // 收起键盘
      wx.hideKeyboard()
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    createStoreBindings(this,{
      store: store,
      fields: ['checkedGoodsAmount','cartList']
    })
    this.setData({
      checkedGoodsAmount:store.checkedGoodsAmount
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
  checkedItem: function (event) {
    let item = event.target.dataset.index;
    // console.log(event);
    const updatedPayList = this.data.payList.map(cart => {
      if (cart.name === item.name) {
          return {
              ...cart,
              isChecked: !item.isChecked
          };
      }else{
        return{
          ...cart,
          isChecked: false
        }
      }
      return cart;
  });
    this.setData({
      payList:updatedPayList
    })
  },
  pay(){
    if(this.data.address=="" ||this.data.name=="" || this.data.phone==""){
      wx.showToast({
        title: '请填写完整信息',
        icon: 'none',
        duration: 2000
      });
      return
    }
    store.cartList=store.cartList.filter(item => !item.checked)
    store.checkedGoodsAmount = 0; // 重置已选商品
    wx.navigateTo({
      url: '/pages/successCart/successCart',
    })
  }
})