import {createStoreBindings} from 'mobx-miniprogram-bindings';
import {login} from '../../store/login';
Page({
    data: {
      errorMessage: '', // 存储错误信息
      xieyi: '',
    usernamelogin: true,
    codelogin: false,
    show: true,
    isCheck: 0,
    isCheckEd: false,
    disabled: false,
    account: '3465976682@qq.com',
    password: '',
    code: '',
    ltype: '',
    text: '获取验证码',
    time: '',
    hasshowfirst: '',
    },
    onLoad:function(options){
        createStoreBindings(this,{
            store: login,
            fields: ['accounts'],
            actions:['addAccount','getAccount']
          })
    },
    inputAccount: function(e) {
      this.setData({
        account: e.detail.value // 更新输入的账号
      });
    },
    inputPassword: function(e) {
      this.setData({
        password: e.detail.value // 更新输入的密码
      });
    },
    check:function(e){
        this.setData({
            isCheck:!this.data.isCheck
        })
    },
    //跳转忘记密码
    goForget() {
        wx.navigateTo({
            url: '/pages/user/forget'
        })
    },
    //查看用户协议
    showxieyi() {
        console.log('查看用户协议')
    },
    //查看隐私政策
    showyinsi() {
        console.log('查看隐私政策')
    },
    rtrues() {
        if (this.isCheckEd) {
            return 'isCheckEd'
        }
    },
    //选中协议
    choose(e) {
        if (e.detail.value.length > 0) {
            this.isCheckEd = true;
        } else {
            this.isCheckEd = false;
        }
    },
    //倒计时
    setInterValFunc() {
        this.time = 300;
        this.text = '秒';
        this.setTime = setInterval(() => {
            if (this.time - 1 == 0) {
                this.time = '';
                this.text = '重新获取';
                this.code = '';
                this.disabled = false;
                clearInterval(this.setTime);
            } else {
                this.time--;
            }
        }, 1000);
    },
    //跳转
    goto(url) {
        wx.navigateTo({
            url: url
        })
    },
    //注册功能
    register: function() {
        // 模拟账号密码校验
        if (this.data.password.length>=6) {
          if(!this.data.isCheck)
          {
              this.setData({
                  errorMessage: '请勾选用户协议！'
                });
                return
          }
          const isMatched = login.getAccount().some(item => item.username === this.data.account );
          if(isMatched){
            this.setData({
              errorMessage:"已经存在重复账号请注册另外一个账号!"
            })
            return
          }
          login.addAccount(this.data.account,this.data.password)
          wx.navigateTo({
            url: '/pages/login/login' // 进入首页的路径
          });
        } else {
          this.setData({
            errorMessage: '请输入六位密码'
          });
        }
      },
  });
  