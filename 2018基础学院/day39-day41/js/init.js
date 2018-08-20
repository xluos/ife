function chartDrow(data) {
  bar.drow(data)
  line.drow(data)
}
/**
 * 创建checkbox列表
 *
 * @param {*} Node 父元素
 * @param {*} checkBoxTextList checkbox选项
 */
function createCheckBox(Node, checkBoxTextList) {
  let query = ROUTER.getQuery()[Node.getAttribute('name')]
  // console.log();
  // console.log(query[0],query[0] === 'on');
  // console.log(query);
  

  let listHtml = `<label for="all-${Node.id}"><input type="checkbox" all=true id="all-${Node.id}" ${query.indexOf('on') !== -1 ? 'checked' : ''}>全选</label>`
  checkBoxTextList.forEach((element, index) => {
    listHtml += `<label for="${element}"><input type="checkbox" ${(query.indexOf(element) >= 0) ? 'checked' : ''} id="${element}" value="${element}">${element}</label>`
  });

  Node.innerHTML = listHtml;

  Node.addEventListener('change', (e) => {

    if (e.target.tagName === 'INPUT') {
      let checkedList = getCheckBox(e.path[2], "input[type='checkbox']:checked")
        , checkBoxList = getCheckBox(e.path[2], "input[type='checkbox']");
      // console.log(e);
      // 判断是否是全选按钮
      if (e.target.getAttribute('all')) {
        if (e.target.checked) {
          checkBoxList.forEach(x => { x.checked = true })
        } else {
          e.target.checked = true;
          // 取消这个功能以免全部取消时，筛选数据出错
          // checkBoxList.forEach(x => { x.checked = null })
        }
      } else {
        // 点击的按钮未选中时
        if (e.target.checked) {
          // 如果是最后一个全选按钮设置成选中状态
          if (checkedList.length === checkBoxTextList.length) {
            checkBoxList[0].checked = true;
          }

        } else {
          // 如果是取消非全选状态，去掉全选的选中状态
          if (checkedList.length === checkBoxTextList.length) {
            checkBoxList[0].checked = null;
            // 最后一个禁止选中
          } else if (checkedList.length === 0) {
            e.target.checked = true;
          }
        }
      }
      let regionCheckedList = getCheckBox(REGION, "input[type='checkbox']:checked")
        , productCheckedList = getCheckBox(PRODUCT, "input[type='checkbox']:checked")

      ROUTER.setHashQuery({
        region: Array.from(regionCheckedList).map(x => x.value),
        product: Array.from(productCheckedList).map(x => x.value)
      })
      // insertTable(TABLE, getFilterData(sourceData));
      // chartDrow(getChartData(sourceData))
    }
  })
  // console.log('createCheckBox');
}

var trCache = null
// 鼠标移入事件设置单行图表
TABLE.addEventListener('mouseover', (e) => {

  if (e.target.tagName === 'TD') {
    let parentNode = e.target.parentNode;
    if (trCache === parentNode) {
      return false;
    } else {
      trCache = parentNode;
      let data = Array.from(parentNode.children).map(x => parseInt(x.innerText)).slice(-12);

      chartDrow({
        text: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
        data: data
      });
    }

  }
}, false)
// 鼠标移出恢复显示全部图标
TABLE.addEventListener('mouseleave', (e) => {
  chartDrow(getChartData(sourceData))
}, false)

// 全局代理点击事件
document.addEventListener('click', (e) => {

  if (e.target.tagName === 'I') {
    let parent = e.target.parentNode
    // 恢复上一个表格的状态
    EDIT.reset();
    EDIT.setEdit(parent);
  } else if (e.target.tagName.search(/INPUT|BUTTON/) === -1) {
    EDIT.reset();
    EDIT.del();
  }
})

// 创建checkbox按钮
createCheckBox(REGION, getRegion(sourceData))
createCheckBox(PRODUCT, getProduct(sourceData))


// 绘制图表和表格
insertTable(TABLE, getFilterData(sourceData));
chartDrow(getChartData(sourceData))