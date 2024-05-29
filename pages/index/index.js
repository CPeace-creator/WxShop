import {createStoreBindings} from 'mobx-miniprogram-bindings';
import {store} from '../../store/store';
import {login} from '../../store/login';
Page({
  data: {
    fff:false,
    itemList:[]
  },
  // 自定义过滤器
  filters: {
    formatPrice: function(value) {
      // 确保 value 是数字类型
      value = parseFloat(value);
      // 如果 value 不是有效数字，返回空字符串
      if (isNaN(value)) return '';
      // 将 value 保留两位小数并转换为字符串
      return '¥' + value.toFixed(2);
    }
  },
  goToSearch(){
    wx.navigateTo({
      url: '/pages/search/search'
    })
  },
  onLoad: function (){  
      this.setData({
          itemList:this.itemList
      })
    createStoreBindings(this,{
        store: store,
        fields: ['itemList','cartList'],
        actions:['getCartList']
      }),
      createStoreBindings(this,{
        store: login,
        fields: ['accounts','isLogin'],
        actions:['getAccount']
      })
  
  },
  addCart: function(e) {
    var index = e.currentTarget.dataset.index; 
    if(login.isLogin===0){
        wx.showToast({
            title: '请先登录！',
            icon: 'error',
            duration: 1000,
        })
        return
    }
    // var store = this.store; // 获取 store 对象
    wx.showToast({
      title: '添加购物车成功',
      icon: 'success',
      duration: 1000,
      success: function() {
        store.getCartList(index)
        // 等待提示信息显示完毕后再执行页面跳转
        // setTimeout(function() {
        //   wx.switchTab({
        //     url: "/pages/cart/cart"
        //   });
        // }, 1000); // 延迟时间要和提示信息的显示时间保持一致
      }
    });
  }  
  
})
