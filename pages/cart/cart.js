// pages/cart/cart.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    address:{},
    goodslist:[],
    total:0,
    allchecked:true
  },
// 点击添加地址
  handleaddress(){
    // 查看用户是否授权
    wx.getSetting({
      success: (result)=>{
        console.log(result);
        if (result.authSetting["scope.address"] === true || result.authSetting["scope.address"] === undefined){
          wx.chooseAddress({
            success: (result) => {
              wx.setStorageSync("address", result);
            }
          });
        } else if (result.authSetting["scope.address"] === false){
          wx.openSetting({
            success: (result)=>{
            },
          });
        }
      },
      // 未授权
      fail: ()=>{
      },
      complete: ()=>{}
    });
    
  },

  // 点击item btn
  handlecheckeditem(e){
    // checked取反
    let index = e.currentTarget.dataset.index
    let goodslist = wx.getStorageSync("goodslist");
    goodslist[index].checked = !goodslist[index].checked 
    wx.setStorageSync("goodslist", goodslist);
    // 判断是否全选
    let allchecked = goodslist.every(item => {
      return item.checked===true
    })
    this.setData({ goodslist, allchecked})
    this.total()
  },

  // 点击全选按钮
  handleallchecked(){
    let allchecked = this.data.allchecked
      allchecked = !allchecked
    this.setData({ allchecked })
    let goodslist = wx.getStorageSync("goodslist");

    goodslist.forEach(item =>{
      item.checked=allchecked
    })
    wx.setStorageSync("goodslist", goodslist);
    this.setData({goodslist})
  },

  // 商品数量加减
  add(e){
    let index = e.currentTarget.dataset.index
    let goodslist = this.data.goodslist
    goodslist[index].count+=1 
    this.setData({goodslist})
    this.total()
  },
  dec(e) {
    let index = e.currentTarget.dataset.index
    let goodslist = this.data.goodslist
    if (goodslist[index].count>1){
      goodslist[index].count -= 1
    }else{
      // 删除该商品
      wx.showModal({
        title: '提示',
        content: '是否删除该商品',
        success: (result) => {
          if(result.confirm){
            goodslist.splice(index,1)
            this.setData({goodslist})
            let allchecked = this.data.allchecked
            if (this.data.goodslist.length === 0) {
              allchecked = false
            }
            this.setData({ allchecked })
          }
        },
      });
    }
    this.setData({ goodslist })
    this.total()
  },

  // 判断是否有商品  地址是否填写
  handlepay(){
    if(this.data.goodslist.length===0){
      wx.showModal({
        content: '请添加购物车商品',
      });
    } else if(this.data.address.userName===undefined){
      wx.showModal({
        content: '请添加地址',
      });
    }else{
      wx.navigateTo({
        url: '/pages/pay/pay',
      });
    }
  },


  // 计算总价
  total(){
    let goodslist = this.data.goodslist
    if(this.data.goodslist.length!=0){
      const total = goodslist.filter(item => {
        return item.checked === true
      }).reduce((pre, item) => {
        return pre += item.count * item.goods_price
      }, 0)
      this.setData({ total })
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
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
    const address = wx.getStorageSync("address");
    this.setData({ address })

    let goodslist = wx.getStorageSync("goodslist");
    this.setData({ goodslist })

    let allchecked = this.data.allchecked
    if (this.data.goodslist.length === 0) {
      allchecked = false
    }
    this.setData({ allchecked })
    this.total()
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