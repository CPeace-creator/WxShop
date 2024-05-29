// pages/my/my.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        scrollTop:0,
        wh:10,
        active:0,
        cateLevel2List:[],
        cateList:[
            {
            'cat_id':1,
            'cat_name':'常用分类',
            'cat_pid':0,
            'cat_level':0,
            'children':[
                {
                    'cat_id':2,
                    'cat_name':'充电宝',
                    'cat_pid':0,
                    'cat_level':0,
                    'children':[{
                        'cat_id':3,
                        'cat_name':'充电宝',
                        'cat_pid':0,
                        'cat_level':0,
                        'url':'/static/images/cdb/c1.JPG'
                    },
                    {
                        'cat_id':3,
                        'cat_name':'精品充电宝',
                        'cat_pid':0,
                        'cat_level':0,
                        'url':'/static/images/cdb/c2.JPG'
                    },
                    {
                        'cat_id':3,
                        'cat_name':'打折充电宝',
                        'cat_pid':0,
                        'cat_level':0,
                        'url':'/static/images/cdb/c3.JPG'
                    }]
                },
                {
                    'cat_id':2,
                    'cat_name':'口红',
                    'cat_pid':0,
                    'cat_level':0,
                    'children':[{
                        'cat_id':3,
                        'cat_name':'口红',
                        'cat_pid':0,
                        'cat_level':0,
                        'url':'/static/images/kh/h1.JPG'
                    },
                    {
                        'cat_id':3,
                        'cat_name':'精品口红',
                        'cat_pid':0,
                        'cat_level':0,
                        'url':'/static/images/kh/h2.JPG'
                    },
                    {
                        'cat_id':3,
                        'cat_name':'打折口红',
                        'cat_pid':0,
                        'cat_level':0,
                        'url':'/static/images/kh/h3.JPG'
                    }]
                },
                {
                    'cat_id':2,
                    'cat_name':'空调',
                    'cat_pid':0,
                    'cat_level':0,
                    'children':[{
                        'cat_id':3,
                        'cat_name':'空调',
                        'cat_pid':0,
                        'cat_level':0,
                        'url':'/static/images/kt/k1.JPG'
                    },
                    {
                        'cat_id':3,
                        'cat_name':'精品空调',
                        'cat_pid':0,
                        'cat_level':0,
                        'url':'/static/images/kt/k2.JPG'
                    },
                    {
                        'cat_id':3,
                        'cat_name':'折扣空调',
                        'cat_pid':0,
                        'cat_level':0,
                        'url':'/static/images/kt/k3.JPG'
                    }]
                },
            ]
        },
        {
        
            'cat_id':1,
            'cat_name':'男装',
            'cat_pid':0,
            'cat_level':0,
            'children':[
                {
                    'cat_id':2,
                    'cat_name':'男装',
                    'cat_pid':0,
                    'cat_level':0,
                    'children':[{
                        'cat_id':3,
                        'cat_name':'男装',
                        'cat_pid':0,
                        'cat_level':0,
                        'url':'/static/images/nz/1.JPG',
                        'js':'男装的介绍哈哈哈哈哈啊哈哈哈哈啊哈哈哈啊哈啊哈哈好哈啊'
                    },
                    {
                        'cat_id':3,
                        'cat_name':'折扣男装',
                        'cat_pid':0,
                        'cat_level':0,
                        'url':'/static/images/nz/2.JPG'
                    },
                    {
                        'cat_id':3,
                        'cat_name':'精品男装',
                        'cat_pid':0,
                        'cat_level':0,
                        'url':'/static/images/nz/3.JPG'
                    }]
                }
            ]
        },
        {
        
            'cat_id':1,
            'cat_name':'女装',
            'cat_pid':0,
            'cat_level':0,
            'children':[
                {
                    'cat_id':2,
                    'cat_name':'女装',
                    'cat_pid':0,
                    'cat_level':0,
                    'children':[{
                        'cat_id':3,
                        'cat_name':'女装',
                        'cat_pid':0,
                        'cat_level':0,
                        'url':'/static/images/nz2/1.JPG'
                    },
                    {
                        'cat_id':3,
                        'cat_name':'折扣女装',
                        'cat_pid':0,
                        'cat_level':0,
                        'url':'/static/images/nz2/2.JPG'
                    },
                    {
                        'cat_id':3,
                        'cat_name':'精品女装',
                        'cat_pid':0,
                        'cat_level':0,
                        'url':'/static/images/nz2/3.JPG'
                    }]
                }
            ]
        },{
        
            'cat_id':1,
            'cat_name':'空调',
            'cat_pid':0,
            'cat_level':0,
            'children':[
                {
                    'cat_id':2,
                    'cat_name':'空调',
                    'cat_pid':0,
                    'cat_level':0,
                    'children':[{
                        'cat_id':3,
                        'cat_name':'空调',
                        'cat_pid':0,
                        'cat_level':0,
                        'url':'/static/images/kt/k1.JPG'
                    },
                    {
                        'cat_id':3,
                        'cat_name':'大空调',
                        'cat_pid':0,
                        'cat_level':0,
                        'url':'/static/images/kt/k2.JPG'
                    },
                    {
                        'cat_id':3,
                        'cat_name':'精品空调',
                        'cat_pid':0,
                        'cat_level':0,
                        'url':'/static/images/kt/k3.JPG'
                    }]
                }
            ]
        },{
        
            'cat_id':1,
            'cat_name':'口红',
            'cat_pid':0,
            'cat_level':0,
            'children':[
                {
                    'cat_id':2,
                    'cat_name':'口红',
                    'cat_pid':0,
                    'cat_level':0,
                    'children':[{
                        'cat_id':3,
                        'cat_name':'精品口红',
                        'cat_pid':0,
                        'cat_level':0,
                        'url':'/static/images/kh/h6.JPG'
                    },
                    {
                        'cat_id':3,
                        'cat_name':'折扣口红',
                        'cat_pid':0,
                        'cat_level':0,
                        'url':'/static/images/kh/h7.JPG'
                    },
                    {
                        'cat_id':3,
                        'cat_name':'精品口红',
                        'cat_pid':0,
                        'cat_level':0,
                        'url':'/static/images/kh/h9.JPG'
                    }]
                }
            ]
        },
        {
        
            'cat_id':1,
            'cat_name':'书籍',
            'cat_pid':0,
            'cat_level':0,
            'children':[
                {
                    'cat_id':2,
                    'cat_name':'书籍',
                    'cat_pid':0,
                    'cat_level':0,
                    'children':[{
                        'cat_id':3,
                        'cat_name':'Java',
                        'cat_pid':0,
                        'cat_level':0,
                        'url':'/static/images/s/1.JPG'
                    },
                    {
                        'cat_id':3,
                        'cat_name':'计算机系统',
                        'cat_pid':0,
                        'cat_level':0,
                        'url':'/static/images/s/2.JPG'
                    },
                    {
                        'cat_id':3,
                        'cat_name':'Java8',
                        'cat_pid':0,
                        'cat_level':0,
                        'url':'/static/images/s/4.JPG'
                    }]
                }
            ]
        },
        {
        
            'cat_id':1,
            'cat_name':'数码',
            'cat_pid':0,
            'cat_level':0,
            'children':[
                {
                    'cat_id':2,
                    'cat_name':'数码',
                    'cat_pid':0,
                    'cat_level':0,
                    'children':[{
                        'cat_id':3,
                        'cat_name':'相机',
                        'cat_pid':0,
                        'cat_level':0,
                        'url':'/static/images/sm/1.JPG'
                    },
                    {
                        'cat_id':3,
                        'cat_name':'耳机',
                        'cat_pid':0,
                        'cat_level':0,
                        'url':'/static/images/sm/2.JPG'
                    },
                    {
                        'cat_id':3,
                        'cat_name':'手表',
                        'cat_pid':0,
                        'cat_level':0,
                        'url':'/static/images/sm/3.JPG'
                    }]
                }
            ]
        },
        {
        
            'cat_id':1,
            'cat_name':'电脑',
            'cat_pid':0,
            'cat_level':0,
            'children':[
                {
                    'cat_id':2,
                    'cat_name':'电脑',
                    'cat_pid':0,
                    'cat_level':0,
                    'children':[{
                        'cat_id':3,
                        'cat_name':'华硕',
                        'cat_pid':0,
                        'cat_level':0,
                        'url':'/static/images/dn/1.JPG'
                    },
                    {
                        'cat_id':3,
                        'cat_name':'华为',
                        'cat_pid':0,
                        'cat_level':0,
                        'url':'/static/images/dn/2.JPG'
                    },
                    {
                        'cat_id':3,
                        'cat_name':'联想',
                        'cat_pid':0,
                        'cat_level':0,
                        'url':'/static/images/dn/3.JPG'
                    }]
                }
            ]
        },
        {
        
            'cat_id':1,
            'cat_name':'食品',
            'cat_pid':0,
            'cat_level':0,
            'children':[
                {
                    'cat_id':2,
                    'cat_name':'零食',
                    'cat_pid':0,
                    'cat_level':0,
                    'children':[{
                        'cat_id':3,
                        'cat_name':'面包',
                        'cat_pid':0,
                        'cat_level':0,
                        'url':'/static/images/sw/1.JPG'
                    },
                    {
                        'cat_id':3,
                        'cat_name':'法棍面包',
                        'cat_pid':0,
                        'cat_level':0,
                        'url':'/static/images/sw/2.JPG'
                    },
                    {
                        'cat_id':3,
                        'cat_name':'豆腐干',
                        'cat_pid':0,
                        'cat_level':0,
                        'url':'/static/images/sw/3.JPG'
                    }]
                }
            ]
        },
        {
        
            'cat_id':1,
            'cat_name':'珠宝',
            'cat_pid':0,
            'cat_level':0,
            'children':[
                {
                    'cat_id':2,
                    'cat_name':'珠宝',
                    'cat_pid':0,
                    'cat_level':0,
                    'children':[{
                        'cat_id':3,
                        'cat_name':'手镯',
                        'cat_pid':0,
                        'cat_level':0,
                        'url':'/static/images/zb/1.JPG'
                    },
                    {
                        'cat_id':3,
                        'cat_name':'戒指',
                        'cat_pid':0,
                        'cat_level':0,
                        'url':'/static/images/zb/2.JPG'
                    },
                    {
                        'cat_id':3,
                        'cat_name':'玉佩',
                        'cat_pid':0,
                        'cat_level':0,
                        'url':'/static/images/zb/3.JPG'
                    }]
                }
            ]
        },
    ]
,
    },
  
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function() {
        const info = wx.getSystemInfoSync();
        // console.log(this.data.wh)
        this.setData({
            wh: info.screenHeight,
          cateLevel2List: this.data.cateList[0].children
        });
        // console.log(this.data.wh)
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
    changeActive:function(i){
        var index = i.currentTarget.dataset.index; 
        this.setData({
            active: index,
            cateLevel2List: this.data.cateList[index].children,
            scrollTop:this.data.scrollTop===0?1:0
          });
        //   console.log(this.data.scrollTop)
    }
  })