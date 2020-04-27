// pages/collect/collect.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    collect:[],
    themelist:[{
      isactive:true,
      value:"收藏的店铺"
    }, {
        isactive: false,
        value: "收藏的商品"
      },
    {
        isactive: false,
        value: "关注的商品"
      },
    {
        isactive: false,
        value: "我的足记"
      }]
  },
  // 点击navitem
  handlethemeitem(e){
    let index = e.currentTarget.dataset.index
    const themelist = this.data.themelist
    themelist.forEach((item,i) => {
      if(index===i){
        item.isactive=true
      }else{
        item.isactive=false
      }
    });
    this.setData({ themelist })
  },  

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let collect = wx.getStorageSync("collect");
    this.setData({ collect })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})