
import {createStoreBindings} from 'mobx-miniprogram-bindings';
import {store} from '../../store/store';

Page({
  data: {
    isEditCart: false,
    checkedAllStatus: false,
    editCartList: [],
    cartList:[],
    amount:0
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
    createStoreBindings(this,{
        store: store,
        fields: ['itemList','cartList','checkedGoodsAmount'],
        actions:['getCartList','getTotalAmount','getSubTotalAmount','getNewList']
      })
      // 使用 reduce 方法计算 checkedGoodsAmount
      const totalAmount = store.cartList.reduce((total, item) => total + item.price, 0);
    // this.setData({
    //     cartList: store.cartList,
    //     amount:store.checkedGoodsAmount
    // });
  },
  onReady: function () {
    // 页面渲染完成

  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏

  },
  onUnload: function () {
    // 页面关闭

  },
  // 减
  cutNumber(e) {
    // 获取当前点击项的索引
    const itemIndex = e.currentTarget.dataset.itemIndex;
    // 获取当前点击项在 cartList 中的引用
    const cartItem = store.cartList.find(d=>d.name==itemIndex.name);
    // 将当前点击项的数量加一
    cartItem.number -= 1;
    // console.log(cartItem.number);
    if(cartItem.number<=0){
        // store.getNewList(cartItem)
        cartItem.number=1
        return
    }
    if(cartItem.checked){
      store.checkedGoodsAmount = store.checkedGoodsAmount-cartItem.price
    }
    const updatedCartList = store.cartList.map(cart => {
        if (cart.name === cartItem.name) {
            return {
                ...cart,
                number: cartItem.number
            };
        }
        return cart;
    });
    this.setData({
        // amount:this.data.amount,
        cartList:updatedCartList,
    });
  },
  // 加
  addNumber(e) {
    // 获取当前点击项的索引
    const itemIndex = e.currentTarget.dataset.itemIndex;
    // 获取当前点击项在 cartList 中的引用
    const cartItem = store.cartList.find(d=>d.name==itemIndex.name);
    // 将当前点击项的数量加一
    cartItem.number += 1;
    if(cartItem.checked){
      store.checkedGoodsAmount = store.checkedGoodsAmount+cartItem.price
    }
    // store.checkedGoodsAmount = store.checkedGoodsAmount+cartItem.price
    const updatedCartList = store.cartList.map(cart => {
        if (cart.name === cartItem.name) {
            return {
                ...cart,
                number: cartItem.number
            };
        }
        return cart;
    });
    this.setData({
        cartList:updatedCartList
    });
},

  onPullDownRefresh() {
    // 显示顶部刷新图标
    wx.showNavigationBarLoading();
    // 增加下拉刷新数据的功能
    var self = this;
    this.getCartList();
    // 隐藏导航栏加载框
    wx.hideNavigationBarLoading();
    // 停止下拉动作
    wx.stopPullDownRefresh();
  },
  toIndexPage: function () {
    wx.switchTab({
      url: "/pages/index/index"
    });
  },
  checkoutOrder: function (e) {
    // 获取已选择的商品
    let that = this;
    wx.showModal({
        title: '提示',
        content: '确认下单',
        success: function (res) {
            if (res.confirm) { // 确认下单
                wx.showToast({
                    title: '成功',
                    icon: 'success',
                    duration: 2000 // 持续的时间
                });
                wx.navigateTo({
                  url: '/pages/confirmCart/confirmCart',
                })
                // store.cartList=store.cartList.filter(item => !item.checked)
                // store.checkedGoodsAmount = 0; // 重置已选商品数量
            } else { // 取消下单
                wx.showToast({
                    title: '取消',
                    icon: 'success',
                    duration: 2000 // 持续的时间
                });
            }
        }
    });
},
  // 删除所选
  deleteCart(e) {
    console.log('e===', e);
  },

  checkedItem: function (event) {
    let item = event.target.dataset.itemIndex;
    const updatedCartList = store.cartList.map(cart => {
        if (cart.name === item.name) {
            return {
                ...cart,
                checked: !item.checked
            };
        }
        return cart;
    });
    store.cartList=updatedCartList
    store.checkedGoodsAmount = store.cartList.reduce((total, item) => {
        if (item.checked) {
            return total + (item.price * item.number);
        }
        return total;
    }, 0);
  },
})