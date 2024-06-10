// index.js
import {createStoreBindings} from 'mobx-miniprogram-bindings';
import {login} from '../../store/login';
import { store } from '../../store/store';
Page({
    data: {
      comments: [{
        author: 'admin',
        text: '商城很棒'
      }],
      newComment: {
        author: '',
        text: ''
      },
      showCommentPopup: false
    },
    onLoad:function(){
        createStoreBindings(this,{
            store: login,
            fields: ['accounts']
          })
          this.setData({
              'newComment.author':wx.getStorageSync('username')
          })
    },
  
    openCommentPopup: function() {
      this.setData({ showCommentPopup: true });
    },
  
    closeCommentPopup: function() {
      this.setData({ showCommentPopup: false });
    },
  
    inputName: function (e) {
      this.setData({
        'newComment.author': e.detail.value
      });
    },
  
    inputComment: function (e) {
      this.setData({
        'newComment.text': e.detail.value
      });
    },
  
    addComment: function () {
      const newComment = this.data.newComment;
      if (newComment.author.trim() === '' || newComment.text.trim() === '') {
        wx.showToast({
          title: 'Please enter your name and comment',
          icon: 'none'
        });
        return;
      }
  
      const currentDate = new Date();
      const formattedDate = `${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${currentDate.getDate()}`;
      
      const commentWithDate = {
        author: `${newComment.author} (${formattedDate})`,
        text: newComment.text
      };
  
      this.setData({
        comments: [...this.data.comments, commentWithDate],
        newComment: { author: wx.getStorageSync('username'), text: '' },
        showCommentPopup: false // Close the popup after adding comment
      });
    }
  });
  