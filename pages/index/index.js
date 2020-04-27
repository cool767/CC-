//index.js
//获取应用实例
const app = getApp()

import { request } from '../../request/request'
Page({
  data: {
    swiperImg:[],
    navImg:[],
    flood:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 获取轮播图数据
    this.getswiperdata()
    // 获取导航数据
    this.getnavdata()
    // 获取flood数据
    this.getflooddata()
  },


  // 获取轮播图数据
  getswiperdata(){
    request({ url:"/home/swiperdata" }).then( res => { 
      const swiperImg = res.data.message
      this.setData({ swiperImg })
     })
  },
  // 获取导航数据
  getnavdata(){
    request({url:"/home/catitems"}).then(res => {
      let navImg = res.data.message
      this.setData({ navImg })
    })
  },
  // 获取flood数据
  getflooddata(){
    request({ url:"/home/floordata"}).then(res => {
      const flood = res.data.message
      this.setData({ flood })
    })
  }





})
