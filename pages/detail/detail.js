// pages/detail/detail.js
import {createStoreBindings} from 'mobx-miniprogram-bindings';
import {store} from '../../store/store';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    defaultPic:'https://img3.doubanio.com/f/movie/8dd0c794499fe925ae2ae89ee30cd225750457b4/pics/moive/celebrith-default-medium.png',
    goods:{},
    commentList:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    console.log(options.id);
    createStoreBindings(this,{
        store: store,
        fields: ['itemList','cartList'],
        actions:['getCartList']
      })
      console.log(store.itemList);
      const obj=store.itemList.find(d=>d.id==options.id);
      this.setData({
          goods:obj
      })
  },
// 处理评论提交事件
submitComment: function(commentContent) {
    // 将评论内容添加到页面的评论列表中
    const commentList = this.data.commentList;
    commentList.push(commentContent);
    this.setData({
      commentList: commentList
    });
    // 在这里可以将评论内容发送到服务器保存，或者进行其他逻辑处理
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