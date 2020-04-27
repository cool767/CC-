export  const request = (params) => {
  return new Promise((resolve,reject) => {
    const baseUrl = "https://api-hmugo-web.itheima.net/api/public/v1"
    wx.showLoading({title: "加载中",mask: true}),
    wx.request({
      ...params,
      url: baseUrl + params.url ,
      success: (result)=>{
        resolve(result)
      },
      fail: (err)=>{
        reject(err)
      },
      complete: ()=>{ wx.hideLoading() }
    });
  })
}