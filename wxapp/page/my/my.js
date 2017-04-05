
// 引入coolsite360交互配置设定
require('coolsite.config.js');

// 获取全局应用程序实例对象
var app = getApp();

// 创建页面实例对象
Page({
  /**
   * 页面名称
   */
  name: "my",
  /**
   * 页面的初始数据
   */

  data: {
    
   // 模态对话框样式 
   modalShowStyle: ""
  
  },

  // 隐藏模态框
    hideModal() {
        this.setData({modalShowStyle: ""});
    },
    // 点击新建日记按钮
    touchAdd: function (event) {
        this.setData({
            modalShowStyle: "opacity:1;pointer-events:auto;"
        })
    },
    // 取消标题输入
    touchCancel: function(event) {
        this.hideModal();
        this.clearTitle();
    }, 

    // 标题输入事件
    titleInput: function(event) {
        this.setData({
            diaryTitle: event.detail.value,
        })
    },
    // 新建日记
    touchAddNew: function(event) {
        this.hideModal();

        wx.navigateTo({
            url: "../write/write?title=" + this.data.diaryTitle,
        });
    },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad () {
    // 注册coolsite360交互模块
    app.coolsite360.register(this);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow () {
    // 执行coolsite360交互组件展示
    app.coolsite360.onShow(this);
    this.hideModal();
    this.clearTitle();
  },

  // 清除日记标题
    clearTitle() {
        this.setData({diaryTitle: ""});
    },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh () {
    
  },


  //以下为自定义点击事件
})

