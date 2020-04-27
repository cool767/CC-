// pages/category/category.js
import { request } from '../../request/request'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    leftname:[],
    righticon:[],
    curryindex:0
  },
  scrolldata:[],


  // left中name点击事件变色 跳转右侧页面
  nameclick(e){
    // 高亮显示
    let index = e.currentTarget.dataset.index
    let curryindex = index
    this.setData({ curryindex })
    console.log(curryindex);
    
    // 右侧跳转
    this.getdata()

  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 获取数据
    this.getdata()
  },
  // 获取数据
  getdata(){
    request({ url:"/categories"}).then(res => {
     this.scrolldata = res.data.message
      let leftname = this.scrolldata.map(item => item.cat_name)
      let righticon = this.scrolldata[this.data.curryindex].children
      this.setData({ leftname , righticon })
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