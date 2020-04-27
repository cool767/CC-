// pages/goods_list/goods_list.js
import { request } from '../../request/request'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goodslist:[],
    totle:0
  },
  querylist:{
    query:"",
    cid:0,
    pagenum:0,
    pagesize:10
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const querylist = this.querylist
    querylist.cid = options.cid
    this.getlistdata(querylist)
  },
  // 获取页面数据
  getlistdata(querylist) {
    request({ url: "/goods/search",  data:  querylist }).then(res => {
      const goodslist = [...this.data.goodslist, ...res.data.message.goods]
      const total = res.data.message.total
        this.setData({ goodslist , total })
    })
  },

  /**
  * 页面上拉触底事件的处理函数
  */
  onReachBottom: function () {
    const querylist = this.querylist
    // 当前页数
    const page = querylist.pagenum++
    // 总页数
    const totalpage = Math.ceil(this.data.total / querylist.pagesize)
    if (page<totalpage){
      this.getlistdata(querylist)
    }else{
      wx.showToast({
        title: '已加载至最底端',
      });
    }

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
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})