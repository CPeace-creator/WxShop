var app = getApp();
Component({
	/**
	 * 组件的属性列表
	 */
	properties: {},
 
	/**
	 * 组件的初始数据
	 */
	data: {
		is_on: app.globalData.isPlay
	},
 
	/**
	 * 组件的方法列表
	 */
	methods: {
		tigger() {
			this.setData({
				is_on: !this.data.is_on
			});
			app.globalData.isPlay = this.data.is_on;
			if (!this.data.is_on) {
				app.globalData.bgrAudioContext.pause();
			} else {
				app.globalData.bgrAudioContext.play();
			}
		},
		init() {
			var is_on = app.globalData.isPlay;
			if (app.globalData.isPlay) {
				is_on = true;
                app.globalData.bgrAudioContext.play();
			}else{
                is_on = false;
				app.globalData.isPlay = false;
                app.globalData.bgrAudioContext.pause();
			}
			this.setData({
				is_on: is_on
			})
		}
	},
	ready() {
	
	},
	pageLifetimes: {
		show: function() {
			// 页面被展示
			this.init();
		},
		hide: function() {
			// 页面被隐藏
		},
		resize: function(size) {
			// 页面尺寸变化
		}
	}
	
})