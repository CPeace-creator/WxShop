import { observable, action } from 'mobx-miniprogram';

// 定义一个账号信息类
class Account {
    constructor() {
        this.username = '';
        this.password = '';
    }

    setUsername(username) {
        this.username = username;
    }

    clearUsername() {
        this.username = '';
    }

    setPassword(password) {
        this.password = password;
    }

    clearPassword() {
        this.password = '';
    }
}

// 创建一个存储账号信息的可观察对象
export const login = observable({
    accounts: [{username:'admin',password:'admin123'}],
    isLogin:0,//未登录
    // 添加账号信息
    addAccount(username, password) {
        const newAccount = new Account();
        newAccount.setUsername(username);
        newAccount.setPassword(password);
        this.accounts.push(newAccount);
    },

    // 删除账号信息
    removeAccount(index) {
        this.accounts.splice(index, 1);
    },
    //获取账号信息
    getAccount(){
        return this.accounts
    },
    //清空账号和密码
    clearAccount(){
        this.accounts=[]
    }
});
