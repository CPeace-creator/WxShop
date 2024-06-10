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
            fields: ['account','isLogin'],
            actions:['getAccount']
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
        console.log(this.data.isCheck);
        this.setData({
            isCheck:!this.data.isCheck
        })
        console.log(this.data.isCheck);
    },
    login: function() {
      // 模拟账号密码校验
      const account = login.getAccount()
      if (account[0]!=null) {
        if(!this.data.account || !this.data.password){
            this.setData({
                errorMessage: '请输入账号/密码'
              });
              return
        }
        if(!this.data.isCheck)
        {
            this.setData({
                errorMessage: '请勾选用户协议！'
              });
              return
        }
        // 判断输入的账号和密码是否与 MobX 数组中的任何一项匹配
    const isMatched = login.getAccount().some(item => item.username === this.data.account && item.password === this.data.password);
        if(!isMatched){
            this.setData({
                errorMessage:'密码错误请重试!'
            })
            return
        }
        login.isLogin=1
        wx.switchTab({
          url: '/pages/index/index' // 进入首页的路径
        });
        login.addAccount(this.data.account,this.data.password)
        wx.setStorageSync('username', this.data.account)
      } else {
        // 账号密码不匹配，显示错误信息
        this.setData({
          errorMessage: '请先注册账号和密码'
        });
        wx.navigateTo({
          url: '/pages/register/register',
        })
      }
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
			//显示密码
			showPass(e) {
				this.show = e;
			},
			//选择登录方式
			changeway(r) {
				if (r) {
					this.usernamelogin = false;
					this.codelogin = true;
				} else {
					this.usernamelogin = true;
					this.codelogin = false;
				}
			},
			//验证
			validate(key) {
				let bool = true;
				if (!this.rules[key].rule.test(this[key])) {
					//提示信息
					wx.showToast({
						title: this.rules[key].msg,
						icon: 'none'
					})
					//取反
					bool = false;
					return false;
				}
				return bool;
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
  });
  