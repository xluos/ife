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

// 读取本地储存
let lsdata = JSON.parse(localStorage.getItem('ife37-38'));
if(lsdata) {
  sourceData = lsdata
}


/**
 *获得数据中的地区,用于制作多选框
 *
 * @param {*} data 传入商品数据
 * @returns 去重后的地区数组
 */
function getRegion(data) {
  return [...new Set(data.map(x => x.region))]
}
// console.log(getRegion(sourceData));

/**
 *获得数据中的商品,用于制作多选框
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
  let query = ROUTER.getQuery()
    , regionCheckedList = query.region
    , regionCount = REGION.getElementsByTagName('input').length
    , productCheckedList = query.product
    , productCount = PRODUCT.getElementsByTagName('input').length
    , filterData = JSON.parse(JSON.stringify(data))
    , title = []
  // 包装数据，设置数据在原数组中的位置
  filterData = filterData.map((x,index_x)=>{
    x.sale = x.sale.map((val,index_y)=>{      
      return {
        edit:true,
        value: val,
        x: index_x,
        y: index_y
      }
    })
    return x;
  })
  // console.log(regionCheckedList);
  // console.log(productCheckedList);
  
  if (regionCheckedList.length < regionCount - 1) {
    // regionCheckedList = Array.from(regionCheckedList).map(x=>x.value)
    // console.log(regionCheckedList);    
    filterData = filterData.filter(x =>regionCheckedList.indexOf(x.region)!==-1);
  }
  // console.log(filterData);
  if (productCheckedList.length < productCount - 1) {
    // productCheckedList = Array.from(productCheckedList).map(x=>x.value)
    // console.log(regionCheckedList);    
    filterData = filterData.filter(x =>productCheckedList.indexOf(x.product)!==-1);
  }
  if(regionCheckedList.length === 1) {
    title = ["地区", "分类"]
    filterData = filterData.map(x=>{
      let arr = [...x.sale];
      arr.unshift({
        edit:false,
        value: x.region
      },{
        edit:false,
        value: x.product
      });
      return arr;
    })
  } else {
    title = ["分类", "地区"]
    filterData = filterData.map(x=>{
      let arr = [...x.sale];
      arr.unshift({
        edit:false,
        value: x.product
      },{
        edit:false,
        value: x.region
      });
      return arr;
    })
  }
  // 重新排序结果更整齐
  filterData.sort((a,b)=>{
    if(a[0].value>b[0].value) {
      return -1;
    } else if(a[0].value<b[0].value) {
      return 1;
    } else {
      if(a[1].value>=b[1].value) {
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

/**
 * 获取图表所用的数据
 *
 * @returns 处理好的数据
 */
function getChartData(sourceData) {
  let data = getFilterData(sourceData).data;
  // console.log(data);
  
  return {
    text: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
    data: data.map(val=>val.slice(2).map(x=>x.value))
  }
}

function saveLocal() {
  localStorage.setItem('ife37-38',JSON.stringify(sourceData));
}

function setData(x,y,value) {
  sourceData[x].sale[y] = value;
  saveLocal();
}
