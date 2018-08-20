// window.onhashchange = function () {
//   console.log(location.href);
// }

// window.onload = function () {
//   console.log('onload');

// }

function Router() {

}

Router.prototype = {

  /**
   * 获得查询参数
   *
   * @returns 查询参数对象
   */
  getQuery: function () {
    if (window.location.hash) {
      let query = window.location.hash.match(/\?(\S*)/)[1];
      let queryObj = {};
      query.split('&').forEach(x => {
        x = decodeURI(x);
        let key_value = x.split('=');
        queryObj[key_value[0]] = JSON.parse(key_value[1]);
      })
      return queryObj;
    }
    // console.log(queryObj);
    return {};
  },
  /**
   * 设置hash查询参数
   *
   * @param {object} obj 参数对象
   * 
   */
  setHashQuery: function (obj) {
    let query = [];
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        const element = obj[key];
        query.push(`${key}=${JSON.stringify(element)}`);
      }
    }
    query = '#/?' + query.join('&')
    history.pushState(JSON.stringify(obj), null, query);
    // 绘制图表和表格
    insertTable(TABLE, getFilterData(sourceData));
    chartDrow(getChartData(sourceData))
  }
}
window.onpopstate = function (e) {
  // console.log(e.state);
  // 绘制图表和表格
  insertTable(TABLE, getFilterData(sourceData));
  chartDrow(getChartData(sourceData))
};
const ROUTER = new Router();

// ROUTER.setHashQuery({aaa:"456465",bsd:['78',"255",'123']});
// 初始化
if (!window.location.hash) {  
  window.location.hash = `#/?region=["华东"]&product=["手机"]`
}