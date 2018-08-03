let sourceData = [{
  product: "手机",
  region: "华东",
  sale: [120, 100, 140, 160, 180, 185, 190, 210, 230, 245, 255, 270]
}, {
  product: "手机",
  region: "华北",
  sale: [80, 70, 90, 110, 130, 145, 150, 160, 170, 185, 190, 200]
}, {
  product: "手机",
  region: "华南",
  sale: [220, 200, 240, 250, 260, 270, 280, 295, 310, 335, 355, 380]
}, {
  product: "笔记本",
  region: "华东",
  sale: [50, 60, 80, 110, 30, 20, 70, 30, 420, 30, 20, 20]
}, {
  product: "笔记本",
  region: "华北",
  sale: [30, 35, 50, 70, 20, 15, 30, 50, 710, 130, 20, 20]
}, {
  product: "笔记本",
  region: "华南",
  sale: [80, 120, 130, 140, 70, 75, 120, 90, 550, 120, 110, 100]
}, {
  product: "智能音箱",
  region: "华东",
  sale: [10, 30, 4, 5, 6, 5, 4, 5, 6, 5, 5, 25]
}, {
  product: "智能音箱",
  region: "华北",
  sale: [15, 50, 15, 15, 12, 11, 11, 12, 12, 14, 12, 40]
}, {
  product: "智能音箱",
  region: "华南",
  sale: [10, 40, 10, 6, 5, 6, 8, 6, 6, 6, 7, 26]
}]

/**
 *获得数据中的地区
 *
 * @param {*} data 传入商品数据
 * @returns 去重后的地区数组
 */
function getRegion(data) {
  return [...new Set(data.map(x => x.region))]
}
// console.log(getRegion(sourceData));

/**
 *获得数据中的商品
 *
 * @param {*} data 传入商品数据
 * @returns 去重后的商品数组
 */
function getProduct(data) {
  return [...new Set(data.map(x => x.product))]
}
// console.log(getProduct(sourceData));

/**
 * 获取过滤后的数据
 *
 * @param  data 传入的数据
 * @returns 过滤后的数据
 */
function getFilterData(data) {
  let regionCheckedList = getCheckBox(REGION, "input[type='checkbox']:checked")
    , regionCount = REGION.getElementsByTagName('input').length
    , productCheckedList = getCheckBox(PRODUCT, "input[type='checkbox']:checked")
    , productCount = PRODUCT.getElementsByTagName('input').length
    , filterData = data
    , title = []
  // console.log(regionCheckedList);
  // console.log(productCheckedList);
  if (regionCheckedList.length < regionCount - 1) {
    regionCheckedList = Array.from(regionCheckedList).map(x=>x.value)
    // console.log(regionCheckedList);    
    filterData = filterData.filter(x =>regionCheckedList.indexOf(x.region)!==-1);
  }
  if (productCheckedList.length < productCount - 1) {
    productCheckedList = Array.from(productCheckedList).map(x=>x.value)
    // console.log(regionCheckedList);    
    filterData = filterData.filter(x =>productCheckedList.indexOf(x.product)!==-1);
  }
  if(regionCheckedList.length === 1) {
    filterData = filterData.map(x=>{
      title = ["地区", "分类"]
      let arr = [...x.sale];
      arr.unshift(x.region,x.product);
      return arr;
    })
  } else {
    filterData = filterData.map(x=>{
      title = ["分类", "地区"]
      let arr = [...x.sale];
      arr.unshift(x.product, x.region);
      return arr;
    })
  }
  // 重新排序结果更整齐
  filterData.sort((a,b)=>{
    if(a[0]>b[0]) {
      return -1;
    } else if(a[0]<b[0]) {
      return 1;
    } else {
      if(a[1]>=b[1]) {
        return -1;
      } else {
        return 1;
      }
    }
  })
  // 处理数据渲染时合并单元格
  return {
    head: title,
    data: filterData
  };
}

