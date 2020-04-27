// pages/goods_detail/goods_detail.js
import { request } from '../../request/request'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goodsdata:{},
    iscollect:false
  },
// 加入购物车
  addcart(){
    const goodslist = wx.getStorageSync("goodslist")||[]; 
    const index = goodslist.findIndex(item => { return item.goods_id===this.data.goodsdata.goods_id })
    if(index===-1){
      const goodsdata = this.data.goodsdata
      goodsdata.count = 1
      goodsdata.checked = true
      goodslist.push(this.data.goodsdata)
      this.setData({ goodsdata })
    }else{
      goodslist[index].count++
    }
    wx.showToast({
      title: '已加入购物车',
      icon: "success",
    });
    wx.setStorageSync("goodslist", goodslist);
  },
  // 点击收藏
  collect(){
    // 收藏图标变色
    let iscollect = this.data.iscollect
    iscollect = !iscollect
    this.setData({iscollect})
    // 获取数据放入store
    let collect = wx.getStorageSync("collect")||[];
    collect.push(this.data.goodsdata)
    wx.setStorageSync("collect", collect);
  },




  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const goods_id = options.goods_id
    this.getgoodsdata(goods_id)
  },
  getgoodsdata(goods_id){
    request({ url:"/goods/detail" , data:{ goods_id }}).then(res => {
      const goodsdata = res.data.message
      this.setData({ goodsdata })
    })
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