// pages/search/search.js
import {request} from '../../request/request'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showcancle:false,
    searchlist:[],
    value:''
  },
  query:'',
  // 输入文本触发
  input(e){
    let value = e.detail.value
    this.query = value
    if(value.trim()){
      // 发送数据
      this.getsearchdata(this.query)
      // 显示取消按钮
      let showcancle = this.data.showcancle
      showcancle = true
      this.setData({showcancle,value})
    }else{
      // 隐藏取消按钮
      let showcancle = false
      this.setData({ showcancle, searchlist:[]})
    }
  },  
  canclehandel(){
    this.setData({ value: '', searchlist: []})
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  },
  getsearchdata(query){
    request({ url:"/goods/qsearch" , data:{query}}).then(res => {
      const searchlist = res.data.message
      this.setData({searchlist})
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